import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsStore } from '../../core/forms-store';
import { AnswerValue, FormModel, FormResponse, Question } from '../../core/models';
import { ConfirmDialog } from '../../shared/confirm-dialog/confirm-dialog';

interface OptionTally {
  label: string;
  count: number;
  percent: number;
}

@Component({
  imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule, MatTabsModule],
  selector: 'app-responses',
  styleUrl: './responses.scss',
  templateUrl: './responses.html',
})
export class Responses {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(FormsStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  readonly form = signal<FormModel | null>(null);

  readonly responses = computed<FormResponse[]>(() => {
    const f = this.form();
    return f ? this.store.responsesForForm(f.id) : [];
  });

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    const existing = id ? this.store.getForm(id) : undefined;
    if (!existing) {
      this.router.navigate(['/inicio']);
    } else {
      this.form.set(existing);
    }
  }

  answerText(value: AnswerValue | undefined): string {
    if (!value) return '—';
    return Array.isArray(value) ? value.join(', ') || '—' : value;
  }

  isTallyType(type: Question['type']): boolean {
    return type === 'radio' || type === 'checkbox' || type === 'dropdown' || type === 'linear_scale';
  }

  tallyFor(question: Question): OptionTally[] {
    const total = this.responses().length || 1;
    const labels =
      question.type === 'linear_scale'
        ? this.scaleLabels(question)
        : question.options.map((o) => o.label);
    return labels.map((label) => {
      const count = this.responses().filter((r) => {
        const value = r.answers[question.id];
        if (Array.isArray(value)) return value.includes(label);
        return value === label;
      }).length;
      return { label, count, percent: Math.round((count / total) * 100) };
    });
  }

  private scaleLabels(question: Question): string[] {
    const labels: string[] = [];
    for (let n = question.scaleMin; n <= question.scaleMax; n++) labels.push(n.toString());
    return labels;
  }

  textAnswersFor(question: Question): string[] {
    return this.responses()
      .map((r) => r.answers[question.id])
      .filter((v): v is string => typeof v === 'string' && v.trim().length > 0);
  }

  clearResponses(): void {
    const f = this.form();
    if (!f) return;
    const ref = this.dialog.open(ConfirmDialog, {
      data: {
        title: 'Borrar respuestas',
        message: `¿Eliminar las ${this.responses().length} respuestas de este formulario?`,
        confirmLabel: 'Borrar',
      },
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.clearResponses(f.id);
        this.snackBar.open('Respuestas eliminadas', 'Cerrar', { duration: 2500 });
      }
    });
  }
}
