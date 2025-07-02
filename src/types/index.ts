export interface FormData {
  productName: string;
  tone: 'school' | 'influencer';
}

export interface GeneratedContent {
  email1: string;
  email2: string;
  email3: string;
  email4: string;
  email5: string;
  email6: string;
  script: string;
}

export interface CollapsedSections {
  email1: boolean;
  email2: boolean;
  email3: boolean;
  email4: boolean;
  email5: boolean;
  email6: boolean;
  script: boolean;
}

export type LibraryTab = 'course' | 'coaching';