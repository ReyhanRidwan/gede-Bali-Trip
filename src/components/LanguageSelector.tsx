import React, { useState } from 'react';
import { Language } from '../types';
import { Globe, Check } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="floating-language-widget" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100]">
      {/* Dropdown Options */}
      {isOpen && (
        <div
          id="language-dropdown-menu"
          className="absolute bottom-full right-0 mb-2 w-44 bg-neutral-900/95 backdrop-blur-md text-white rounded-xl shadow-2xl border border-white/10 overflow-hidden py-1.5 transition-all animate-in fade-in slide-in-from-bottom-2"
        >
          <button
            id="lang-option-id"
            type="button"
            onClick={() => {
              onLanguageChange('id');
              setIsOpen(false);
            }}
            className={`w-full px-3.5 py-2 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-white/10 transition cursor-pointer ${
              currentLanguage === 'id' ? 'font-semibold text-amber-400' : 'text-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-3.5 rounded-xs overflow-hidden border border-white/20 inline-flex flex-col shrink-0 shadow-xs">
                <span className="w-full h-1/2 bg-red-600 block" />
                <span className="w-full h-1/2 bg-white block" />
              </span>
              <span>Bahasa Indonesia</span>
            </div>
            {currentLanguage === 'id' && <Check className="w-3.5 h-3.5 text-amber-400" />}
          </button>

          <button
            id="lang-option-en"
            type="button"
            onClick={() => {
              onLanguageChange('en');
              setIsOpen(false);
            }}
            className={`w-full px-3.5 py-2 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-white/10 transition cursor-pointer ${
              currentLanguage === 'en' ? 'font-semibold text-amber-400' : 'text-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-3.5 rounded-xs overflow-hidden border border-white/20 inline-flex items-center justify-center bg-blue-700 text-[8px] font-bold text-white shrink-0 shadow-xs">
                EN
              </span>
              <span>English</span>
            </div>
            {currentLanguage === 'en' && <Check className="w-3.5 h-3.5 text-amber-400" />}
          </button>
        </div>
      )}

      {/* Screenshot-identical badge */}
      <button
        id="current-language-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black hover:bg-neutral-900 active:scale-95 text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium shadow-2xl flex items-center gap-2.5 border border-white/15 cursor-pointer transition-all duration-200"
        title="Ganti Bahasa / Change Language"
        aria-label="Pilih Bahasa"
      >
        {currentLanguage === 'id' ? (
          <>
            {/* Indonesian flag matching screenshot: red top, white bottom */}
            <span className="w-5 h-3.5 rounded-xs overflow-hidden border border-white/30 inline-flex flex-col shrink-0 shadow-xs">
              <span className="w-full h-1/2 bg-red-600 block" />
              <span className="w-full h-1/2 bg-white block" />
            </span>
            <span className="tracking-normal font-medium">Indonesian</span>
          </>
        ) : (
          <>
            <span className="w-5 h-3.5 rounded-xs overflow-hidden border border-white/30 inline-flex items-center justify-center bg-blue-700 text-[8px] font-bold text-white shrink-0 shadow-xs">
              EN
            </span>
            <span className="tracking-normal font-medium">English</span>
          </>
        )}
      </button>
    </div>
  );
};
