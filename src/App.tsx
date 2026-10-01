import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import { LanguageSelector } from './components/LanguageSelector';
import { TOUR_PACKAGES } from './data/packages';
import { Language, TourPackage } from './types';

// Code-split secondary routes to shrink initial mobile JavaScript bundle
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const PackagesPage = lazy(() => import('./pages/PackagesPage').then((m) => ({ default: m.PackagesPage })));
const CarCharterPage = lazy(() => import('./pages/CarCharterPage').then((m) => ({ default: m.CarCharterPage })));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage').then((m) => ({ default: m.PackageDetailPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then((m) => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('gedebalitrip_lang');
      return saved === 'id' || saved === 'en' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('gedebalitrip_lang', lang);
    } catch {}
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-400 selection:text-neutral-950 flex flex-col justify-between">
        {/* Main Routed Content */}
        <main className="w-full flex-1">
          <Suspense fallback={null}>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    currentLanguage={currentLanguage}
                    packages={TOUR_PACKAGES}
                    onSelectPackage={() => {}}
                  />
                }
              />
              <Route
                path="/tentang-kami"
                element={
                  <AboutPage
                    currentLanguage={currentLanguage}
                    packages={TOUR_PACKAGES}
                    onSelectPackage={() => {}}
                  />
                }
              />
              <Route
                path="/paket"
                element={
                  <PackagesPage
                    currentLanguage={currentLanguage}
                    packages={TOUR_PACKAGES}
                  />
                }
              />
              <Route
                path="/sewa-mobil"
                element={
                  <CarCharterPage
                    currentLanguage={currentLanguage}
                    packages={TOUR_PACKAGES}
                  />
                }
              />
              <Route
                path="/paket/:id"
                element={
                  <PackageDetailPage
                    currentLanguage={currentLanguage}
                    packages={TOUR_PACKAGES}
                  />
                }
              />
              <Route
                path="/dokumentasi"
                element={
                  <GalleryPage
                    currentLanguage={currentLanguage}
                    packages={TOUR_PACKAGES}
                    onSelectPackage={() => {}}
                  />
                }
              />
              <Route
                path="/hubungi-kami"
                element={
                  <ContactPage
                    currentLanguage={currentLanguage}
                    packages={TOUR_PACKAGES}
                    onSelectPackage={() => {}}
                  />
                }
              />
              {/* Fallback to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Universal Footer with links */}
        <Footer currentLanguage={currentLanguage} />

        {/* Global Floating Language Selector */}
        <LanguageSelector
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </div>
    </BrowserRouter>
  );
}
