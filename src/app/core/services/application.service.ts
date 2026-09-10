import { Injectable, signal } from '@angular/core';
import { TalentApplication } from '@core/models/application.model';

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private readonly applicationsState = signal<TalentApplication[]>([]);

  readonly applications = this.applicationsState.asReadonly();

  createApplication(application: Omit<TalentApplication, 'id' | 'createdAt' | 'reviewStatus'>): TalentApplication {
    const created: TalentApplication = {
      ...application,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      reviewStatus: 'new',
    };

    this.applicationsState.update((applications) => [created, ...applications]);
    localStorage.setItem('x3-demo-applications', JSON.stringify(this.applicationsState()));

    return created;
  }
}
