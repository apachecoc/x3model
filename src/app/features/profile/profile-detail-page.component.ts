import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfileCatalogService } from '@core/services/profile-catalog.service';

@Component({
  selector: 'x3-profile-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile-detail-page.component.html',
  styleUrl: './profile-detail-page.component.scss',
})
export class ProfileDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly catalog = inject(ProfileCatalogService);

  readonly profile = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    return this.catalog.findBySlug(slug);
  });
}
