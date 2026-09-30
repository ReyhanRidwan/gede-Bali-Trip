import React, { useState } from 'react';
import { Language, TourPackage } from '../types';

interface DestinationItem {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  fallbackImage: string;
  gridSpan: string;
}

interface ParadiseBaliSectionProps {
  currentLanguage: Language;
  onSelectDestination?: (destId: string, packageId?: string) => void;
  onSelectPackage?: (pkg: TourPackage) => void;
  packages?: TourPackage[];
}

export const ParadiseBaliSection: React.FC<ParadiseBaliSectionProps> = ({
  currentLanguage,
}) => {
  const isId = currentLanguage === 'id';

  const destinations: DestinationItem[] = [
    {
      id: 'nusa-penida',
      name: 'Nusa Penida',
      nameEn: 'Nusa Penida',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767095/perfect-view-kelingking-beach-nusa-penida-island-indonesia-scaled_h8ni6e.webp',
      fallbackImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
      gridSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    },
    {
      id: 'nusa-dua',
      name: 'Nusa Dua',
      nameEn: 'Nusa Dua',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767733/e21b3225-7131-4edd-9019-2e47c4890635.png',
      fallbackImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      gridSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    },
    {
      id: 'bedugul',
      name: 'Bedugul',
      nameEn: 'Bedugul',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png',
      fallbackImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1400&q=80',
      gridSpan: 'col-span-12 sm:col-span-12 lg:col-span-6',
    },
    {
      id: 'handara-gate',
      name: 'Handara Gate',
      nameEn: 'Handara Gate',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767876/db0395d9-f101-4890-b382-b3dc1626de0a.png',
      fallbackImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1400&q=80',
      gridSpan: 'col-span-12 sm:col-span-12 lg:col-span-6',
    },
    {
      id: 'uluwatu',
      name: 'Uluwatu',
      nameEn: 'Uluwatu',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790768100/551bf87a-06ee-4f26-8f8f-c854b502cd31.png',
      fallbackImage: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80',
      gridSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    },
    {
      id: 'gwk',
      name: 'GWK',
      nameEn: 'GWK',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790768104/antonia-nicoletta-irawan-V0cOEHVx1cE-unsplash_cfm3nz.webp',
      fallbackImage: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1000&q=80',
      gridSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    },
  ];

  return (
    <section
      id="paradise-bali-section"
      className="w-full pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1560px] mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
        <h2
          id="paradise-bali-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-neutral-900 tracking-tight leading-[1.2]"
        >
          {isId ? (
            <>
              Surga Dunia Itu Nyata. Dan Itu Adalah{' '}
              <span className="font-serif-italic font-normal text-neutral-600 italic">
                Bali
              </span>
            </>
          ) : (
            <>
              Paradise on Earth Is Real. And It Is{' '}
              <span className="font-serif-italic font-normal text-neutral-600 italic">
                Bali
              </span>
            </>
          )}
        </h2>

        <p
          id="paradise-bali-subtitle"
          className="mt-3.5 sm:mt-4 text-xs sm:text-sm md:text-[15px] text-neutral-600 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          {isId
            ? 'Dari tebing dramatis, sawah yang bikin tenang, sampai pantai yang bikin lupa waktu — ini baru sebagian kecil yang udah nunggu kamu.'
            : 'From dramatic cliffs, serene emerald rice fields, to timeless beaches — this is just a glimpse of what awaits you.'}
        </p>
      </div>

      {/* Bento Grid with exact layout - Non-clickable as requested */}
      <div
        id="paradise-destinations-grid"
        className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6"
      >
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            dest={dest}
            isId={isId}
          />
        ))}
      </div>
    </section>
  );
};

interface DestinationCardProps {
  dest: DestinationItem;
  isId: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ dest, isId }) => {
  const [imageSrc, setImageSrc] = useState(dest.image);

  return (
    <div
      id={`dest-card-${dest.id}`}
      className={`${dest.gridSpan} h-60 sm:h-72 md:h-80 lg:h-[310px] rounded-[22px] sm:rounded-[26px] overflow-hidden relative shadow-sm select-none`}
    >
      {/* Background Destination Photo */}
      <img
        src={imageSrc}
        alt={isId ? dest.name : dest.nameEn}
        onError={() => setImageSrc(dest.fallbackImage)}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Bottom Text Label */}
      <div className="absolute bottom-4 left-5 sm:bottom-5 sm:left-6 z-10 pointer-events-none">
        <h3 className="text-white text-lg sm:text-xl md:text-[22px] font-bold tracking-tight drop-shadow-md">
          {isId ? dest.name : dest.nameEn}
        </h3>
      </div>
    </div>
  );
};
