import React from 'react';
import { Link } from 'react-router-dom';
import { TourPackage, Language } from '../types';
import { Star, Clock, ArrowRight, Sparkles, CheckCircle2, Car } from 'lucide-react';
import { getOptimizedCloudinaryUrl, getCloudinarySrcSet } from '../utils/cloudinary';

interface PackagesSectionProps {
  packages: TourPackage[];
  currentLanguage: Language;
  onSelectPackage?: (pkg: TourPackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  currentLanguage,
}) => {
  const isId = currentLanguage === 'id';

  // Exclude 'ubud-highlights' from homepage showcase (remains in /paket catalog page)
  const displayedPackages = packages.filter((p) => p.id !== 'ubud-highlights');

  return (
    <section id="packages-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1560px] mx-auto">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold mb-3">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>{isId ? 'Paket Wisata Unggulan' : 'Featured Private Tour Packages'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
          {isId
            ? 'Pilihan Paket Wisata Terbaik di Bali'
            : 'Explore Bali Private Tour Packages'}
        </h2>
        <p className="mt-2.5 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {isId
            ? 'Perjalanan privat ber-AC dengan driver ramah berpengalaman. Rute fleksibel tanpa biaya tersembunyi.'
            : 'Private air-conditioned comfort with friendly local driver. Flexible itinerary with zero hidden fees.'}
        </p>
      </div>

      {/* Grid of Cards (Configured for 4 cards in a row on large screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {displayedPackages.map((pkg) => (
          <div
            key={pkg.id}
            id={`package-card-${pkg.id}`}
            className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image with Tag & Rating */}
              <Link to={`/paket/${pkg.id}`} className="block relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100">
                <img
                  src={getOptimizedCloudinaryUrl(pkg.image, { width: 600 })}
                  srcSet={getCloudinarySrcSet(pkg.image, [360, 480, 640])}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  alt={pkg.title}
                  width="400"
                  height="225"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-neutral-950 shadow-md">
                    {pkg.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1 shadow-md">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{pkg.rating}</span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-semibold mb-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{isId ? pkg.duration : pkg.durationEn}</span>
                  <span>•</span>
                  <Car className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Private</span>
                </div>

                <Link to={`/paket/${pkg.id}`} className="block group">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                    {isId ? pkg.title : pkg.titleEn}
                  </h3>
                </Link>

                <p className="mt-2 text-xs text-neutral-600 leading-relaxed line-clamp-2">
                  {isId ? pkg.description : pkg.descriptionEn}
                </p>

                {/* Destination Highlights Pills */}
                <div className="mt-3.5 space-y-1.5">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                    {isId ? 'Destinasi Utama' : 'Tour Highlights'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.slice(0, 4).map((dest, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded-lg border border-neutral-200/50"
                      >
                        {dest}
                      </span>
                    ))}
                    {pkg.destinations.length > 4 && (
                      <span className="text-[10px] font-medium bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded-lg">
                        +{pkg.destinations.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Inclusions Preview */}
                <div className="mt-3.5 pt-3 border-t border-neutral-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Private car & driver + Fuel</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Hotel/villa pick-up & drop-off</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Button */}
            <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2 bg-neutral-50/50">
              <div>
                <span className="text-[10px] font-medium text-neutral-500 block">
                  {isId ? 'Mulai dari' : 'Starting from'}
                </span>
                <div className="text-base sm:text-lg font-extrabold text-neutral-900 leading-tight">
                  USD ${pkg.price} <span className="text-[11px] text-neutral-500 font-normal">/ car</span>
                </div>
              </div>

              {/* Compact Button "Detail & Pesan" */}
              <Link
                to={`/paket/${pkg.id}`}
                className="cursor-pointer inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md shrink-0"
              >
                <span>{isId ? 'Detail & Pesan' : 'View & Book'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Prominent CTA: Lihat Semua Paket Tour */}
      <div className="mt-12 sm:mt-16 text-center">
        <Link
          to="/paket"
          id="btn-lihat-semua-paket-home"
          className="inline-flex items-center gap-3 bg-neutral-900 hover:bg-amber-600 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-102 cursor-pointer"
        >
          <span>{isId ? 'Lihat Semua Paket Tour Bali' : 'View All Bali Tour Packages'}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};
