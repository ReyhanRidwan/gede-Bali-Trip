import React, { useState, useEffect } from 'react';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { Language, TourPackage, GalleryPhoto } from '../types';
import { GALLERY_PHOTOS, COMPANY_INFO } from '../data/packages';
import { getOptimizedCloudinaryUrl, getCloudinarySrcSet } from '../utils/cloudinary';
import {
  Camera,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Eye,
} from 'lucide-react';

interface GalleryPageProps {
  currentLanguage: Language;
  packages: TourPackage[];
  onSelectPackage: (pkg: TourPackage) => void;
}

const ALL_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'guest-1',
    title: 'Momen Hangat Liburan Bersama Tamu',
    location: 'Bali',
    category: 'Kuliner & Momen',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790939769/4ceab9bf-e3a4-4e48-9126-7f6a9654884f.png',
  },
  {
    id: 'guest-2',
    title: 'Keceriaan Tour & Driver Ramah Kami',
    location: 'Bali',
    category: 'Kuliner & Momen',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790939785/cbe29cac-3cad-4d13-9887-3d54f5e06836.png',
  },
  {
    id: 'guest-3',
    title: 'Pengalaman Berkesan Wisatawan di Bali',
    location: 'Bali',
    category: 'Kuliner & Momen',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790939816/5454bf0a-e96e-4ed0-86e7-b14ca852c939.png',
  },
  ...GALLERY_PHOTOS,
  {
    id: 'g7',
    title: 'Nusa Dua Coastal Serenity',
    location: 'Nusa Dua Beach Peninsula, Bali Selatan',
    category: 'Pantai & Samudra',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767733/e21b3225-7131-4edd-9019-2e47c4890635.png',
  },
  {
    id: 'g8',
    title: 'Handara Gate Panoramic View',
    location: 'Pancasari, Sukasada, Buleleng',
    category: 'Pura Bersejarah',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767876/db0395d9-f101-4890-b382-b3dc1626de0a.png',
  },
  {
    id: 'g9',
    title: 'Pura Luhur Uluwatu Cliff',
    location: 'Pecatu, Kuta Selatan',
    category: 'Seni & Budaya',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790768100/551bf87a-06ee-4f26-8f8f-c854b502cd31.png',
  },
  {
    id: 'g10',
    title: 'Kemegahan Patung GWK Bali',
    location: 'Ungasan, Bali Selatan',
    category: 'Seni & Budaya',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790768104/antonia-nicoletta-irawan-V0cOEHVx1cE-unsplash_cfm3nz.webp',
  },
  {
    id: 'g11',
    title: 'Pura Ulun Danu Beratan Mist',
    location: 'Danau Beratan, Candikuning, Bedugul',
    category: 'Alam & Pegunungan',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png',
  },
  {
    id: 'g12',
    title: 'Armada Bersih & Driver Ramah Kami',
    location: 'Sanur Hub, Denpasar',
    category: 'Kuliner & Momen',
    imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790771775/58135db0-5806-4d5a-b7f7-fcdba0b65dde.png',
  },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({
  currentLanguage,
  packages,
  onSelectPackage,
}) => {
  const isId = currentLanguage === 'id';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', labelId: 'Semua Momen', labelEn: 'All Moments' },
    { id: 'Pantai & Samudra', labelId: 'Pantai & Samudra', labelEn: 'Beaches & Ocean' },
    { id: 'Seni & Budaya', labelId: 'Seni & Budaya', labelEn: 'Culture & Arts' },
    { id: 'Alam & Pegunungan', labelId: 'Alam & Pegunungan', labelEn: 'Nature & Highlands' },
    { id: 'Pura Bersejarah', labelId: 'Pura Bersejarah', labelEn: 'Historic Temples' },
    { id: 'Kuliner & Momen', labelId: 'Kuliner & Momen', labelEn: 'Moments & Dining' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? ALL_GALLERY_PHOTOS
    : ALL_GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, filteredPhotos.length]);

  return (
    <div className="w-full">
      {/* Short Scenic Bali Header Banner matching screenshot */}
      <PageHeaderBanner
        currentLanguage={currentLanguage}
        title="Dokumentasi"
        titleEn="Photo Gallery"
        breadcrumb="Dokumentasi"
        breadcrumbEn="Gallery"
        backgroundImage="https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png"
        packages={packages}
        onSelectPackage={onSelectPackage}
      />

      {/* Main Gallery Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Intro & Filter Pills */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>{isId ? 'Galeri Dokumentasi Tour' : 'Tour Documentation Gallery'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {isId ? 'Momen Tak Terlupakan Bersama Tamu Kami' : 'Memorable Moments Captured with Our Guests'}
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm mt-2 leading-relaxed">
            {isId
              ? 'Foto otentik keindahan destinasi Bali yang siap kamu kunjungi bersama tim GedeBaliTrip.'
              : 'Authentic captures from iconic Bali spots awaiting your trip with GedeBaliTrip.'}
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200/80'
                }`}
              >
                {isId ? cat.labelId : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 aspect-4/3 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-1 border border-neutral-200"
            >
              <img
                src={getOptimizedCloudinaryUrl(photo.imageUrl, { width: 640 })}
                srcSet={getCloudinarySrcSet(photo.imageUrl, [360, 480, 640])}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={photo.title}
                width="400"
                height="300"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Hover view icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-0.5">
                  {photo.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold drop-shadow-sm line-clamp-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-neutral-300 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{photo.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Free Photo Service Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-amber-50 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900">
                {isId ? 'Driver Merangkap Fotografer Tour Pribadi' : 'Driver Doubles as Your Tour Photographer'}
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                {isId
                  ? 'Setiap driver kami siap membantu mengabadikan foto dan video estetik terbaik di setiap destinasi tanpa dipungut biaya tambahan.'
                  : 'All our drivers are happy to help take awesome photos and videos at all scenic viewpoints at no extra charge.'}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
              'Halo GedeBaliTrip, saya tertarik memesan tour Bali dengan layanan foto/dokumentasi terbaik.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-6 py-3.5 rounded-2xl text-xs sm:text-sm flex items-center gap-2 shrink-0 transition"
          >
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span>{isId ? 'Tanya Paket via WhatsApp' : 'Inquire on WhatsApp'}</span>
          </a>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition cursor-pointer z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition cursor-pointer z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Active Image & Info */}
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[activePhotoIndex].imageUrl}
              alt={filteredPhotos[activePhotoIndex].title}
              className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-lg">
              <h3 className="text-xl font-bold">{filteredPhotos[activePhotoIndex].title}</h3>
              <p className="text-neutral-400 text-sm flex items-center justify-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{filteredPhotos[activePhotoIndex].location}</span>
              </p>
              <div className="text-xs text-neutral-500 mt-1">
                {activePhotoIndex + 1} / {filteredPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
