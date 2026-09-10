import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LEGAL_DOCUMENTS } from '@data/legal-documents';
import { LegalDocument } from '@core/models/legal-document.model';

@Component({
  selector: 'x3-legal-document-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './legal-document-page.component.html',
  styleUrl: './legal-document-page.component.scss',
})
export class LegalDocumentPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly document = computed<LegalDocument>(() => {
    const id = this.route.snapshot.data['document'] as LegalDocument['id'];
    return LEGAL_DOCUMENTS[id] ?? LEGAL_DOCUMENTS.terms;
  });
}
