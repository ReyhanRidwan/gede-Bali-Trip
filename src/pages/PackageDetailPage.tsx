import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { BookingCalendarModal } from '../components/BookingCalendarModal';
import { TourPackage, Language } from '../types';
import { COMPANY_INFO } from '../data/packages';
import {
  Clock,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Star,
  Check,
  X as XIcon,
  MessageCircle,
  CalendarCheck,
  Sparkles,
  ArrowLeft,
  Car,
  AlertCircle,
} from 'lucide-react';

interface PackageDetailPageProps {
  currentLanguage: Language;
  packages: TourPackage[];
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({
  currentLanguage,
  packages,
}) => {
  const { id } = useParams<{ id: string }>();
  const isId = currentLanguage === 'id';

  // Find package by ID, or fallback to first package
  const pkg = packages.find((p) => p.id === id) || packages[0];
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  if (!pkg) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">Paket Tidak Ditemukan</h2>
        <Link to="/paket" className="mt-4 inline-block text-amber-600 font-semibold underline">
          Kembali ke Daftar Paket
        </Link>
      </div>
    );
  }

  const ctaButtonLabel = isId
    ? (pkg.ctaText ? pkg.ctaText.replace(/^BOOK\s+/i, 'PESAN ') : 'PESAN TOUR INI')
    : (pkg.ctaTextEn || pkg.ctaText || 'BOOK YOUR TOUR');

  return (
    <div className="w-full">
      {/* Short Scenic Bali Header Banner */}
      <PageHeaderBanner
        currentLanguage={currentLanguage}
        title={isId ? pkg.title : pkg.titleEn}
        titleEn={pkg.titleEn}
        breadcrumb={isId ? pkg.title : pkg.titleEn}
        breadcrumbEn={pkg.titleEn}
        backgroundImage="https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png"
        packages={packages}
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Breadcrumb Back Button */}
        <div className="mb-5 sm:mb-6">
          <Link
            to="/paket"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-amber-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isId ? 'Kembali ke Katalog Paket Tour' : 'Back to All Tour Packages'}</span>
          </Link>
        </div>

        {/* 1. Hero Photo Card */}
        <div className="w-full rounded-[24px] sm:rounded-[36px] overflow-hidden relative shadow-2xl h-[320px] sm:h-[460px] md:h-[500px] mb-6 sm:mb-10 border border-neutral-200">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />

          {/* Top Tag & Reviews Badge */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-500 text-neutral-950 shadow-md">
              {pkg.tag}
            </span>
            <div className="bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-md">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
              <span>{pkg.rating} ({pkg.reviewsCount}+ reviews)</span>
            </div>
          </div>

          {/* Bottom Title & Highlights on Image */}
          <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white max-w-4xl">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
              <Car className="w-4 h-4" />
              <span>🚗 PRIVATE TOUR</span>
              <span>•</span>
              <Clock className="w-4 h-4 ml-1" />
              <span>{isId ? pkg.duration : pkg.durationEn}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md leading-tight">
              {isId ? pkg.title : pkg.titleEn}
            </h1>
            <p className="text-amber-200 text-xs sm:text-base font-medium mt-1">
              {pkg.tag}
            </p>
          </div>
        </div>

        {/* MOBILE ONLY: Prominent "CHECK AVAILABILITY" Card placed ABOVE "Tentang Paket Tour Ini" and below the image */}
        <div className="block lg:hidden mb-8">
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-neutral-200 shadow-xl space-y-4">
            {/* Price & Tour Type */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3.5">
              <div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                  🚗 PRIVATE TOUR RATE
                </span>
                <div className="text-2xl font-extrabold text-neutral-900 mt-0.5">
                  USD ${pkg.price} <span className="text-xs text-neutral-500 font-normal">/ car</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200/60 inline-block">
                  {isId ? 'Hingga 10 Jam' : 'Up to 10 Hours'}
                </span>
                <span className="text-[10px] text-neutral-400 block mt-1">
                  Extra: $5/hour/car
                </span>
              </div>
            </div>

            {/* Surcharge Note if present */}
            {pkg.surchargeNote && (
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{isId ? pkg.surchargeNote : (pkg.surchargeNoteEn || pkg.surchargeNote)}</span>
              </div>
            )}

            {/* Inclusions summary pills */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-700">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Private AC Car + Driver</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Fuel (BBM) Included</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Hotel Pick-up & Drop-off</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Flexible Itinerary</span>
              </div>
            </div>

            {/* CHECK AVAILABILITY PRIMARY BUTTON (MOBILE) */}
            <button
              type="button"
              id="mobile-btn-check-availability"
              onClick={() => setIsCalendarModalOpen(true)}
              className="w-full bg-[#e07e34] hover:bg-[#c96924] active:scale-98 text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm tracking-wider uppercase"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{ctaButtonLabel}</span>
            </button>

            <p className="text-[11px] text-center text-neutral-500">
              {isId
                ? 'Pilih tanggal & jumlah peserta untuk konfirmasi instan ke WhatsApp'
                : 'Select date & guests for instant WhatsApp confirmation'}
            </p>
          </div>
        </div>

        {/* 2. Grid Layout: Detail di Kiri (70%) + Sidebar Booking di Kanan (30% on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* SISI KIRI (Detail & Penjelasan Lengkap) */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            {/* Overview Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>{isId ? 'Tentang Paket Tour Ini' : 'About This Tour Package'}</span>
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                {isId ? pkg.description : pkg.descriptionEn}
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-neutral-800 leading-relaxed">
                ✨ {isId ? pkg.description : pkg.descriptionEn}
              </div>
            </div>

            {/* Tour Highlights */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-xs space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>✨ TOUR HIGHLIGHTS</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.destinations.map((dest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-sm font-medium text-neutral-800"
                  >
                    <div className="w-7 h-7 rounded-xl bg-amber-500 text-neutral-950 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <span>{dest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* INCLUDED */}
              <div className="bg-white p-6 rounded-3xl border border-emerald-200 shadow-xs space-y-3.5">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>INCLUDED</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Private air-conditioned car</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>English-speaking driver</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Fuel included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hotel/villa pick-up & drop-off</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Flexible itinerary</span>
                  </li>
                </ul>
              </div>

              {/* EXCLUDED & EXTRA */}
              <div className="bg-white p-6 rounded-3xl border border-rose-200 shadow-xs space-y-3.5">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-sm uppercase tracking-wider">
                  <XIcon className="w-5 h-5 text-rose-600" />
                  <span>EXCLUDED</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
                  {(pkg.exclusionsEn || pkg.exclusions || []).map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-rose-100 bg-amber-50 p-3 rounded-xl border border-amber-200/70 text-xs font-semibold text-neutral-800">
                  ⏱️ Extra hour: <strong>USD $5/hour/car</strong>
                </div>
              </div>
            </div>

            {/* Daily Itinerary Timeline */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>{isId ? 'Rencana Perjalanan (Itinerary)' : 'Daily Itinerary Timeline'}</span>
                </h3>
                <span className="text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                  {isId ? pkg.duration : pkg.durationEn}
                </span>
              </div>

              <div className="border-l-2 border-amber-400/80 ml-3 pl-5 space-y-6">
                {pkg.itinerary.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow-xs group-hover:scale-125 transition-transform" />
                    <div className="text-xs font-bold text-amber-700 tracking-wide uppercase">
                      {item.time}
                    </div>
                    <div className="text-sm sm:text-base text-neutral-800 font-medium mt-1">
                      {isId ? item.activity : item.activityEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Guarantee */}
            <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-lg">
              <h3 className="text-lg font-bold flex items-center gap-2 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
                <span>{isId ? 'Jaminan Layanan Terbaik GedeBaliTrip' : 'GedeBaliTrip Service Guarantee'}</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% Private Tour — Tidak digabung dengan tamu lain</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Driver ramah, berlisensi, dan siap bantu foto estetik</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Harga transparan tanpa biaya tersembunyi</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SISI KANAN: Sticky Booking Sidebar with "CHECK AVAILABILITY" (Desktop Sticky) */}
          <div className="lg:col-span-4 sticky top-24 space-y-5">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-neutral-200 shadow-xl space-y-6">
              {/* Header Price */}
              <div className="border-b border-neutral-100 pb-5">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                  🚗 PRIVATE TOUR RATE
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-1">
                  USD ${pkg.price} <span className="text-sm text-neutral-500 font-normal">/ car</span>
                </div>
                <div className="text-xs text-amber-700 mt-1 font-semibold">
                  Up to 10 hours • Extra: $5/hr/car
                </div>
              </div>

              {/* Surcharge Note if present */}
              {pkg.surchargeNote && (
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{isId ? pkg.surchargeNote : (pkg.surchargeNoteEn || pkg.surchargeNote)}</span>
                </div>
              )}

              {/* Highlights Summary List */}
              <div className="space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Private air-conditioned car + English-speaking driver</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fuel & Hotel/villa pick-up & drop-off included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Flexible itinerary & photo assistance</span>
                </div>
              </div>

              {/* PRIMARY CTA BUTTON */}
              <button
                type="button"
                id="btn-check-availability"
                onClick={() => setIsCalendarModalOpen(true)}
                className="w-full bg-[#e07e34] hover:bg-[#c96924] active:scale-98 text-white font-bold py-4 px-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer text-xs sm:text-sm tracking-wider uppercase"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>{ctaButtonLabel}</span>
              </button>

              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  {isId
                    ? 'Pilih tanggal tour dan jumlah peserta untuk konfirmasi instan ke WhatsApp.'
                    : 'Select your tour date and number of guests for instant WhatsApp confirmation.'}
                </p>
              </div>
            </div>

            {/* Quick Consultation Assistance */}
            <div className="p-5 rounded-3xl bg-neutral-100 border border-neutral-200 text-center space-y-2">
              <div className="text-xs font-bold text-neutral-900">
                {isId ? 'Konsultasi Cepat via WhatsApp' : 'Need Fast Consultation?'}
              </div>
              <p className="text-[11px] text-neutral-600">
                {isId ? 'Hubungi layanan admin resmi kami:' : 'Chat directly with our specialists:'}
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  `Halo GedeBaliTrip, saya ingin memesan atau konsultasi untuk: *${pkg.title} (USD $${pkg.price} / car)*. Mohon info ketersediaan jadwalnya.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-extrabold text-emerald-700 hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Interactive Calendar & Booking Modal */}
      <BookingCalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
        pkg={pkg}
        currentLanguage={currentLanguage}
      />
    </div>
  );
};
