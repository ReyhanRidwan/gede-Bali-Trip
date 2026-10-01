import React from 'react';
import { CARS } from '../data/cars';
import { COMPANY_INFO } from '../data/packages';
import { Language } from '../types';
import { Car } from 'lucide-react';
import { getOptimizedCloudinaryUrl, getCloudinarySrcSet } from '../utils/cloudinary';

interface CarCharterSectionProps {
  currentLanguage: Language;
}

export const CarCharterSection: React.FC<CarCharterSectionProps> = ({ currentLanguage }) => {
  const isId = currentLanguage === 'id';

  // Take only the first 4 cars as requested
  const displayedCars = CARS.slice(0, 4);

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1560px] mx-auto">
        <div className="flex items-center gap-3 mb-10">
            <Car className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl font-extrabold text-neutral-900">
                {isId ? 'Sewa Mobil' : 'Car Charter'}
            </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayedCars.map((car) => (
                <div key={car.id} className="bg-white p-4 rounded-3xl border border-neutral-200 shadow-sm text-center group hover:shadow-lg transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-full h-40 flex items-center justify-center mb-4 overflow-hidden">
                        <img
                          src={getOptimizedCloudinaryUrl(car.imageUrl, { width: 360 })}
                          srcSet={getCloudinarySrcSet(car.imageUrl, [200, 320, 480])}
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                          alt={car.name}
                          width="240"
                          height="160"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-40 object-contain group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="text-sm font-bold mb-4 text-neutral-800">{car.name}</h4>
                    </div>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hello GedeBaliTrip, I would like to get a price quote and availability for car charter: *${car.name}*. Please provide details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-neutral-900 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-all text-xs"
                    >
                      {isId ? 'Konsultasi Harga' : 'Get Price Quote'}
                    </a>
                </div>
            ))}
        </div>
    </section>
  );
};
