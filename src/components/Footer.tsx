import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/packages';
import { Language } from '../types';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock, Heart } from 'lucide-react';

interface FooterProps {
  currentLanguage: Language;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage,
}) => {
  const isId = currentLanguage === 'id';

  return (
    <footer className="bg-neutral-950 text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Brand */}
        <div className="space-y-4 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo size="md" />
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors block">
                GedeBaliTrip
              </span>
              <span className="text-xs text-neutral-400 block">
                {isId ? 'Travel Agency Bali' : 'Bali Travel Agency'}
              </span>
            </div>
          </Link>
          <p className="text-xs text-neutral-400 leading-relaxed">
            {isId
              ? 'Travel agency terpercaya di Bali yang melayani private tour, sewa mobil, tiket fast boat Nusa Penida, dan paket honeymoon romantis.'
              : 'Premier tour agency in Bali delivering bespoke private tours, comfortable car charter, Nusa Penida day tours, and honeymoon getaways.'}
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
            {isId ? 'Paket Wisata & Layanan' : 'Tour Packages & Services'}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
            <li>
              <Link
                to="/paket/ubud-highlights"
                className="hover:text-amber-400 transition block font-medium"
              >
                {isId ? 'Ubud Highlights (Private Tour)' : 'Ubud Highlights Private Tour'}
              </Link>
            </li>
            <li>
              <Link
                to="/paket"
                className="hover:text-amber-400 transition block"
              >
                {isId ? 'Semua Katalog Paket Tour' : 'All Tour Packages'}
              </Link>
            </li>
            <li>
              <Link
                to="/hubungi-kami"
                className="hover:text-amber-400 transition block"
              >
                {isId ? 'Custom Tour Rute Pribadi' : 'Custom Route Consultation'}
              </Link>
            </li>
            <li>
              <Link
                to="/hubungi-kami"
                className="hover:text-amber-400 transition block"
              >
                {isId ? 'Sewa Mobil + Driver Berpengalaman' : 'Private Car Charter + Driver'}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Company Pages */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
            {isId ? 'Halaman Resmi' : 'Official Pages'}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
            <li>
              <Link
                to="/"
                className="hover:text-amber-400 transition block"
              >
                {isId ? 'Beranda Utama' : 'Home'}
              </Link>
            </li>
            <li>
              <Link
                to="/tentang-kami"
                className="hover:text-amber-400 transition block"
              >
                {isId ? 'Tentang Kami' : 'About Us'}
              </Link>
            </li>
            <li>
              <Link
                to="/paket"
                className="hover:text-amber-400 transition block"
              >
                {isId ? 'Semua Paket Tour Wisata' : 'All Tour Packages'}
              </Link>
            </li>
            <li>
              <Link
                to="/dokumentasi"
                className="hover:text-amber-400 transition block"
              >
                {isId ? 'Dokumentasi & Galeri Tour' : 'Photo Gallery & Moments'}
              </Link>
            </li>
            <li>
              <Link
                to="/hubungi-kami"
                className="hover:text-amber-400 transition block"
              >
                {isId ? 'Hubungi Kami & Reservasi' : 'Contact & Reservations'}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact details */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
            {isId ? 'Kantor & Kontak' : 'Office & Contacts'}
          </h4>
          <ul className="space-y-2.5 text-xs text-neutral-300">
            <li>
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-amber-400 transition group"
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address} (Maps ↗)</span>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.phone} (WhatsApp)</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-amber-400 transition"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </li>
            <li className="flex items-center gap-2 text-neutral-400">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{COMPANY_INFO.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
        <p>© 2026 GedeBaliTrip. All rights reserved.</p>
        <p className="flex items-center gap-1">
          <span>{isId ? 'Dibuat dengan cinta untuk pariwisata Bali' : 'Crafted with passion for Bali tourism'}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
        </p>
      </div>
    </footer>
  );
};
