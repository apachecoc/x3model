export type ProfileCategory = 'Presencial' | 'Virtual' | 'Eventos' | 'Masajes' | 'Contenido';
export type ProfileTier = 'VIP' | 'Premium' | 'Gold' | 'Silver' | 'Iniciadas';
export type ProfileStatus = 'draft' | 'pending_review' | 'published' | 'paused' | 'rejected';
export type AvailabilityStatus = 'Disponible' | 'Nueva' | 'Online' | 'Verificada' | 'Top';

export interface TalentMedia {
  id: string;
  kind: 'image' | 'short-video';
  url: string;
  storagePath: string;
  approved: boolean;
  sortOrder: number;
}

export interface TalentProfile {
  id: string;
  ownerUid?: string;
  slug: string;
  displayName: string;
  city: string;
  zone: string;
  category: ProfileCategory;
  tier: ProfileTier;
  declaredAge: number;
  ageConfirmed: boolean;
  availability: AvailabilityStatus;
  status: ProfileStatus;
  shortBio: string;
  tags: string[];
  coverGradient: string;
  media: TalentMedia[];
  publishedAt?: string;
  updatedAt: string;
}

export interface ProfileFilters {
  query: string;
  city: string;
  category: ProfileCategory | 'todas';
  tier: ProfileTier | 'todos';
}
