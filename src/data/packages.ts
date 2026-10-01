import { TourPackage, Testimonial, GalleryPhoto } from '../types';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'ubud-highlights',
    title: 'UBUD HIGHLIGHTS',
    titleEn: 'UBUD HIGHLIGHTS',
    tag: 'Culture • Nature • Tradition',
    duration: 'Hingga 10 Jam (Full Day)',
    durationEn: 'Up to 10 hours',
    price: 45,
    priceFormatted: 'USD $45',
    priceNote: '/ mobil (hingga 10 jam)',
    priceNoteEn: '/ car (up to 10 hours)',
    rating: 5.0,
    reviewsCount: 248,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397434/c67903ef-d494-4a2d-8614-e2e2964fc934.png',
    description: "Discover the heart of Bali with a private journey through Ubud's beautiful rice terraces, sacred temples, waterfalls and traditional Balinese culture.",
    descriptionEn: "Discover the heart of Bali with a private journey through Ubud's beautiful rice terraces, sacred temples, waterfalls and traditional Balinese culture.",
    destinations: [
      'Tegalalang Rice Terrace',
      'Tirta Empul Holy Water Temple',
      'Ubud Monkey Forest',
      'Ubud Palace',
      'Ubud Art Market',
      'Tegenungan Waterfall'
    ],
    inclusions: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    inclusionsEn: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    exclusions: [
      'Entrance tickets, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    exclusionsEn: [
      'Entrance tickets, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    extraHourNote: 'Extra hour: USD $5/hour/car',
    extraHourNoteEn: 'Extra hour: USD $5/hour/car',
    ctaText: 'BOOK YOUR UBUD EXPERIENCE',
    ctaTextEn: 'BOOK YOUR UBUD EXPERIENCE',
    itinerary: [
      { time: '08.30 - 09.30', activity: 'Hotel / villa pick-up with private air-conditioned car', activityEn: 'Hotel / villa pick-up with private air-conditioned car' },
      { time: '10.00 - 11.15', activity: 'Tegalalang Rice Terrace & scenic valley view', activityEn: 'Tegalalang Rice Terrace & scenic valley view' },
      { time: '11.30 - 12.45', activity: 'Tirta Empul Holy Water Temple (Sacred Spring purification)', activityEn: 'Tirta Empul Holy Water Temple (Sacred Spring purification)' },
      { time: '13.00 - 14.15', activity: 'Tegenungan Waterfall & lush river canyon', activityEn: 'Tegenungan Waterfall & lush river canyon' },
      { time: '14.45 - 16.00', activity: 'Ubud Sacred Monkey Forest Sanctuary', activityEn: 'Ubud Sacred Monkey Forest Sanctuary' },
      { time: '16.15 - 17.30', activity: 'Ubud Palace & Ubud Art Market shopping', activityEn: 'Ubud Palace & Ubud Art Market shopping' },
      { time: '17.30 - 18.30', activity: 'Comfortable drop-off back to your hotel/villa', activityEn: 'Comfortable drop-off back to your hotel/villa' }
    ]
  },
  {
    id: 'uluwatu-sunset',
    title: 'ULUWATU & SUNSET',
    titleEn: 'ULUWATU & SUNSET',
    tag: 'Beaches • Temple • Sunset • Kecak Dance',
    duration: 'Hingga 10 Jam (Full Day)',
    durationEn: 'Up to 10 hours',
    price: 45,
    priceFormatted: 'USD $45',
    priceNote: '/ mobil (hingga 10 jam)',
    priceNoteEn: '/ car (up to 10 hours)',
    rating: 5.0,
    reviewsCount: 312,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790768100/551bf87a-06ee-4f26-8f8f-c854b502cd31.png',
    description: "Explore Bali's spectacular southern coastline and finish your day with the legendary sunset at Uluwatu Temple.",
    descriptionEn: "Explore Bali's spectacular southern coastline and finish your day with the legendary sunset at Uluwatu Temple.",
    destinations: [
      'Padang Padang Beach',
      'Thomas Beach',
      'Suluban Beach',
      'Uluwatu Temple',
      'Kecak Fire Dance',
      'Jimbaran Bay'
    ],
    inclusions: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    inclusionsEn: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    exclusions: [
      'Entrance tickets, Kecak Dance tickets, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    exclusionsEn: [
      'Entrance tickets, Kecak Dance tickets, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    extraHourNote: 'Extra hour: USD $5/hour/car',
    extraHourNoteEn: 'Extra hour: USD $5/hour/car',
    ctaText: 'BOOK YOUR SUNSET TOUR',
    ctaTextEn: 'BOOK YOUR SUNSET TOUR',
    itinerary: [
      { time: '10.30 - 11.30', activity: 'Hotel / villa pick-up with private air-conditioned car', activityEn: 'Hotel / villa pick-up with private air-conditioned car' },
      { time: '12.00 - 13.30', activity: 'Padang Padang Beach & Thomas Beach relaxing / swimming', activityEn: 'Padang Padang Beach & Thomas Beach relaxing / swimming' },
      { time: '14.00 - 15.30', activity: 'Suluban Beach (Blue Point) cave & scenic cliffs', activityEn: 'Suluban Beach (Blue Point) cave & scenic cliffs' },
      { time: '16.00 - 18.00', activity: 'Uluwatu Cliff Temple panoramic ocean view', activityEn: 'Uluwatu Cliff Temple panoramic ocean view' },
      { time: '18.00 - 19.00', activity: 'Mesmerizing Sunset Kecak & Fire Dance Performance', activityEn: 'Mesmerizing Sunset Kecak & Fire Dance Performance' },
      { time: '19.30 - 20.45', activity: 'Romantic fresh seafood dinner at Jimbaran Bay (optional)', activityEn: 'Romantic fresh seafood dinner at Jimbaran Bay (optional)' },
      { time: '21.00 - 22.00', activity: 'Comfortable drop-off back to your hotel/villa', activityEn: 'Comfortable drop-off back to your hotel/villa' }
    ]
  },
  {
    id: 'lempuyang-temple',
    title: 'LEMPUYANG TEMPLE',
    titleEn: 'LEMPUYANG TEMPLE',
    tag: 'The Iconic Gates of Heaven',
    duration: 'Hingga 10 Jam (Full Day)',
    durationEn: 'Up to 10 hours',
    price: 60,
    priceFormatted: 'USD $60',
    priceNote: '/ mobil (hingga 10 jam)',
    priceNoteEn: '/ car (up to 10 hours)',
    rating: 4.9,
    reviewsCount: 198,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767054/young-woman-standing-temple-gates-lempuyang-luhur-temple-bali-indonesia-vintage-tone-scaled_n7cmrt.webp',
    description: "Journey through the stunning landscapes of East Bali and visit the famous Lempuyang Temple, one of Bali's most iconic cultural landmarks.",
    descriptionEn: "Journey through the stunning landscapes of East Bali and visit the famous Lempuyang Temple, one of Bali's most iconic cultural landmarks.",
    destinations: [
      'Lempuyang Temple – Gates of Heaven',
      'Tirta Gangga Water Palace',
      'Traditional East Bali villages',
      'Beautiful mountain landscapes',
      'Optional coffee plantation'
    ],
    inclusions: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    inclusionsEn: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    exclusions: [
      'Temple entrance, shuttle service, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    exclusionsEn: [
      'Temple entrance, shuttle service, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    surchargeNote: 'EAST BALI SURCHARGE: +USD $15/car (Sudah termasuk dalam tarif)',
    surchargeNoteEn: 'EAST BALI SURCHARGE: +USD $15/car (Included in base rate)',
    extraHourNote: 'Extra hour: USD $5/hour/car',
    extraHourNoteEn: 'Extra hour: USD $5/hour/car',
    ctaText: 'BOOK YOUR EAST BALI ADVENTURE',
    ctaTextEn: 'BOOK YOUR EAST BALI ADVENTURE',
    itinerary: [
      { time: '05.00 - 06.30', activity: 'Early hotel / villa pick-up for best photography queues', activityEn: 'Early hotel / villa pick-up for best photography queues' },
      { time: '08.00 - 11.00', activity: 'Lempuyang Temple – Iconic Gates of Heaven & Mount Agung view', activityEn: 'Lempuyang Temple – Iconic Gates of Heaven & Mount Agung view' },
      { time: '11.30 - 13.00', activity: 'Tirta Gangga Water Palace (Sacred koi fish pools & stepping stones)', activityEn: 'Tirta Gangga Water Palace (Sacred koi fish pools & stepping stones)' },
      { time: '13.15 - 14.15', activity: 'Traditional East Bali lunch overlooking rolling green hills', activityEn: 'Traditional East Bali lunch overlooking rolling green hills' },
      { time: '14.30 - 15.30', activity: 'Traditional East Bali villages & authentic coffee plantation', activityEn: 'Traditional East Bali villages & authentic coffee plantation' },
      { time: '16.00 - 18.00', activity: 'Scenic drive back through lush mountain landscapes & hotel drop-off', activityEn: 'Scenic drive back through lush mountain landscapes & hotel drop-off' }
    ]
  },
  {
    id: 'lovina-dolphin-experience',
    title: 'LOVINA DOLPHIN EXPERIENCE',
    titleEn: 'LOVINA DOLPHIN EXPERIENCE',
    tag: 'Sunrise • Dolphins • Waterfalls • North Bali',
    duration: 'Hingga 10 Jam (Full Day)',
    durationEn: 'Up to 10 hours',
    price: 60,
    priceFormatted: 'USD $60',
    priceNote: '/ mobil (hingga 10 jam)',
    priceNoteEn: '/ car (up to 10 hours)',
    rating: 5.0,
    reviewsCount: 174,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790771271/13fb44ac-cc1d-435e-8c79-3752721610b5.png',
    description: 'Wake up early and experience the magic of Lovina, famous for its beautiful sunrise and dolphin-watching experience.',
    descriptionEn: 'Wake up early and experience the magic of Lovina, famous for its beautiful sunrise and dolphin-watching experience.',
    destinations: [
      'Lovina Beach',
      'Sunrise dolphin watching',
      'Traditional boat experience',
      'Banjar Hot Spring',
      'Gitgit Waterfall',
      'Ulun Danu Beratan'
    ],
    inclusions: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    inclusionsEn: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    exclusions: [
      'Dolphin boat, entrance tickets, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    exclusionsEn: [
      'Dolphin boat, entrance tickets, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    surchargeNote: 'NORTH BALI SURCHARGE: +USD $15/car (Sudah termasuk dalam tarif)',
    surchargeNoteEn: 'NORTH BALI SURCHARGE: +USD $15/car (Included in base rate)',
    extraHourNote: 'Extra hour: USD $5/hour/car',
    extraHourNoteEn: 'Extra hour: USD $5/hour/car',
    ctaText: 'BOOK YOUR LOVINA EXPERIENCE',
    ctaTextEn: 'BOOK YOUR LOVINA EXPERIENCE',
    itinerary: [
      { time: '03.00 - 04.30', activity: 'Early hotel / villa pick-up with private air-conditioned car', activityEn: 'Early hotel / villa pick-up with private air-conditioned car' },
      { time: '05.45 - 08.00', activity: 'Lovina Beach traditional boat & Sunrise dolphin watching at open sea', activityEn: 'Lovina Beach traditional boat & Sunrise dolphin watching at open sea' },
      { time: '08.30 - 09.45', activity: 'Banjar Natural Hot Spring relaxing bath', activityEn: 'Banjar Natural Hot Spring relaxing bath' },
      { time: '10.30 - 12.00', activity: 'Gitgit Waterfall trek & lush tropical rainforest', activityEn: 'Gitgit Waterfall trek & lush tropical rainforest' },
      { time: '13.00 - 14.30', activity: 'Ulun Danu Beratan Lake Temple in Bedugul & lunch', activityEn: 'Ulun Danu Beratan Lake Temple in Bedugul & lunch' },
      { time: '15.00 - 17.00', activity: 'Scenic drive back through Bedugul mountain pass & hotel drop-off', activityEn: 'Scenic drive back through Bedugul mountain pass & hotel drop-off' }
    ]
  },
  {
    id: 'jatiluwih-rice-terraces',
    title: 'JATILUWIH RICE TERRACES',
    titleEn: 'JATILUWIH RICE TERRACES',
    tag: 'UNESCO Heritage • Rice Terraces • Nature',
    duration: 'Hingga 10 Jam (Full Day)',
    durationEn: 'Up to 10 hours',
    price: 60,
    priceFormatted: 'USD $60',
    priceNote: '/ mobil (hingga 10 jam)',
    priceNoteEn: '/ car (up to 10 hours)',
    rating: 5.0,
    reviewsCount: 226,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790771595/3fa8842f-aa2a-4672-b70c-fbabe682af19.png',
    description: 'Escape the busy tourist areas and discover the peaceful countryside of Bali at the spectacular Jatiluwih Rice Terraces.',
    descriptionEn: 'Escape the busy tourist areas and discover the peaceful countryside of Bali at the spectacular Jatiluwih Rice Terraces.',
    destinations: [
      'Jatiluwih Rice Terraces',
      'Batukaru Temple',
      'Traditional Balinese villages',
      'Coffee plantation',
      'Ulun Danu Beratan',
      'Mountain scenery'
    ],
    inclusions: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    inclusionsEn: [
      'Private air-conditioned car',
      'English-speaking driver',
      'Fuel included',
      'Hotel/villa pick-up & drop-off',
      'Flexible itinerary'
    ],
    exclusions: [
      'Entrance tickets, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    exclusionsEn: [
      'Entrance tickets, meals and personal expenses',
      'Extra hour: USD $5/hour/car'
    ],
    surchargeNote: 'NORTH/WEST BALI SURCHARGE: +USD $15/car where applicable',
    surchargeNoteEn: 'NORTH/WEST BALI SURCHARGE: +USD $15/car where applicable',
    extraHourNote: 'Extra hour: USD $5/hour/car',
    extraHourNoteEn: 'Extra hour: USD $5/hour/car',
    ctaText: 'BOOK YOUR JATILUWIH TOUR',
    ctaTextEn: 'BOOK YOUR JATILUWIH TOUR',
    itinerary: [
      { time: '08.00 - 09.00', activity: 'Hotel pick-up with comfortable private air-conditioned car', activityEn: 'Hotel pick-up with comfortable private air-conditioned car' },
      { time: '10.00 - 11.30', activity: 'Ulun Danu Beratan Temple & misty mountain lake', activityEn: 'Ulun Danu Beratan Temple & misty mountain lake' },
      { time: '12.00 - 14.30', activity: 'Jatiluwih UNESCO Rice Terraces walk & panoramic lunch', activityEn: 'Jatiluwih UNESCO Rice Terraces walk & panoramic lunch' },
      { time: '15.00 - 16.15', activity: 'Pura Luhur Batukaru sacred rainforest temple', activityEn: 'Pura Luhur Batukaru sacred rainforest temple' },
      { time: '16.30 - 17.30', activity: 'Authentic Balinese spice garden & coffee tasting', activityEn: 'Authentic Balinese spice garden & coffee tasting' },
      { time: '17.30 - 19.00', activity: 'Comfortable drop-off back to your hotel/villa', activityEn: 'Comfortable drop-off back to your hotel/villa' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Michael & Sarah Jenkins',
    from: 'Sydney, Australia',
    comment: 'The Ubud Highlights tour with GedeBaliTrip was the highlight of our vacation! Our private driver was punctual, knowledgeable, and took amazing photos at Tegalalang and Tegenungan Waterfall. Highly recommended!',
    rating: 5,
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    name: 'Dimas & Anindya',
    from: 'Jakarta, Indonesia',
    comment: 'Pelayanan private tour GedeBaliTrip benar-benar bintang lima. Mobil sangat bersih, AC dingin, driver ramah banget dan fleksibel atur waktu di Ubud Monkey Forest & Tirta Empul. Sangat recommended!',
    rating: 5,
    date: '1 bulan lalu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    name: 'Emma Watson & David',
    from: 'London, UK',
    comment: 'Unbeatable private tour value ($45/car). Clean car, great English-speaking driver, and seamless hotel pick-up. We loved the art market and waterfall!',
    rating: 5,
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: '1',
    title: 'Tegalalang Rice Terrace',
    location: 'Ubud, Gianyar',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    category: 'Ubud'
  },
  {
    id: '2',
    title: 'Tirta Empul Holy Spring Temple',
    location: 'Tampaksiring, Gianyar',
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    category: 'Pura'
  },
  {
    id: '3',
    title: 'Tegenungan Waterfall',
    location: 'Sukawati, Gianyar',
    imageUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    category: 'Nature'
  },
  {
    id: '4',
    title: 'Kelingking Beach Nusa Penida',
    location: 'Nusa Penida, Klungkung',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767095/perfect-view-kelingking-beach-nusa-penida-island-indonesia-scaled_h8ni6e.webp',
    category: 'Pantai'
  },
  {
    id: '5',
    title: 'Pura Luhur Lempuyang',
    location: 'Karangasem, Bali',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767054/young-woman-standing-temple-gates-lempuyang-luhur-temple-bali-indonesia-vintage-tone-scaled_n7cmrt.webp',
    category: 'Pura'
  },
  {
    id: '6',
    title: 'Ubud Sacred Monkey Forest',
    location: 'Padangtegal, Ubud',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    category: 'Ubud'
  },
  {
    id: '7',
    title: 'Lovina Sunrise & Dolphin Watching',
    location: 'Lovina Beach, Buleleng',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790771271/13fb44ac-cc1d-435e-8c79-3752721610b5.png',
    category: 'Pantai'
  },
  {
    id: '8',
    title: 'Jatiluwih UNESCO Rice Terraces',
    location: 'Penebel, Tabanan',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790771595/3fa8842f-aa2a-4672-b70c-fbabe682af19.png',
    category: 'Nature'
  },
  {
    id: '9',
    title: 'Uluwatu Sunset & Ocean Cliff',
    location: 'Uluwatu, Pecatu',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790771775/58135db0-5806-4d5a-b7f7-fcdba0b65dde.png',
    category: 'Pantai'
  }
];

export const COMPANY_INFO = {
  name: 'GedeBaliTrip',
  tagline: 'Travel Agency Bali Terpercaya',
  phone: '+62 812-3963-3946',
  whatsapp: '6281239633946',
  email: 'gedearisuyasa88@gmail.com',
  mapsUrl: 'https://share.google/EXlDdXxcrgDPMnE3L',
  logoUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767286/cropped_circle_image_qvcsmp.png',
  address: 'Jalan Teratai, Gang Mawar, Mawar IV no 19, Celuk Sukawati, Gianyar Bali 80582',
  hours: '08:00 - 22:00 WITA (Setiap Hari)'
};
