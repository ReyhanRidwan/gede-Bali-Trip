import React from 'react';
import { TourPackage, Language } from '../types';
import { COMPANY_INFO } from '../data/packages';
import { X, Clock, Star, CheckCircle, MapPin, MessageCircle, ShieldCheck, Car } from 'lucide-react';

interface PackageModalProps {
  pkg: TourPackage | null;
  onClose: () => void;
  currentLanguage: Language;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  pkg,
  onClose,
  currentLanguage,
}) => {
  if (!pkg) return null;

  const isId = currentLanguage === 'id';
  const whatsappMessage = encodeURIComponent(
    `Halo GedeBaliTrip, saya ingin memesan atau konsultasi untuk: *${pkg.title}* (${isId ? pkg.duration : pkg.durationEn}) seharga USD $${pkg.price} ${isId ? pkg.priceNote : pkg.priceNoteEn}. Mohon info ketersediaan tanggal dan jadwalnya. Terima kasih!`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <div
      id="package-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="package-detail-modal-card"
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Close button */}
          <button
            id="close-package-modal-btn"
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer backdrop-blur-xs"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tag & Rating */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-neutral-950 shadow-sm">
              {pkg.tag}
            </span>
          </div>

          {/* Title & Price on Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              {isId ? pkg.title : pkg.titleEn}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm text-neutral-200">
              <span className="flex items-center gap-1 font-medium text-amber-300">
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                {pkg.rating} (240+ reviews)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Car className="w-4 h-4" />
                <span>Private Tour</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {isId ? pkg.duration : pkg.durationEn}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Price Box */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs text-neutral-600 block uppercase font-semibold tracking-wider">
                {isId ? 'Biaya Private Tour' : 'Private Tour Rate'}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                USD $45
                <span className="text-xs sm:text-sm font-normal text-neutral-600 ml-2">
                  {isId ? pkg.priceNote : pkg.priceNoteEn}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-xl self-start sm:self-center">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{isId ? 'Garansi Tanpa Biaya Tersembunyi' : 'No Hidden Charges'}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-2">
              {isId ? 'Deskripsi Perjalanan' : 'Tour Overview'}
            </h3>
            <p className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
              {isId ? pkg.description : pkg.descriptionEn}
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-2.5">
              ✨ TOUR HIGHLIGHTS
            </h3>
            <div className="flex flex-wrap gap-2">
              {pkg.destinations.map((dest, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-medium border border-neutral-200"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  {dest}
                </span>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-2.5">
              INCLUDED
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700">
              {(isId ? pkg.inclusions : pkg.inclusionsEn).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Action Buttons */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
            <a
              id="whatsapp-booking-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-5 rounded-2xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{isId ? 'Pesan Langsung via WhatsApp' : 'Book Direct on WhatsApp'}</span>
            </a>
            <button
              id="close-modal-bottom-btn"
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-sm font-medium transition cursor-pointer"
            >
              {isId ? 'Tutup' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
