import React from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/packages';
import { X, Award, ShieldCheck, HeartHandshake, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
}) => {
  if (!isOpen) return null;
  const isId = currentLanguage === 'id';

  return (
    <div
      id="about-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="about-modal-card"
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-in fade-in zoom-in-95 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-about-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <Logo size="lg" />
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {isId ? 'Profil Perusahaan' : 'Company Profile'}
            </span>
            <h2 className="text-2xl font-bold text-neutral-900">
              GedeBaliTrip
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              {isId ? 'Travel Agency Terpercaya di Bali' : 'Trusted Bali Tour Agency'}
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="space-y-4 text-sm sm:text-[15px] text-neutral-700 leading-relaxed">
          <p>
            {isId ? (
              <>
                <strong>GedeBaliTrip</strong> hadir dengan komitmen tulus memperkenalkan keindahan alam, keramahan budaya, dan surga tersembunyi Pulau Dewata kepada setiap wisatawan nusantara maupun mancanegara.
              </>
            ) : (
              <>
                <strong>GedeBaliTrip</strong> is dedicated to sharing the breathtaking natural wonders, rich cultural heritage, and hidden treasures of the Island of the Gods with local and international guests.
              </>
            )}
          </p>
          <p>
            {isId ? (
              'Kami memiliki armada kendaraan terawat prima, jaringan driver lokal berlisensi dan berpengalaman yang siap mengabadikan momen foto terbaik Anda di setiap spot wisata ikonik.'
            ) : (
              'We operate our own fleet of immaculate modern vehicles and a team of certified Balinese local guides who know every hidden road and picturesque viewpoint.'
            )}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700">14+</div>
            <div className="text-xs text-neutral-600 mt-0.5">{isId ? 'Tahun Pengalaman' : 'Years Experience'}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700">18.500+</div>
            <div className="text-xs text-neutral-600 mt-0.5">{isId ? 'Wisatawan Senang' : 'Happy Travelers'}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700">4.9 ★</div>
            <div className="text-xs text-neutral-600 mt-0.5">{isId ? 'Rating Pelayanan' : 'Average Rating'}</div>
          </div>
        </div>

        {/* Value Points */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            {isId ? 'Mengapa Memilih GedeBaliTrip?' : 'Why Choose GedeBaliTrip?'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isId ? 'Driver asli Bali ramah & santun' : 'Friendly native Balinese drivers'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isId ? 'Mobil AC dingin, bersih & wangi' : 'Clean, comfortable AC vehicles'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isId ? 'Bantu foto & video estetik di tiap spot' : 'Helpful photo & video assistance'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isId ? 'Harga jujur & transparan tanpa tips wajib' : 'Honest transparent pricing'}</span>
            </div>
          </div>
        </div>

        {/* Location & Contact Info */}
        <div className="mt-6 pt-5 border-t border-neutral-200 text-xs text-neutral-500">
          <a
            href={COMPANY_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 hover:text-amber-600 transition"
          >
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{COMPANY_INFO.address} (Buka di Google Maps ↗)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
