import React from 'react';
import { Language } from '../types';
import { TESTIMONIALS, COMPANY_INFO } from '../data/packages';
import { Star, Shield, Award, Users, ThumbsUp, Heart } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLanguage: Language;
  onOpenContact: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  currentLanguage,
  onOpenContact,
}) => {
  const isId = currentLanguage === 'id';

  return (
    <section className="py-16 bg-neutral-50/70 border-t border-b border-neutral-200/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Features / Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900">
              {isId ? 'Terpercaya & Profesional' : 'Trusted & Professional'}
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              {isId ? 'Melayani ribuan trip wisata keliling Bali' : 'Reliable and friendly tour operations in Bali'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900">
              {isId ? 'Driver Lokal & Berlisensi' : 'Licensed Local Drivers'}
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              {isId ? 'Sopan, ramah & paham rute bebas macet' : 'Friendly, safe driving & local knowledge'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900">
              {isId ? 'Harga Transparan' : 'Honest Best Rates'}
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              {isId ? 'All-in tanpa pungutan liar atau tips paksa' : 'All-inclusive packages with zero hidden fees'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900">
              {isId ? 'Bantuan Foto Terbaik' : 'Great Tour Photos'}
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              {isId ? 'Driver siap bantu foto & video di setiap spot' : 'Complimentary photo assistance at viewpoints'}
            </p>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            {isId ? 'Ulasan Wisatawan' : 'Real Guest Reviews'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
            {isId ? 'Apa Kata Mereka Tentang GedeBaliTrip?' : 'Stories from Our Happy Bali Travelers'}
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-neutral-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900">{item.name}</h4>
                  <span className="text-[11px] text-neutral-500">{item.from} • {item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
