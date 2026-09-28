import { Component, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsStore } from '../../core/forms-store';
import { AnswerValue, FormModel, Question } from '../../core/models';

@Component({
  imports: [
    RouterLink,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  selector: 'app-fill',
  styleUrl: './fill.scss',
  templateUrl: './fill.html',
})
export class Fill {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(FormsStore);
  private readonly location = inject(Location);

  readonly form = signal<FormModel | null>(null);
  readonly answers = signal<Record<string, AnswerValue>>({});
  readonly submitted = signal(false);
  readonly errors = signal<Record<string, boolean>>({});

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    const existing = id ? this.store.getForm(id) : undefined;
    if (!existing) {
      this.router.navigate(['/inicio']);
    } else {
      this.form.set(existing);
    }
  }

  scaleRange(question: Question): number[] {
    const range: number[] = [];
    for (let n = question.scaleMin; n <= question.scaleMax; n++) range.push(n);
    return range;
  }

  goBack(): void {
    this.location.back();
  }

  setAnswer(questionId: string, value: AnswerValue): void {
    this.answers.update((a) => ({ ...a, [questionId]: value }));
  }

  toggleCheckbox(questionId: string, optionLabel: string, checked: boolean): void {
    const current = (this.answers()[questionId] as string[] | undefined) ?? [];
    const next = checked ? [...current, optionLabel] : current.filter((v) => v !== optionLabel);
    this.setAnswer(questionId, next);
  }

  isChecked(questionId: string, optionLabel: string): boolean {
    const current = (this.answers()[questionId] as string[] | undefined) ?? [];
    return current.includes(optionLabel);
  }

  submit(): void {
    const f = this.form();
    if (!f) return;

    const errors: Record<string, boolean> = {};
    for (const q of f.questions) {
      if (!q.required) continue;
      const value = this.answers()[q.id];
      const isEmpty = !value || (Array.isArray(value) && value.length === 0);
      if (isEmpty) errors[q.id] = true;
    }
    this.errors.set(errors);
    if (Object.keys(errors).length > 0) return;

    this.store.submitResponse(f.id, this.answers());
    this.submitted.set(true);
  }

  submitAnother(): void {
    this.answers.set({});
    this.errors.set({});
    this.submitted.set(false);
  }
}
