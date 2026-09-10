import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page.component').then((m) => m.HomePageComponent),
    title: '3X | Talentos adultos verificados',
  },
  {
    path: 'perfil/:slug',
    loadComponent: () =>
      import('./features/profile/profile-detail-page.component').then((m) => m.ProfileDetailPageComponent),
    title: 'Perfil | 3X',
  },
  {
    path: 'postular',
    loadComponent: () => import('./features/apply/apply-page.component').then((m) => m.ApplyPageComponent),
    title: 'Crear perfil | 3X',
  },
  {
    path: 'anunciate',
    redirectTo: 'postular',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin-dashboard.component').then((m) => m.AdminDashboardComponent),
    title: 'Admin | 3X',
  },
  {
    path: 'legal',
    loadComponent: () => import('./features/legal/legal-page.component').then((m) => m.LegalPageComponent),
    title: 'Seguridad y terminos | 3X',
  },
  {
    path: 'terminos-y-condiciones',
    loadComponent: () => import('./features/legal/legal-document-page.component').then((m) => m.LegalDocumentPageComponent),
    data: { document: 'terms' },
    title: 'Terminos y condiciones | 3X',
  },
  {
    path: 'politica-de-privacidad',
    loadComponent: () => import('./features/legal/legal-document-page.component').then((m) => m.LegalDocumentPageComponent),
    data: { document: 'privacy' },
    title: 'Politica de privacidad | 3X',
  },
  {
    path: 'politica-de-cookies',
    loadComponent: () => import('./features/legal/legal-document-page.component').then((m) => m.LegalDocumentPageComponent),
    data: { document: 'cookies' },
    title: 'Politica de cookies | 3X',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
