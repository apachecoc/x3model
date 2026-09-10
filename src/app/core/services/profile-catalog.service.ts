import { Injectable, signal } from '@angular/core';
import { SEED_PROFILES } from '@data/seed-profiles';
import { ProfileFilters, TalentProfile } from '@core/models/talent-profile.model';

const DEFAULT_FILTERS: ProfileFilters = {
  query: '',
  city: 'todas',
  category: 'todas',
  tier: 'todos',
};

@Injectable({ providedIn: 'root' })
export class ProfileCatalogService {
  private readonly profilesState = signal<TalentProfile[]>(SEED_PROFILES);

  readonly profiles = this.profilesState.asReadonly();

  filterProfiles(filters: Partial<ProfileFilters>): TalentProfile[] {
    const activeFilters = { ...DEFAULT_FILTERS, ...filters };

    return this.profiles().filter((profile) => {
      const query = activeFilters.query.trim().toLowerCase();
      const matchesQuery =
        !query ||
        profile.displayName.toLowerCase().includes(query) ||
        profile.zone.toLowerCase().includes(query) ||
        profile.tags.some((tag) => tag.toLowerCase().includes(query));
      const matchesCity = activeFilters.city === 'todas' || profile.city === activeFilters.city;
      const matchesCategory = activeFilters.category === 'todas' || profile.category === activeFilters.category;
      const matchesTier = activeFilters.tier === 'todos' || profile.tier === activeFilters.tier;

      return profile.status === 'published' && matchesQuery && matchesCity && matchesCategory && matchesTier;
    });
  }

  findBySlug(slug: string): TalentProfile | undefined {
    return this.profiles().find((profile) => profile.slug === slug);
  }
}
