export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDocument {
  id: 'terms' | 'privacy' | 'cookies';
  title: string;
  summary: string;
  lastUpdated: string;
  sections: LegalSection[];
}
