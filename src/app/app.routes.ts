import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./pages/builder/builder').then((m) => m.Builder),
  },
  {
    path: 'formulario/:id',
    loadComponent: () => import('./pages/fill/fill').then((m) => m.Fill),
  },
  {
    path: 'formulario/:id/respuestas',
    loadComponent: () => import('./pages/responses/responses').then((m) => m.Responses),
  },
  { path: '**', redirectTo: 'inicio' },
];
