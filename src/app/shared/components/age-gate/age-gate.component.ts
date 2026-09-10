import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

const AGE_GATE_KEY = 'x3-adult-consent';
const PUBLIC_LEGAL_ROUTES = ['/terminos-y-condiciones', '/politica-de-privacidad', '/politica-de-cookies', '/legal'];

interface AgeGateCopy {
  title: string;
  body: string;
  enter: string;
  exit: string;
}

const COPY: Record<string, AgeGateCopy> = {
  es: {
    title: 'Este es un sitio para adultos',
    body:
      'Este sitio contiene contenido destinado exclusivamente a personas adultas. Al ingresar, declaras que tienes al menos 18 anos, o la mayoria de edad en tu jurisdiccion, y aceptas nuestros documentos legales.',
    enter: 'ENTRAR',
    exit: 'SALIR',
  },
  en: {
    title: 'This is an adults-only site',
    body:
      'This site is intended exclusively for adults. By entering, you confirm you are at least 18 years old, or the age of majority in your jurisdiction, and accept our legal documents.',
    enter: 'ENTER',
    exit: 'EXIT',
  },
  pt: {
    title: 'Este e um site para adultos',
    body:
      'Este site e destinado exclusivamente a pessoas adultas. Ao entrar, voce confirma que tem idade legal e aceita nossos documentos legais.',
    enter: 'ENTRAR',
    exit: 'SAIR',
  },
};

@Component({
  selector: 'x3-age-gate',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './age-gate.component.html',
  styleUrl: './age-gate.component.scss',
})
export class AgeGateComponent {
  private readonly router = inject(Router);
  private readonly accepted = signal(localStorage.getItem(AGE_GATE_KEY) === 'accepted');
  private readonly currentUrl = signal(this.router.url);

  readonly language = signal<keyof typeof COPY>('es');
  readonly copy = computed(() => COPY[this.language()]);
  readonly visible = computed(() => !this.accepted() && !this.isLegalRoute(this.currentUrl()));
  readonly languages = [
    { id: 'es', label: 'Espanol' },
    { id: 'en', label: 'English' },
    { id: 'pt', label: 'Portugues' },
    { id: 'fr', label: 'Francais' },
    { id: 'it', label: 'Italiano' },
    { id: 'de', label: 'Deutsch' },
    { id: 'ru', label: 'Russkiy' },
    { id: 'el', label: 'Ellinika' },
    { id: 'tr', label: 'Turkce' },
  ];

  constructor() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe((event) => {
      this.currentUrl.set(event.urlAfterRedirects);
    });
  }

  accept(): void {
    localStorage.setItem(AGE_GATE_KEY, 'accepted');
    this.accepted.set(true);
  }

  exit(): void {
    window.location.href = 'https://www.google.com';
  }

  changeLanguage(language: string): void {
    if (language in COPY) {
      this.language.set(language as keyof typeof COPY);
    }
  }

  private isLegalRoute(url: string): boolean {
    return PUBLIC_LEGAL_ROUTES.some((route) => url.startsWith(route));
  }
}
