import React from 'react';
import { Search, ShoppingBag, Bike, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Choose Your Food',
      description: 'Explore verified menus, compare ratings, and pick from authentic momo, burgers, pizzas, or healthy bowls.',
    },
    {
      number: '02',
      icon: ShoppingBag,
      title: 'Place Your Order',
      description: 'Customize ingredients, apply promo vouchers, and checkout securely with instant order confirmation.',
    },
    {
      number: '03',
      icon: Bike,
      title: 'Enjoy Your Delivery',
      description: 'Track your dedicated delivery rider live on the map and receive your meal piping hot at your doorstep.',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-2">
            Seamless Ordering
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-500">
            Three simple steps between your food craving and the first delicious bite.
          </p>
        </div>

        {/* Steps Grid with connecting elements */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-stone-200 -translate-y-8 -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 px-3.5 py-1 rounded-full bg-[#1F2937] text-white text-xs font-black tracking-widest shadow-md">
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white flex items-center justify-center mb-6 mt-2 transition-all duration-300 shadow-2xs group-hover:scale-105">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#FF6B35] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
