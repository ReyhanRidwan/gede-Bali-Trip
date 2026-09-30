import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Language, TourPackage } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767450/e4a0449d-0195-4e6d-b0e5-73dbaa7dba61.png',
    alt: 'GedeBaliTrip Exotic Bali Tour Experience',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767029/WhatsApp-Image-2026-03-14-at-11.11.58_vltni8.webp',
    alt: 'Bali Paradise Tour with Private Driver',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767054/young-woman-standing-temple-gates-lempuyang-luhur-temple-bali-indonesia-vintage-tone-scaled_n7cmrt.webp',
    alt: 'Lempuyang Temple Gates of Heaven Bali',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767095/perfect-view-kelingking-beach-nusa-penida-island-indonesia-scaled_h8ni6e.webp',
    alt: 'Kelingking Beach Nusa Penida Island Bali',
  },
];

interface HeroProps {
  currentLanguage: Language;
  packages: TourPackage[];
  onSelectPackage: (pkg: TourPackage) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLanguage,
  packages,
  onSelectPackage,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger initial fade-in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Automatic slide transition every 5 seconds (5000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="hero"
      className="w-full relative px-2.5 sm:px-4 md:px-6 lg:px-8 pt-2.5 sm:pt-4"
    >
      {/* Outer rounded container */}
      <div
        id="hero-rounded-banner"
        className="w-full max-w-[1560px] mx-auto min-h-[580px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-[780px] xl:min-h-[820px] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] overflow-hidden relative shadow-2xl flex flex-col justify-between border border-black/5"
      >
        {/* Background Slideshow with Smooth Crossfade & Fade-in */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-neutral-950">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}

          {/* Cinematic Vignette & Readability Gradient Overlays */}
          <div className="absolute inset-0 bg-black/25 z-10" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/75 via-black/35 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/85 via-black/50 to-transparent z-10" />
        </div>

        {/* Top Navbar Area */}
        <div
          className={`relative z-20 px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Navbar
            currentLanguage={currentLanguage}
            packages={packages}
            onSelectPackage={onSelectPackage}
          />
        </div>

        {/* Center Hero Headline & Tag with Fade-in Animation */}
        <div
          className={`relative z-20 my-auto py-10 sm:py-16 px-4 sm:px-6 flex flex-col items-center justify-center text-center transition-all duration-1000 delay-150 ease-out ${
            isLoaded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
          }`}
        >
          {/* Pill Badge */}
          <div
            id="hero-badge-tag"
            className="inline-flex items-center px-4 sm:px-5 py-1.5 rounded-full border border-white/40 bg-black/30 backdrop-blur-xs text-white text-xs sm:text-sm font-medium tracking-normal mb-5 sm:mb-7 shadow-sm select-none animate-in fade-in duration-700"
          >
            {currentLanguage === 'id'
              ? 'Travel Agency Bali Terlengkap'
              : 'Most Complete Bali Travel Agency'}
          </div>

          {/* Big Center Title */}
          <h1
            id="hero-main-title"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[72px] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.15] max-w-4xl drop-shadow-lg select-none"
          >
            {currentLanguage === 'id' ? (
              <>
                Jelajahi Keindahan<br />
                Pulau Bali Bersama<br />
                GedeBaliTrip
              </>
            ) : (
              <>
                Explore The Beauty<br />
                of Bali Island With<br />
                GedeBaliTrip
              </>
            )}
          </h1>

          {/* Slide Indicator Dots & Navigation Controls */}
          <div className="flex items-center gap-3 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Previous Slide"
              className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 border border-white/30 text-white flex items-center justify-center backdrop-blur-xs transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    currentSlide === idx
                      ? 'w-8 bg-amber-400'
                      : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Next Slide"
              className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 border border-white/30 text-white flex items-center justify-center backdrop-blur-xs transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Left Description Paragraph & Right "Lihat Paket ⟶" Button */}
        <div
          className={`relative z-20 px-6 sm:px-10 lg:px-12 pb-8 sm:pb-12 transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Bottom Left Paragraph */}
            <p
              id="hero-subtext-description"
              className="text-white/95 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-lg font-normal drop-shadow-md select-none"
            >
              {currentLanguage === 'id' ? (
                'Kami bantu kamu explore Pulau Bali Dengan pengalaman terbaik. Dari pantai tersembunyi, sawah yang bikin tenang, sampai kuliner lokal yang bikin nagih. Semua udah kami siapin buat kamu!'
              ) : (
                'We guide you to explore the Island of the Gods with the greatest experience. From secret white sand beaches, tranquil emerald rice terraces, to authentic local flavors. Everything is prepared just for you!'
              )}
            </p>

            {/* Bottom Right CTA Button matching screenshot -> Routes to /paket */}
            <div className="shrink-0 flex items-center">
              <Link
                to="/paket"
                id="hero-btn-lihat-paket"
                className="cursor-pointer inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-white/60 bg-black/35 hover:bg-black/60 hover:border-white text-white text-xs sm:text-sm md:text-[15px] font-medium backdrop-blur-xs transition-all duration-200 shadow-lg group active:scale-95"
              >
                <span>{currentLanguage === 'id' ? 'Lihat Paket' : 'View Packages'}</span>
                <span className="font-sans text-base transition-transform duration-200 group-hover:translate-x-1">
                  ⟶
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
