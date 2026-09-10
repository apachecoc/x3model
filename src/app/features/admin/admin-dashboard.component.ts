import { Component, computed, inject } from '@angular/core';
import { ApplicationService } from '@core/services/application.service';
import { ProfileCatalogService } from '@core/services/profile-catalog.service';

interface MediaPreview {
  name: string;
  type: string;
  url: string;
}

@Component({
  selector: 'x3-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  private readonly applicationService = inject(ApplicationService);
  private readonly catalog = inject(ProfileCatalogService);

  readonly applications = this.applicationService.applications;
  readonly profiles = this.catalog.profiles;
  readonly publishedCount = computed(() => this.profiles().filter((profile) => profile.status === 'published').length);
  mediaPreviews: MediaPreview[] = [];

  previewMedia(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);

    this.mediaPreviews.forEach((preview) => URL.revokeObjectURL(preview.url));
    this.mediaPreviews = files.map((file) => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
    }));
  }
}
