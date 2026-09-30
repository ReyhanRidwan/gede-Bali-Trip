import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { ChevronDown, Menu, X, PhoneCall } from 'lucide-react';
import { Language, TourPackage } from '../types';

interface NavbarProps {
  currentLanguage: Language;
  packages: TourPackage[];
  onSelectPackage: (pkg: TourPackage) => void;
  isInnerPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  packages,
  onSelectPackage,
  isInnerPage = false,
}) => {
  const [isPackageDropdownOpen, setIsPackageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isId = currentLanguage === 'id';
  const pathname = location.pathname;

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPackageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPackageDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isHome = pathname === '/';
  const isAbout = pathname === '/tentang-kami';
  const isPackages = pathname === '/paket';
  const isGallery = pathname === '/dokumentasi';
  const isContact = pathname === '/hubungi-kami';

  return (
    <header className={`w-full z-30 ${isInnerPage ? 'bg-neutral-950/95 backdrop-blur-md border-b border-white/10 sticky top-0 py-3.5 px-4 sm:px-6 lg:px-8 shadow-lg' : 'relative'}`}>
      <div className={`w-full flex items-center justify-between ${isInnerPage ? 'max-w-[1560px] mx-auto' : ''}`}>
        {/* Left: Logo & Brand Name */}
        <Link
          to="/"
          id="brand-logo-link"
          className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer"
        >
          <Logo size="md" />
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm sm:text-base leading-tight group-hover:text-amber-400 transition-colors">
              GedeBaliTrip
            </span>
            <span
              id="brand-tagline-text"
              className="text-neutral-300 text-xs sm:text-[13px] font-normal tracking-wide drop-shadow-sm select-none"
            >
              {isId ? 'Private Tour Bali' : 'Bali Private Tour'}
            </span>
          </div>
        </Link>

        {/* Right: Desktop Navigation items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-[15px]">
          {/* Beranda */}
          <Link
            to="/"
            id="nav-link-beranda"
            className={`transition-colors font-medium cursor-pointer ${
              isHome
                ? 'text-[#f59e0b] font-semibold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            {isId ? 'Beranda' : 'Home'}
          </Link>

          {/* Tentang Kami */}
          <Link
            to="/tentang-kami"
            id="nav-link-tentang-kami"
            className={`transition-colors font-medium cursor-pointer ${
              isAbout
                ? 'text-[#f59e0b] font-semibold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            {isId ? 'Tentang Kami' : 'About Us'}
          </Link>

          {/* Paket with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center">
              <Link
                to="/paket"
                id="nav-link-paket"
                className={`transition-colors font-medium cursor-pointer pr-1 ${
                  isPackages
                    ? 'text-[#f59e0b] font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {isId ? 'Paket' : 'Packages'}
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsPackageDropdownOpen(!isPackageDropdownOpen);
                }}
                className="text-white/80 hover:text-amber-400 p-1 cursor-pointer transition-colors"
                aria-label="Toggle package dropdown"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isPackageDropdownOpen ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            {isPackageDropdownOpen && (
              <div
                id="paket-dropdown-menu"
                className="absolute top-full right-0 mt-2 w-72 bg-neutral-900/95 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2"
              >
                <div className="px-3 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider border-b border-white/10 mb-1">
                  {isId ? 'Pilihan Paket Tour Bali' : 'Bali Tour Packages'}
                </div>
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    id={`dropdown-pkg-${pkg.id}`}
                    type="button"
                    onClick={() => {
                      onSelectPackage(pkg);
                      setIsPackageDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 text-white transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                        {isId ? pkg.title : pkg.titleEn}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {isId ? pkg.duration : pkg.durationEn} • USD ${pkg.price}
                      </div>
                    </div>
                  </button>
                ))}
                <div className="pt-2 mt-1 border-t border-white/10">
                  <Link
                    to="/paket"
                    onClick={() => setIsPackageDropdownOpen(false)}
                    className="block w-full py-2 text-center text-xs font-semibold text-amber-400 hover:text-amber-300 rounded-lg hover:bg-amber-500/10 transition cursor-pointer"
                  >
                    {isId ? 'Lihat Semua Paket Tour →' : 'View All Tour Packages →'}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Dokumentasi */}
          <Link
            to="/dokumentasi"
            id="nav-link-dokumentasi"
            className={`transition-colors font-medium cursor-pointer ${
              isGallery
                ? 'text-[#f59e0b] font-semibold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            {isId ? 'Dokumentasi' : 'Gallery'}
          </Link>

          {/* Hubungi Kami */}
          <Link
            to="/hubungi-kami"
            id="nav-link-hubungi-kami"
            className={`transition-colors font-medium cursor-pointer ${
              isContact
                ? 'text-[#f59e0b] font-semibold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            {isId ? 'Hubungi Kami' : 'Contact Us'}
          </Link>
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-lg bg-black/40 backdrop-blur-xs border border-white/20 hover:bg-black/60 transition cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden mt-4 p-4 rounded-2xl bg-neutral-950/98 backdrop-blur-xl border border-white/15 shadow-2xl text-white animate-in fade-in slide-in-from-top-3"
        >
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-left px-3.5 py-2.5 rounded-xl font-medium transition ${
                isHome ? 'text-amber-400 bg-white/10' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              {isId ? 'Beranda' : 'Home'}
            </Link>
            <Link
              to="/tentang-kami"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-left px-3.5 py-2.5 rounded-xl font-medium transition ${
                isAbout ? 'text-amber-400 bg-white/10' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              {isId ? 'Tentang Kami' : 'About Us'}
            </Link>
            <Link
              to="/paket"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-left px-3.5 py-2.5 rounded-xl font-medium transition ${
                isPackages ? 'text-amber-400 bg-white/10' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              {isId ? 'Paket Tour Terlengkap' : 'Tour Packages'}
            </Link>
            <Link
              to="/dokumentasi"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-left px-3.5 py-2.5 rounded-xl font-medium transition ${
                isGallery ? 'text-amber-400 bg-white/10' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              {isId ? 'Dokumentasi & Galeri' : 'Photo Gallery'}
            </Link>
            <Link
              to="/hubungi-kami"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-left px-3.5 py-2.5 rounded-xl font-medium transition ${
                isContact ? 'text-amber-400 bg-white/10' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              {isId ? 'Hubungi Kami' : 'Contact Us'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
