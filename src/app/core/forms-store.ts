import { Service, signal, computed } from '@angular/core';
import { FormModel, FormResponse, Question, QuestionType } from './models';

const FORMS_KEY = 'forms-clone.forms';
const RESPONSES_KEY = 'forms-clone.responses';

function uid(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function load<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function save<T>(key: string, value: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — state stays in-memory only
  }
}

@Service()
export class FormsStore {
  private readonly formsSignal = signal<FormModel[]>(load<FormModel>(FORMS_KEY));
  private readonly responsesSignal = signal<FormResponse[]>(load<FormResponse>(RESPONSES_KEY));

  readonly forms = this.formsSignal.asReadonly();
  readonly responses = this.responsesSignal.asReadonly();

  formsSortedByDate = computed(() =>
    [...this.formsSignal()].sort((a, b) => b.updatedAt - a.updatedAt),
  );

  getForm(id: string): FormModel | undefined {
    return this.formsSignal().find((f) => f.id === id);
  }

  responsesForForm(formId: string): FormResponse[] {
    return this.responsesSignal()
      .filter((r) => r.formId === formId)
      .sort((a, b) => b.submittedAt - a.submittedAt);
  }

  createForm(): FormModel {
    const now = Date.now();
    const form: FormModel = {
      id: uid(),
      title: 'Formulario sin título',
      description: '',
      questions: [this.newQuestion('short')],
      createdAt: now,
      updatedAt: now,
    };
    this.formsSignal.update((list) => [...list, form]);
    this.persistForms();
    return form;
  }

  updateForm(form: FormModel): void {
    form.updatedAt = Date.now();
    this.formsSignal.update((list) => list.map((f) => (f.id === form.id ? form : f)));
    this.persistForms();
  }

  deleteForm(id: string): void {
    this.formsSignal.update((list) => list.filter((f) => f.id !== id));
    this.responsesSignal.update((list) => list.filter((r) => r.formId !== id));
    this.persistForms();
    this.persistResponses();
  }

  duplicateForm(id: string): FormModel | undefined {
    const original = this.getForm(id);
    if (!original) return undefined;
    const now = Date.now();
    const copy: FormModel = {
      ...structuredClone(original),
      id: uid(),
      title: `${original.title} (copia)`,
      createdAt: now,
      updatedAt: now,
    };
    this.formsSignal.update((list) => [...list, copy]);
    this.persistForms();
    return copy;
  }

  newQuestion(type: QuestionType = 'short'): Question {
    return {
      id: uid(),
      type,
      title: '',
      required: false,
      options:
        type === 'radio' || type === 'checkbox' || type === 'dropdown'
          ? [{ id: uid(), label: 'Opción 1' }]
          : [],
      scaleMin: 1,
      scaleMax: 5,
      scaleMinLabel: '',
      scaleMaxLabel: '',
    };
  }

  submitResponse(formId: string, answers: Record<string, string | string[]>): void {
    const response: FormResponse = {
      id: uid(),
      formId,
      answers,
      submittedAt: Date.now(),
    };
    this.responsesSignal.update((list) => [...list, response]);
    this.persistResponses();
  }

  clearResponses(formId: string): void {
    this.responsesSignal.update((list) => list.filter((r) => r.formId !== formId));
    this.persistResponses();
  }

  private persistForms(): void {
    save(FORMS_KEY, this.formsSignal());
  }

  private persistResponses(): void {
    save(RESPONSES_KEY, this.responsesSignal());
  }
}
