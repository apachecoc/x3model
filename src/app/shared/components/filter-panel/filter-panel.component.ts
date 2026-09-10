import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileCategory, ProfileFilters, ProfileTier } from '@core/models/talent-profile.model';

@Component({
  selector: 'x3-filter-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss',
})
export class FilterPanelComponent {
  @Output() filtersChanged = new EventEmitter<Partial<ProfileFilters>>();

  readonly categories: Array<ProfileCategory | 'todas'> = ['todas', 'Presencial', 'Virtual', 'Eventos', 'Masajes', 'Contenido'];
  readonly tiers: Array<ProfileTier | 'todos'> = ['todos', 'VIP', 'Premium', 'Gold', 'Silver', 'Iniciadas'];
  readonly cities = ['todas', 'Santiago', 'Vina del Mar', 'Concepcion', 'Valparaiso'];

  readonly query = signal('');
  readonly city = signal('todas');
  readonly category = signal<ProfileCategory | 'todas'>('todas');
  readonly tier = signal<ProfileTier | 'todos'>('todos');

  submit(): void {
    this.filtersChanged.emit({
      query: this.query(),
      city: this.city(),
      category: this.category(),
      tier: this.tier(),
    });
  }

  setCategory(category: string): void {
    this.category.set(category as ProfileCategory | 'todas');
  }

  quickTier(tier: ProfileTier | 'todos'): void {
    this.tier.set(tier);
    this.submit();
  }
}
