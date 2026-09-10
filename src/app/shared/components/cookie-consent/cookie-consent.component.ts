import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

const COOKIE_KEY = 'x3-cookie-preference';

@Component({
  selector: 'x3-cookie-consent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.scss',
})
export class CookieConsentComponent {
  readonly visible = signal(!localStorage.getItem(COOKIE_KEY));

  accept(preference: 'essential' | 'all'): void {
    localStorage.setItem(COOKIE_KEY, preference);
    this.visible.set(false);
  }
}
