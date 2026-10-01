import React from 'react';
import { Language } from '../types';
import { Star, Award, Shield, ThumbsUp, Heart } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLanguage: Language;
  onOpenContact: () => void;
}

const STATIC_REVIEWS = [
  {
    name: "Manas Rawat",
    comment: "My recent trip to Bali is incomplete without thanking Ari for how smooth he has made it for me. Even visiting in the month of July the weather wasn’t supportive but what else I could have expected to be with him. He has well taken care of all my requirements and kept us engaged with every way possible. He was supposed to only take us around but eventually turned around the planner of our trip. We blindly trusted him and I am taking back lots of good memories and a great friend. Thank you Ari for your hospitality and meet you soon my friend. Thank you for Arrack 🥃🥃",
    rating: 5
  },
  {
    name: "Wahid Rahman",
    comment: "Ari is the best as a friend, as a guide, as a family member that you are looking in Indonesia. He is so decent, gentle, disciplined, polite in every way I can explain…. Most importantly, he is so punctual in his presence every time you are asking for… I stayed in Indonesia for last three days and he was with me all the time. He took me to the best visiting places and I found having him a very good knowledge about the places… I didn’t have to ask but he prepared the best schedules to visit the most exciting places that someone should go as a visitor… he was so cordial every time that pleased me the most.. he was so cooperative and helpful always… I found him as the best friend here in Indonesia.",
    rating: 5
  },
  {
    name: "Ben wolven",
    comment: "got Gede’s number from a friend back in the states and I am so thankful that I did! My and my partner had very little direction going into our trip and figured we’d drop him a line. His communication was prompt and direct, he wasn’t pushy like some other tour guides but genuinely wanted us to make the most of our time on this incredibly special island. We hit some of the hot spots that frankly weren’t for us (we are not IG models) so we retuned our expectations, sans standing in lines and ended up eating some of the most incredible food and seeing the inner beauty of the island. By the end of our trip all we wanted to do was spend time with our new friends, Gede and his family.",
    rating: 5
  }
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  currentLanguage,
  onOpenContact,
}) => {
  const isId = currentLanguage === 'id';

  return (
    <section className="py-16 bg-neutral-50 border-t border-b border-neutral-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Features / Badges - Kept as requested */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900">
              {isId ? 'Terpercaya & Profesional' : 'Trusted & Professional'}
            </h4>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900">
              {isId ? 'Driver Lokal & Berlisensi' : 'Licensed Local Drivers'}
            </h4>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900">
              {isId ? 'Harga Transparan' : 'Honest Best Rates'}
            </h4>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900">
              {isId ? 'Bantuan Foto Terbaik' : 'Great Tour Photos'}
            </h4>
          </div>
        </div>

        {/* Google Reviews Header */}
        <div className="flex flex-col items-center justify-center gap-2 mb-12">
            <div className="flex items-center gap-2 text-2xl font-bold text-neutral-800">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8"/>
                <span>Gede Bali Trip</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
                <span className="font-semibold text-lg text-neutral-900">5.0</span>
                <div className="flex text-amber-400">
                    <Star className="w-5 h-5 fill-amber-400"/>
                    <Star className="w-5 h-5 fill-amber-400"/>
                    <Star className="w-5 h-5 fill-amber-400"/>
                    <Star className="w-5 h-5 fill-amber-400"/>
                    <Star className="w-5 h-5 fill-amber-400"/>
                </div>
                <span>49 reviews</span>
            </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATIC_REVIEWS.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="text-amber-400 mb-4">
                  <span className="text-3xl font-serif text-neutral-300">“</span>
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                  {item.comment}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <h4 className="text-sm font-bold text-neutral-900">{item.name}</h4>
                <div className="flex text-amber-400">
                   {[...Array(item.rating)].map((_, i) => (
                     <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

