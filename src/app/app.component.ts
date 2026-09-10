import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './shared/layout/site-header/site-header.component';
import { SiteFooterComponent } from './shared/layout/site-footer/site-footer.component';
import { AgeGateComponent } from './shared/components/age-gate/age-gate.component';
import { CookieConsentComponent } from './shared/components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'x3-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, AgeGateComponent, CookieConsentComponent],
  template: `
    <x3-site-header />
    <router-outlet />
    <x3-site-footer />
    <x3-age-gate />
    <x3-cookie-consent />
  `,
})
export class AppComponent {}
