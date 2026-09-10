import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'x3-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {}
