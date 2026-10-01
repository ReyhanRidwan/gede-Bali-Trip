import React from 'react';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { CARS } from '../data/cars';
import { COMPANY_INFO } from '../data/packages';
import { Language, TourPackage } from '../types';
import { Car } from 'lucide-react';
import { getOptimizedCloudinaryUrl, getCloudinarySrcSet } from '../utils/cloudinary';

interface CarCharterPageProps {
  currentLanguage: Language;
  packages: TourPackage[];
}

export const CarCharterPage: React.FC<CarCharterPageProps> = ({ currentLanguage, packages }) => {
  const isId = currentLanguage === 'id';

  return (
    <div className="w-full">
      <PageHeaderBanner
        currentLanguage={currentLanguage}
        title={isId ? 'Sewa Mobil' : 'Car Charter'}
        titleEn="Car Charter"
        breadcrumb={isId ? 'Sewa Mobil' : 'Car Charter'}
        breadcrumbEn="Car Charter"
        backgroundImage="https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png"
        packages={packages}
      />
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1560px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARS.map((car) => (
                <div key={car.id} className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm text-center flex flex-col justify-between">
                    <div>
                      <div className="w-full h-56 flex items-center justify-center mb-4 overflow-hidden">
                        <img
                          src={getOptimizedCloudinaryUrl(car.imageUrl, { width: 480 })}
                          srcSet={getCloudinarySrcSet(car.imageUrl, [240, 360, 480])}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          alt={car.name}
                          width="320"
                          height="224"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-56 object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-bold mb-6 text-neutral-800">{car.name}</h4>
                    </div>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hello GedeBaliTrip, I would like to get a price quote and availability for car charter: *${car.name}*. Please provide details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all"
                    >
                      {isId ? 'Konsultasi Harga via WhatsApp' : 'Get Price Quote via WhatsApp'}
                    </a>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};
