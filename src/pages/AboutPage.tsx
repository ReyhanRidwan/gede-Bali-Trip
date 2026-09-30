import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { AboutIntroSection } from '../components/AboutIntroSection';
import { Language, TourPackage } from '../types';
import {
  Award,
  ShieldCheck,
  Users,
  CheckCircle2,
  Clock,
  Camera,
  Car,
  BadgePercent,
} from 'lucide-react';

interface AboutPageProps {
  currentLanguage: Language;
  packages: TourPackage[];
  onSelectPackage: (pkg: TourPackage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  currentLanguage,
  packages,
  onSelectPackage,
}) => {
  const isId = currentLanguage === 'id';

  const whyChooseUsList = [
    {
      icon: Award,
      title: isId ? 'Pelayanan Terpercaya & Profesional' : 'Trusted & Professional Service',
      desc: isId
        ? 'Melayani ribuan wisatawan domestik dan mancanegara dengan dedikasi dan standar kepuasan tertinggi di Bali.'
        : 'Dedicated excellence serving thousands of domestic and international travelers across Bali.',
      color: 'bg-amber-100 text-amber-700 border-amber-200',
    },
    {
      icon: Users,
      title: isId ? 'Driver Asli Bali Berlisensi & Ramah' : 'Friendly Native Balinese Drivers',
      desc: isId
        ? 'Driver profesional, santun, bertutur kata sopan, serta memahami jalan pintas cerdas untuk menghindari kemacetan wisata.'
        : 'Professional, courteous drivers who know local history, cultural norms, and traffic-free shortcuts.',
      color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    {
      icon: Car,
      title: isId ? 'Armada Mobil Prima, Bersih & Wangi' : 'Pristine AC Vehicles',
      desc: isId
        ? 'Seluruh kendaraan (Avanza, Innova Reborn, Hiace, Alphard) ber-AC dingin, selalu dicuci bersih, wangi, dan diservis berkala.'
        : 'All minivans & luxury cars are thoroughly sanitised, smell fresh, feature cool AC, and pass regular maintenance checks.',
      color: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    {
      icon: Camera,
      title: isId ? 'Bantuan Foto & Video Estetik' : 'Complimentary Photo Assistance',
      desc: isId
        ? 'Driver kami terlatih membantu mengambil sudut foto terbaik di setiap spot ikonik (Kelingking, Handara, Uluwatu) tanpa biaya tambahan.'
        : 'Our drivers double as helpful photographers knowing the prime angles at scenic viewpoints.',
      color: 'bg-purple-100 text-purple-700 border-purple-200',
    },
    {
      icon: BadgePercent,
      title: isId ? 'Harga Transparan Tanpa Biaya Tersembunyi' : 'Transparent Pricing & No Hidden Fees',
      desc: isId
        ? 'Semua paket sudah termasuk BBM, tiket masuk, parkir, dan driver. Tidak ada pemaksaan belanja atau tips tersembunyi.'
        : 'All-inclusive packages including petrol, tickets, parking, and toll fees with zero surprise surcharges.',
      color: 'bg-rose-100 text-rose-700 border-rose-200',
    },
    {
      icon: Clock,
      title: isId ? 'Jadwal Fleksibel & Konsultasi 24/7' : 'Flexible Itinerary & 24/7 Support',
      desc: isId
        ? 'Bebas atur waktu penjemputan atau sesuaikan destinasi favorit sesuai keinginan keluarga dan pasangan Anda.'
        : 'Customize your daily schedule freely and get instant responsive travel support anytime via WhatsApp.',
      color: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    },
  ];

  return (
    <div className="w-full">
      {/* Short Scenic Bali Header Banner */}
      <PageHeaderBanner
        currentLanguage={currentLanguage}
        title="Tentang Kami"
        titleEn="About Us"
        breadcrumb="Tentang Kami"
        breadcrumbEn="About Us"
        backgroundImage="https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png"
        packages={packages}
        onSelectPackage={onSelectPackage}
      />

      {/* "Eh, Kenalin Dulu Yuk!" Section with the exact 4 Cloudinary Photos */}
      <AboutIntroSection currentLanguage={currentLanguage} />

      {/* "Why Choose Us" / Mengapa Memilih Kami Section (Only on About Page) */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-t border-b border-neutral-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold mb-3">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>{isId ? 'Keunggulan Kami' : 'Our Key Advantages'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              {isId
                ? 'Mengapa Memilih GedeBaliTrip?'
                : 'Why Choose GedeBaliTrip?'}
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {isId
                ? 'Standar pelayanan terbaik dan kenyamanan prima untuk memastikan setiap detik liburan Anda di Bali penuh keceriaan.'
                : 'Premium service standards and unrivaled reliability to ensure every moment of your Bali journey is filled with joy.'}
            </p>
          </div>

          {/* Grid of 6 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUsList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border ${item.color}`}
                    >
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isId ? 'Standar Pelayanan Teruji' : 'Verified Standard'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-amber-600 to-amber-500 text-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider bg-neutral-950 text-amber-400 px-3.5 py-1 rounded-full inline-block mb-3">
              {isId ? 'Siap Berlibur ke Bali?' : 'Ready for Bali?'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
              {isId ? 'Konsultasikan Trip Impianmu Sekarang' : 'Consult Your Dream Bali Trip Today'}
            </h3>
            <p className="mt-2 text-sm text-neutral-900/90 max-w-xl">
              {isId
                ? 'Tim GedeBaliTrip siap membantu mengatur jadwal, rekomendasi villa, hingga pemilihan rute terbaik sesuai budget Anda.'
                : 'Our team is ready 24/7 to craft customized itineraries, villa recommendations, and optimal routes.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
            <Link
              to="/hubungi-kami"
              className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold px-7 py-4 rounded-2xl text-center shadow-lg transition"
            >
              {isId ? 'Hubungi Kami via WhatsApp' : 'Chat Us on WhatsApp'}
            </Link>
            <Link
              to="/paket"
              className="bg-white/80 hover:bg-white text-neutral-950 text-xs sm:text-sm font-bold px-7 py-4 rounded-2xl text-center shadow-sm transition"
            >
              {isId ? 'Pilih Paket Tour' : 'View Packages'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
