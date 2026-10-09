import React from 'react';
import { TESTIMONIALS } from '../data/foodData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-stone-50/70 border-y border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-2">
            Real Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Loved by Kathmandu Valley
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-500">
            See what regular food lovers, office teams, and food critics say about their orders.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => {
            const initials = item.name
              .split(' ')
              .map((n) => n[0])
              .join('');

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-xl hover:shadow-orange-950/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Quote & Rating */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex text-amber-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-stone-200 rotate-180" />
                  </div>

                  {/* Review Quote Text */}
                  <p className="text-sm text-[#1F2937] leading-relaxed italic mb-6">
                    "{item.review}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-5 border-t border-stone-100 flex items-center gap-3.5">
                  {/* Safe Initials Avatar */}
                  <div className="w-11 h-11 rounded-full bg-orange-100 border-2 border-orange-200 text-[#FF6B35] font-extrabold text-sm flex items-center justify-center shrink-0">
                    {initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-[#1F2937] truncate">
                        {item.name}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B57] shrink-0" />
                    </div>
                    <p className="text-xs text-stone-400 truncate">
                      {item.role} · {item.location}
                    </p>
                    <p className="text-[11px] font-semibold text-[#FF6B35] mt-0.5 truncate">
                      Favorite: {item.favoriteDish}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
