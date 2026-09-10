import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileCatalogService } from '@core/services/profile-catalog.service';
import { ProfileFilters } from '@core/models/talent-profile.model';
import { FilterPanelComponent } from '@shared/components/filter-panel/filter-panel.component';
import { ProfileCardComponent } from '@shared/components/profile-card/profile-card.component';

@Component({
  selector: 'x3-home-page',
  standalone: true,
  imports: [RouterLink, FilterPanelComponent, ProfileCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private readonly activeFilters = signal<Partial<ProfileFilters>>({});

  readonly profiles = computed(() => this.catalog.filterProfiles(this.activeFilters()));
  readonly experienceTags = ['Con video', 'Cara visible', 'Verificada', 'Disponible ahora', 'Nueva galeria'];
  readonly tiers = [
    { name: 'VIP', text: 'Seleccion superior, alta curaduria y prioridad visual.' },
    { name: 'Premium', text: 'Perfiles destacados con galeria cuidada y revision editorial.' },
    { name: 'Gold', text: 'Buena visibilidad, contenido aprobado y disponibilidad clara.' },
    { name: 'Silver', text: 'Perfiles confiables para descubrir nuevas opciones.' },
    { name: 'Iniciadas', text: 'Talentos nuevos que comienzan a construir presencia.' },
  ];
  readonly shorts = [
    { name: 'Ambar', tier: 'VIP', gradient: 'linear-gradient(145deg, #230d12, #b91f35 52%, #d9ad67)' },
    { name: 'Maia', tier: 'Premium', gradient: 'linear-gradient(145deg, #0f172a, #2f6f88 50%, #d9ad67)' },
    { name: 'Luna', tier: 'VIP', gradient: 'linear-gradient(145deg, #1b1025, #8a1d4b 50%, #f0c56f)' },
    { name: 'Renata', tier: 'Premium', gradient: 'linear-gradient(145deg, #171717, #5b1f1f 52%, #cc8f52)' },
    { name: 'Cora', tier: 'Gold', gradient: 'linear-gradient(145deg, #0f1d22, #356859 52%, #d8b36a)' },
  ];
  constructor(private readonly catalog: ProfileCatalogService) {}

  updateFilters(filters: Partial<ProfileFilters>): void {
    this.activeFilters.set(filters);
  }
}
