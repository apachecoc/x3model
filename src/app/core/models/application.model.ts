import { ProfileCategory, ProfileTier } from './talent-profile.model';

export type ApplicationReviewStatus = 'new' | 'contacted' | 'needs_documents' | 'approved' | 'rejected';

export interface TalentApplication {
  id: string;
  alias: string;
  city: string;
  category: ProfileCategory;
  desiredTier: ProfileTier;
  contact: string;
  message: string;
  ageConfirmed: boolean;
  consentConfirmed: boolean;
  reviewStatus: ApplicationReviewStatus;
  createdAt: string;
}
