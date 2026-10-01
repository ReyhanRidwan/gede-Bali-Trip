import React from 'react';
import { CARS } from '../data/cars';
import { COMPANY_INFO } from '../data/packages';
import { Language } from '../types';
import { Car } from 'lucide-react';

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
                <div key={car.id} className="bg-white p-4 rounded-3xl border border-neutral-200 shadow-sm text-center group hover:shadow-lg transition-all">
                    <img src={car.imageUrl} alt={car.name} className="w-full h-40 object-contain mb-4 group-hover:scale-105 transition-transform" />
                    <h4 className="text-sm font-bold mb-4 text-neutral-800">{car.name}</h4>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                        `Halo GedeBaliTrip, saya ingin konsultasi harga untuk sewa mobil: *${car.name}*.`
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
