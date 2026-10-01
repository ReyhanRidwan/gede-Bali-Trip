import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { Language, TourPackage } from '../types';
import { CARS } from '../data/cars';
import { COMPANY_INFO } from '../data/packages';
import { getOptimizedCloudinaryUrl, getCloudinarySrcSet } from '../utils/cloudinary';
import {
  Star,
  Clock,
  CheckCircle2,
  Search,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Car,
} from 'lucide-react';

interface PackagesPageProps {
  currentLanguage: Language;
  packages: TourPackage[];
  onSelectPackage?: (pkg: TourPackage) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  currentLanguage,
  packages,
}) => {
  const isId = currentLanguage === 'id';
  const [activeTab, setActiveTab] = useState<'tour' | 'car'>('tour');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPackages = useMemo(() => {
    if (!searchQuery.trim()) return packages;
    const query = searchQuery.toLowerCase();
    return packages.filter((pkg) => {
      const matchTitle = pkg.title.toLowerCase().includes(query) || pkg.titleEn.toLowerCase().includes(query);
      const matchDest = pkg.destinations.some((d) => d.toLowerCase().includes(query));
      const matchDesc = pkg.description.toLowerCase().includes(query) || pkg.descriptionEn.toLowerCase().includes(query);
      return matchTitle || matchDest || matchDesc;
    });
  }, [packages, searchQuery]);

  return (
    <div className="w-full">
      {/* Short Scenic Bali Header Banner */}
      <PageHeaderBanner
        currentLanguage={currentLanguage}
        title={isId ? 'Paket Tour' : 'Tour Packages'}
        titleEn="Tour Packages"
        breadcrumb={isId ? 'Paket Tour' : 'Tour Packages'}
        breadcrumbEn="Tour Packages"
        backgroundImage="https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png"
        packages={packages}
      />

      <section className="pt-10 sm:pt-14 pb-4 px-4 sm:px-6 lg:px-8 max-w-[1560px] mx-auto">
        {/* Search Input Box */}
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isId ? 'Cari destinasi...' : 'Search destinations...'}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-xs sm:text-sm focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 shadow-xs"
            />
          </div>
        </div>

        {/* Packages Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              id={`pkg-card-${pkg.id}`}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Link to={`/paket/${pkg.id}`} className="block relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100 group">
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
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{pkg.rating}</span>
                  </div>
                </Link>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-semibold mb-2">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{isId ? pkg.duration : pkg.durationEn}</span>
                  </div>
                  <Link to={`/paket/${pkg.id}`} className="block group">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2 mb-2">
                      {isId ? pkg.title : pkg.titleEn}
                    </h4>
                  </Link>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-3.5 line-clamp-2">
                    {isId ? pkg.description : pkg.descriptionEn}
                  </p>
                </div>
              </div>
              <div className="p-4 sm:p-5 pt-3 border-t border-neutral-100 bg-neutral-50/60 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-neutral-500 block">
                    {isId ? 'Harga Private' : 'Private Rate'}
                  </span>
                  <div className="text-base sm:text-lg font-extrabold text-neutral-900 leading-tight">
                    USD ${pkg.price} <span className="text-[10px] text-neutral-500 font-normal">/ car</span>
                  </div>
                </div>
                <Link
                  to={`/paket/${pkg.id}`}
                  className="bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs font-bold py-2.5 px-3.5 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 group cursor-pointer shrink-0"
                >
                  <span>{isId ? 'Detail & Pesan' : 'Book Tour'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer / CTA remains... */}
    </div>
  );
};
