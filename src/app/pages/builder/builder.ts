import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsStore } from '../../core/forms-store';
import {
  FormModel,
  Question,
  QuestionType,
  QUESTION_TYPE_LABELS,
  CHOICE_TYPES,
  SCALE_TYPES,
} from '../../core/models';

@Component({
  imports: [
    FormsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  selector: 'app-builder',
  styleUrl: './builder.scss',
  templateUrl: './builder.html',
})
export class Builder {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(FormsStore);
  private readonly snackBar = inject(MatSnackBar);
  private saveTimeout?: ReturnType<typeof setTimeout>;

  readonly form = signal<FormModel | null>(null);
  readonly questionTypes: { value: QuestionType; label: string }[] = (
    Object.keys(QUESTION_TYPE_LABELS) as QuestionType[]
  ).map((value) => ({ value, label: QUESTION_TYPE_LABELS[value] }));
  readonly scaleMinOptions = [0, 1];
  readonly scaleMaxOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    const existing = id ? this.store.getForm(id) : undefined;
    if (!existing) {
      this.router.navigate(['/inicio']);
    } else {
      this.form.set(structuredClone(existing));
    }

    effect(() => {
      const current = this.form();
      if (!current) return;
      clearTimeout(this.saveTimeout);
      this.saveTimeout = setTimeout(() => this.store.updateForm(structuredClone(current)), 500);
    });
  }

  isChoiceType(type: QuestionType): boolean {
    return CHOICE_TYPES.includes(type);
  }

  isScaleType(type: QuestionType): boolean {
    return SCALE_TYPES.includes(type);
  }

  updateTitle(value: string): void {
    this.form.update((f) => (f ? { ...f, title: value } : f));
  }

  updateDescription(value: string): void {
    this.form.update((f) => (f ? { ...f, description: value } : f));
  }

  addQuestion(): void {
    this.form.update((f) => {
      if (!f) return f;
      return { ...f, questions: [...f.questions, this.store.newQuestion('short')] };
    });
  }

  removeQuestion(id: string): void {
    this.form.update((f) => {
      if (!f) return f;
      return { ...f, questions: f.questions.filter((q) => q.id !== id) };
    });
  }

  duplicateQuestion(id: string): void {
    this.form.update((f) => {
      if (!f) return f;
      const index = f.questions.findIndex((q) => q.id === id);
      if (index === -1) return f;
      const copy: Question = { ...structuredClone(f.questions[index]), id: crypto.randomUUID() };
      const questions = [...f.questions];
      questions.splice(index + 1, 0, copy);
      return { ...f, questions };
    });
  }

  updateQuestion(id: string, patch: Partial<Question>): void {
    this.form.update((f) => {
      if (!f) return f;
      return {
        ...f,
        questions: f.questions.map((q) => (q.id === id ? { ...q, ...patch } : q)),
      };
    });
  }

  onTypeChange(question: Question, type: QuestionType): void {
    const needsOptions = this.isChoiceType(type);
    const options = needsOptions
      ? question.options.length
        ? question.options
        : [{ id: crypto.randomUUID(), label: 'Opción 1' }]
      : [];
    this.updateQuestion(question.id, { type, options });
  }

  addOption(question: Question): void {
    const options = [
      ...question.options,
      { id: crypto.randomUUID(), label: `Opción ${question.options.length + 1}` },
    ];
    this.updateQuestion(question.id, { options });
  }

  updateOption(question: Question, optionId: string, label: string): void {
    const options = question.options.map((o) => (o.id === optionId ? { ...o, label } : o));
    this.updateQuestion(question.id, { options });
  }

  removeOption(question: Question, optionId: string): void {
    const options = question.options.filter((o) => o.id !== optionId);
    this.updateQuestion(question.id, { options });
  }

  drop(event: CdkDragDrop<Question[]>): void {
    this.form.update((f) => {
      if (!f) return f;
      const questions = [...f.questions];
      moveItemInArray(questions, event.previousIndex, event.currentIndex);
      return { ...f, questions };
    });
  }

  goBack(): void {
    this.router.navigate(['/inicio']);
  }

  preview(): void {
    const f = this.form();
    if (f) this.router.navigate(['/formulario', f.id]);
  }

  viewResponses(): void {
    const f = this.form();
    if (f) this.router.navigate(['/formulario', f.id, 'respuestas']);
  }
}
