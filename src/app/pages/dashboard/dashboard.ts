import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsStore } from '../../core/forms-store';
import { FormModel } from '../../core/models';
import { ConfirmDialog } from '../../shared/confirm-dialog/confirm-dialog';

@Component({
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatMenuModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private readonly store = inject(FormsStore);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  readonly forms = this.store.formsSortedByDate;

  responseCount(formId: string): number {
    return this.store.responsesForForm(formId).length;
  }

  questionCount(form: FormModel): number {
    return form.questions.length;
  }

  createForm(): void {
    const form = this.store.createForm();
    this.router.navigate(['/editar', form.id]);
  }

  openBuilder(form: FormModel): void {
    this.router.navigate(['/editar', form.id]);
  }

  openFill(form: FormModel): void {
    this.router.navigate(['/formulario', form.id]);
  }

  openResponses(form: FormModel): void {
    this.router.navigate(['/formulario', form.id, 'respuestas']);
  }

  duplicate(form: FormModel): void {
    this.store.duplicateForm(form.id);
    this.snackBar.open('Formulario duplicado', 'Cerrar', { duration: 2500 });
  }

  remove(form: FormModel): void {
    const ref = this.dialog.open(ConfirmDialog, {
      data: {
        title: 'Eliminar formulario',
        message: `¿Eliminar "${form.title}" y todas sus respuestas? Esta acción no se puede deshacer.`,
        confirmLabel: 'Eliminar',
      },
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.deleteForm(form.id);
        this.snackBar.open('Formulario eliminado', 'Cerrar', { duration: 2500 });
      }
    });
  }
}
