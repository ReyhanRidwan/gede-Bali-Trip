import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PackagesPage } from './pages/PackagesPage';
import { CarCharterPage } from './pages/CarCharterPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { LanguageSelector } from './components/LanguageSelector';
import { TOUR_PACKAGES } from './data/packages';
import { Language, TourPackage } from './types';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('id');

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-400 selection:text-neutral-950 flex flex-col justify-between">
        {/* Main Routed Content */}
        <main className="w-full flex-1">
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
        </main>

        {/* Universal Footer with links */}
        <Footer currentLanguage={currentLanguage} />

        {/* Global Floating Language Selector */}
        <LanguageSelector
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
        />
      </div>
    </BrowserRouter>
  );
}
