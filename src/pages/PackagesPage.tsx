import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { Language, TourPackage } from '../types';
import { COMPANY_INFO } from '../data/packages';
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
        title="Paket Tour"
        titleEn="Tour Packages"
        breadcrumb="Paket Tour"
        breadcrumbEn="Tour Packages"
        backgroundImage="https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png"
        packages={packages}
      />

      {/* Search & Intro */}
      <section className="pt-10 sm:pt-14 pb-4 px-4 sm:px-6 lg:px-8 max-w-[1560px] mx-auto">
        <div className="bg-neutral-50 p-6 sm:p-8 rounded-3xl border border-neutral-200/90 shadow-xs">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{isId ? 'Paket Private Tour Bali' : 'Bali Private Tour Experiences'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              {isId ? 'Pilihan Paket Wisata Terbaik di Bali' : 'Explore Bali Private Tours'}
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              {isId
                ? 'Semua paket 100% Private Tour dengan mobil AC dingin, driver ramah, BBM & rute fleksibel'
                : '100% Private tour with air-conditioned vehicle, English-speaking driver, fuel & hotel pickup'}
            </p>
          </div>

          {/* Search Input Box */}
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isId ? 'Cari destinasi: Tegalalang, Tirta Empul, Monkey Forest, Ubud...' : 'Search: Tegalalang, Tirta Empul, Monkey Forest, Ubud...'}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-xs sm:text-sm focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 shadow-xs"
              />
            </div>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 py-3 text-xs font-semibold text-neutral-600 hover:text-neutral-900 bg-neutral-200/80 rounded-2xl cursor-pointer transition"
              >
                {isId ? 'Reset' : 'Clear'}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Packages Listing (4-Column Layout) */}
      <section className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-[1560px] mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {isId ? 'Katalog Tour' : 'Tour Catalog'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              {isId ? `Menampilkan ${filteredPackages.length} Paket Wisata` : `Showing ${filteredPackages.length} Tour Packages`}
            </h3>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isId ? 'Harga Transparan & Garansi Layanan' : 'Guaranteed Departure'}</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              id={`pkg-card-${pkg.id}`}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <Link to={`/paket/${pkg.id}`} className="block relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100 group">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
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

                {/* Card Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-semibold mb-2">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{isId ? pkg.duration : pkg.durationEn}</span>
                    <span>•</span>
                    <Car className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Private</span>
                  </div>

                  <Link to={`/paket/${pkg.id}`} className="block group">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2 mb-2">
                      {isId ? pkg.title : pkg.titleEn}
                    </h4>
                  </Link>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-3.5 line-clamp-2">
                    {isId ? pkg.description : pkg.descriptionEn}
                  </p>

                  {/* Destinations Highlights */}
                  <div className="space-y-1.5 mb-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      ✨ TOUR HIGHLIGHTS:
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

                  {/* Top Inclusions */}
                  <div className="space-y-1 text-[11px] text-neutral-700 border-t border-neutral-100 pt-3">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-medium truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">Private car & driver + Fuel</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 font-medium truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">Hotel/villa pick-up & drop-off</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Single 1 Button: "Pesan Sekarang" */}
              <div className="p-4 sm:p-5 pt-3 border-t border-neutral-100 bg-neutral-50/60 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-neutral-500 block">
                    {isId ? 'Harga Private' : 'Private Rate'}
                  </span>
                  <div className="text-base sm:text-lg font-extrabold text-neutral-900 leading-tight">
                    USD ${pkg.price} <span className="text-[10px] text-neutral-500 font-normal">/ car</span>
                  </div>
                </div>

                {/* 1 Single Button "Pesan Sekarang" linking to /paket/:id */}
                <Link
                  to={`/paket/${pkg.id}`}
                  id={`btn-pesan-sekarang-${pkg.id}`}
                  className="bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs font-bold py-2.5 px-3.5 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 group cursor-pointer shrink-0"
                >
                  <span>{isId ? 'Detail & Pesan' : 'Book Tour'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {isId ? 'Custom Tour Sesuai Permintaan' : 'Custom Itinerary'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              {isId
                ? 'Punya Rute Wisata Impian Sendiri di Bali?'
                : 'Have Your Own Dream Destinations in Mind?'}
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl">
              {isId
                ? 'Hubungi kami sekarang untuk merancang rute liburan personal bersama driver lokal berpengalaman. Gratis konsultasi rute dan estimasi waktu!'
                : 'Contact our local Bali planners to customize your dream route with private car and friendly driver.'}
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
              'Halo GedeBaliTrip, saya ingin konsultasi tour custom untuk rute wisata impian saya di Bali.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-6 py-3.5 rounded-2xl text-xs sm:text-sm flex items-center gap-2 shrink-0 shadow-md transition cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isId ? 'Konsultasi Custom Tour Gratis' : 'Plan Custom Trip on WhatsApp'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
