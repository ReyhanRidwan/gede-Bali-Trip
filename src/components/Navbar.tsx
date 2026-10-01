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
  const [isMobilePackageMenuOpen, setIsMobilePackageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isId = currentLanguage === 'id';
  const pathname = location.pathname;

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsPackageDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsPackageDropdownOpen(false);
    }, 600);
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPackageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobilePackageMenuOpen(false);
    setIsPackageDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isHome = pathname === '/';
  const isAbout = pathname === '/tentang-kami';
  const isPackages = pathname === '/paket' || pathname === '/sewa-mobil';
  const isGallery = pathname === '/dokumentasi';
  const isContact = pathname === '/hubungi-kami';

  return (
    <header className={`w-full z-50 ${isInnerPage ? 'bg-neutral-950/95 backdrop-blur-md border-b border-white/10 sticky top-0 py-3.5 px-4 sm:px-6 lg:px-8 shadow-lg' : 'relative'}`}>
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

          {/* Paket with Hover & Click Dropdown */}
          <div 
            className="relative py-2" 
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsPackageDropdownOpen((prev) => !prev);
              }}
              className="flex items-center cursor-pointer select-none group focus:outline-none"
              aria-expanded={isPackageDropdownOpen}
              aria-haspopup="true"
            >
              <span
                id="nav-link-paket"
                className={`transition-colors font-medium pr-1.5 ${
                  isPackages
                    ? 'text-[#f59e0b] font-semibold'
                    : 'text-white/90 group-hover:text-white'
                }`}
              >
                {isId ? 'Paket' : 'Packages'}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isPackageDropdownOpen ? 'rotate-180 text-amber-400' : 'text-white/80 group-hover:text-amber-400'
                }`}
              />
            </button>

            {/* Dropdown Menu - Seamlessly bridged with buffer timer */}
            {isPackageDropdownOpen && (
              <div
                id="paket-dropdown-menu"
                className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 w-56 z-50 select-none"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Generous invisible hover buffer that covers top, sides, and bottom */}
                <div 
                  className="absolute -top-5 -left-8 -right-8 -bottom-5 pointer-events-auto"
                  onMouseEnter={handleMouseEnter}
                />

                <div 
                  className="relative bg-white rounded-2xl p-2.5 shadow-2xl border border-neutral-200 ring-1 ring-black/5"
                  onMouseEnter={handleMouseEnter}
                >
                  <Link
                    to="/paket"
                    onMouseEnter={handleMouseEnter}
                    onClick={() => {
                      setIsPackageDropdownOpen(false);
                      navigate('/paket');
                    }}
                    className="w-full text-left px-4 py-3.5 rounded-xl hover:bg-amber-50 text-neutral-900 transition-colors flex items-center justify-between group/item cursor-pointer"
                  >
                    <div className="text-sm font-bold text-neutral-900 group-hover/item:text-amber-600 transition-colors">
                      {isId ? 'Paket Tour' : 'Tour Packages'}
                    </div>
                  </Link>
                  <Link
                    to="/sewa-mobil"
                    onMouseEnter={handleMouseEnter}
                    onClick={() => {
                      setIsPackageDropdownOpen(false);
                      navigate('/sewa-mobil');
                    }}
                    className="w-full text-left px-4 py-3.5 rounded-xl hover:bg-amber-50 text-neutral-900 transition-colors flex items-center justify-between group/item cursor-pointer"
                  >
                    <div className="text-sm font-bold text-neutral-900 group-hover/item:text-amber-600 transition-colors">
                      {isId ? 'Sewa Mobil' : 'Car Charter'}
                    </div>
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
            <div className="relative">
              <button
                onClick={() => setIsMobilePackageMenuOpen(!isMobilePackageMenuOpen)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl font-medium transition flex items-center justify-between ${
                  isPackages ? 'text-amber-400 bg-white/10' : 'text-neutral-200 hover:bg-white/5'
                }`}
              >
                <span>{isId ? 'Paket & Sewa Mobil' : 'Packages & Charter'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobilePackageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobilePackageMenuOpen && (
                <div className="pl-4 mt-1 flex flex-col gap-1 border-l-2 border-white/20 ml-2">
                  <Link
                    to="/paket"
                    onClick={() => { setIsMobileMenuOpen(false); setIsMobilePackageMenuOpen(false); }}
                    className="text-neutral-300 hover:text-amber-400 px-3 py-2 text-sm"
                  >
                    {isId ? 'Paket Tour' : 'Tour Packages'}
                  </Link>
                  <Link
                    to="/sewa-mobil"
                    onClick={() => { setIsMobileMenuOpen(false); setIsMobilePackageMenuOpen(false); }}
                    className="text-neutral-300 hover:text-amber-400 px-3 py-2 text-sm"
                  >
                    {isId ? 'Sewa Mobil' : 'Car Charter'}
                  </Link>
                </div>
              )}
            </div>
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
