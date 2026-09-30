import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AboutIntroSectionProps {
  currentLanguage: Language;
}

export const AboutIntroSection: React.FC<AboutIntroSectionProps> = ({ currentLanguage }) => {
  const isId = currentLanguage === 'id';

  // The exact 4 Cloudinary images requested
  const images = {
    img1: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790771775/58135db0-5806-4d5a-b7f7-fcdba0b65dde.png',
    img2: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png',
    img3: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790771595/3fa8842f-aa2a-4672-b70c-fbabe682af19.png',
    img4: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767733/e21b3225-7131-4edd-9019-2e47c4890635.png',
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Friendly Intro Header */}
      <div className="mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{isId ? 'Cerita Perjalanan Kami' : 'Our Story'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">
          <span>{isId ? 'Eh, Kenalin Dulu Yuk!' : 'Hey, Let Us Introduce Ourselves!'}</span>
          <span className="text-3xl sm:text-4xl">👋</span>
        </h2>
        <p className="text-neutral-600 text-sm sm:text-lg mt-2 font-normal">
          {isId
            ? 'Kami GedeBaliTrip — dan kami udah nggak sabar buat nemenin liburanmu.'
            : 'We are GedeBaliTrip — and we can’t wait to accompany your dream holiday.'}
        </p>
      </div>

      {/* Two Column Story & 4 Photos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Story Text */}
        <div className="lg:col-span-6 space-y-5">
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            {isId ? (
              <>
                Dulu, banyak teman-teman kami yang balik dari Bali dengan cerita liburan yang melelahkan: terjebak macet berjam-jam, driver yang kurang ramah, sampai biaya tak terduga yang bikin kaget. Dari sanalah, <strong>GedeBaliTrip</strong> hadir dengan satu komitmen sederhana: <em>bikin liburan di Bali jadi pengalaman paling membahagiakan, santai, dan tanpa ribet.</em>
              </>
            ) : (
              <>
                <strong>GedeBaliTrip</strong> was born with one simple mission: to make every Bali vacation completely relaxing, authentic, and free from worries or hidden surcharges.
              </>
            )}
          </p>

          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            {isId ? (
              <>
                Dalam melayani wisatawan dari seluruh Indonesia hingga mancanegara, kami selalu menjaga standar armada kendaraan yang wangi, dingin, dan bersih, serta membina para driver lokal asli Bali yang ramah, sopan, dan pintar cari spot foto estetik.
              </>
            ) : (
              <>
                We maintain a modern fleet of sanitized AC cars and a dedicated team of certified local Balinese guides who know traffic-free shortcuts and best photo angles.
              </>
            )}
          </p>

          {/* Quote box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border-l-4 border-amber-500 text-neutral-800 text-xs sm:text-sm italic leading-relaxed">
            {isId
              ? '“Bagi kami, setiap tamu adalah keluarga yang kami sambut dengan ketulusan hati khas Pulau Dewata.”'
              : '“To us, every guest is family welcomed with the genuine warmth of the Island of the Gods.”'}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-amber-600">14+</div>
              <div className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">{isId ? 'Tahun Berdiri' : 'Years Active'}</div>
            </div>
            <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-amber-600">18.500+</div>
              <div className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">{isId ? 'Tamu Senang' : 'Happy Guests'}</div>
            </div>
            <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-amber-600">4.9 ★</div>
              <div className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">{isId ? 'Rating Ulasan' : 'Review Score'}</div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/paket"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-amber-600 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl shadow-md transition cursor-pointer"
            >
              <span>{isId ? 'Lihat Pilihan Paket Tour' : 'Explore Tour Packages'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/hubungi-kami"
              className="inline-flex items-center gap-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl transition cursor-pointer"
            >
              <span>{isId ? 'Hubungi Customer Care' : 'Contact Support'}</span>
            </Link>
          </div>
        </div>

        {/* Right 4 Photos Collage matching user's exact 4 image links */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-3.5 sm:gap-4">
          <div className="space-y-3.5 sm:space-y-4">
            {/* Image 1: Top Left */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-48 sm:h-64 border border-neutral-200 bg-neutral-100">
              <img
                src={images.img1}
                alt="GedeBaliTrip Experience 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            {/* Image 2: Bottom Left */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-40 sm:h-52 border border-neutral-200 bg-neutral-100">
              <img
                src={images.img2}
                alt="GedeBaliTrip Experience 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-3.5 sm:space-y-4 pt-4 sm:pt-6">
            {/* Image 3: Top Right */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-40 sm:h-52 border border-neutral-200 bg-neutral-100">
              <img
                src={images.img3}
                alt="GedeBaliTrip Experience 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            {/* Image 4: Bottom Right */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-48 sm:h-64 border border-neutral-200 bg-neutral-100">
              <img
                src={images.img4}
                alt="GedeBaliTrip Experience 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
