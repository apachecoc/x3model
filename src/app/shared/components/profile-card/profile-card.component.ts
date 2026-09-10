import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TalentProfile } from '@core/models/talent-profile.model';

@Component({
  selector: 'x3-profile-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  readonly profile = input.required<TalentProfile>();
}
