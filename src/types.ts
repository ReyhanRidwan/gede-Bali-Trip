export type Language = 'id' | 'en';

export interface TourPackage {
  id: string;
  title: string;
  titleEn: string;
  tag: string;
  duration: string;
  durationEn: string;
  price: number;
  priceFormatted?: string;
  priceNote: string;
  priceNoteEn: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  descriptionEn: string;
  destinations: string[];
  inclusions: string[];
  inclusionsEn: string[];
  exclusions?: string[];
  exclusionsEn?: string[];
  extraHourNote?: string;
  extraHourNoteEn?: string;
  ctaText?: string;
  ctaTextEn?: string;
  surchargeNote?: string;
  surchargeNoteEn?: string;
  itinerary: {
    time: string;
    activity: string;
    activityEn: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  from: string;
  comment: string;
  rating: number;
  date: string;
  avatar: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
}
