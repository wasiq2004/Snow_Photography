
export type GalleryCategory = 'Wedding Photos' | 'Couple Portraits' | 'Candid Moments';

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export interface VideoItem {
  id: number;
  videoId: string; // YouTube video ID
  title: string;
  thumbnail: string;
}
