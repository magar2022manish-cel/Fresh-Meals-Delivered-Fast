import React from 'react';
import { Zap, Salad, ShieldCheck, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Our hyper-local delivery network guarantees your meal reaches your table hot and fresh within 30 minutes.',
      tag: 'Under 30 Mins',
    },
    {
      icon: Salad,
      title: 'Fresh Ingredients',
      description: 'We partner only with kitchens that prepare meals to order using farm-fresh produce and certified spices.',
      tag: '100% Farm Fresh',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      description: 'Safe and encrypted transactions with seamless support for eSewa, Khalti, Fonepay, cards, and Cash on Delivery.',
      tag: 'Bank-Grade Security',
    },
    {
      icon: Award,
      title: 'Quality You Can Trust',
      description: 'Insulated thermal bags and tamper-evident packaging ensure every meal arrives exactly as the chef intended.',
      tag: 'Spill-Proof Sealed',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-stone-50/60 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-2">
            The BiteRush Difference
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Why Food Lovers Choose Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-500">
            Engineered for speed, taste preservation, and peace of mind from first click to the last bite.
          </p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-950/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-[#FF6B35] text-[#FF6B35] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#1F2937] group-hover:text-[#FF6B35] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#2E8B57] bg-emerald-50 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
