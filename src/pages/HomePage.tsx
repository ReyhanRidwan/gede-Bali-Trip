import React from 'react';
import { Hero } from '../components/Hero';
import { ParadiseBaliSection } from '../components/ParadiseBaliSection';
import { PackagesSection } from '../components/PackagesSection';
import { AboutIntroSection } from '../components/AboutIntroSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Language, TourPackage } from '../types';

interface HomePageProps {
  currentLanguage: Language;
  packages: TourPackage[];
  onSelectPackage: (pkg: TourPackage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLanguage,
  packages,
  onSelectPackage,
}) => {
  return (
    <div>
      {/* Exact Hero screen matching the user's provided screenshot */}
      <Hero
        currentLanguage={currentLanguage}
        packages={packages}
        onSelectPackage={onSelectPackage}
      />

      {/* "Surga Dunia Itu Nyata. Dan Itu Adalah Bali" Bento Showcase Section */}
      <ParadiseBaliSection
        currentLanguage={currentLanguage}
        packages={packages}
        onSelectPackage={onSelectPackage}
      />

      {/* Featured Packages Section (Ubud filtered out, shows prominent "Lihat Semua Paket" button) */}
      <PackagesSection
        packages={packages}
        currentLanguage={currentLanguage}
        onSelectPackage={onSelectPackage}
      />

      {/* "Eh, Kenalin Dulu Yuk! 👋" Story & 4 Photos Collage (without Mengapa Memilih Kami) */}
      <AboutIntroSection currentLanguage={currentLanguage} />

      {/* Real Reviews & Trust Factors */}
      <TestimonialsSection
        currentLanguage={currentLanguage}
        onOpenContact={() => {}}
      />
    </div>
  );
};
