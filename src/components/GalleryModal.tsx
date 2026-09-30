import React, { useState } from 'react';
import { Language } from '../types';
import { GALLERY_PHOTOS } from '../data/packages';
import { X, MapPin, Camera } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  if (!isOpen) return null;
  const isId = currentLanguage === 'id';

  const categories = isId
    ? ['Semua', 'Pantai & Samudra', 'Seni & Budaya', 'Alam & Pegunungan', 'Pura Bersejarah', 'Kuliner & Momen']
    : ['All', 'Beaches', 'Culture', 'Nature', 'Temples', 'Culinary'];

  const filteredPhotos = selectedCategory === 'Semua' || selectedCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  return (
    <div
      id="gallery-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="gallery-modal-card"
        className="bg-neutral-900 text-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-5 sm:p-8 relative animate-in fade-in zoom-in-95 my-auto border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-gallery-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            <Camera className="w-4 h-4" />
            <span>{isId ? 'Galeri Dokumentasi Tour' : 'Tour Documentation Gallery'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {isId ? 'Momen Tak Terlupakan Bersama Tamu Kami' : 'Memorable Moments Captured with Our Guests'}
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-1">
            {isId
              ? 'Foto otentik keindahan destinasi Bali yang siap kamu kunjungi bersama tim GedeBaliTrip.'
              : 'Authentic captures from iconic Bali spots awaiting your trip with GedeBaliTrip.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-neutral-950 font-semibold'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo.imageUrl)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-800 aspect-4/3 cursor-pointer shadow-md"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <h4 className="text-sm font-semibold text-white drop-shadow-xs">{photo.title}</h4>
                <p className="text-[11px] text-neutral-300 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>{photo.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full view image popup if clicked */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActivePhoto(null)}
          >
            <img
              src={activePhoto}
              alt="Preview"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};
