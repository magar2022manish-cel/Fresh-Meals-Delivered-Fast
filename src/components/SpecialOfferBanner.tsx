import React, { useState } from 'react';
import { Tag, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/foodData';

interface SpecialOfferBannerProps {
  onClaimOffer: (couponCode: string) => void;
}

export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = ({
  onClaimOffer,
}) => {
  const [copied, setCopied] = useState(false);
  const promoCode = 'BITERUSH20';

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1F2937] via-[#2A3441] to-[#1F2937] text-white overflow-hidden shadow-2xl shadow-stone-900/10 border border-stone-800">
          
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-14 relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs font-bold text-orange-300">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Limited-Time Offer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Your First Bite Comes With a{' '}
                <span className="text-[#FF6B35]">Bonus!</span>
              </h2>

              <p className="text-base sm:text-lg text-stone-300 max-w-lg leading-relaxed">
                Enjoy <span className="font-bold text-white">20% off</span> your entire order plus complimentary free delivery on all local restaurant orders today.
              </p>

              {/* Promo Code Box */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <Tag className="w-4 h-4 text-[#FF6B35]" />
                  <span className="font-mono text-sm font-extrabold tracking-wider text-white">
                    {promoCode}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1 hover:text-orange-300 transition-colors text-stone-300 flex items-center gap-1 text-xs"
                    title="Copy promo code"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    handleCopy();
                    onClaimOffer(promoCode);
                  }}
                  className="px-6 py-3.5 rounded-full bg-[#FF6B35] hover:bg-[#e65a26] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#FF6B35]/30 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Claim Your Offer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Terms note */}
              <p className="text-[11px] text-stone-400">
                * Valid for new users on orders over Rs. 400. Automatically applied at checkout.
              </p>

            </div>

            {/* Right Food Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-stone-900 group">
                <img
                  src={HERO_IMAGE}
                  alt="Special combo meal with gourmet burger and golden fries"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#FF6B35] text-[10px] font-extrabold uppercase tracking-wider text-white mb-1">
                    Value Combo
                  </div>
                  <p className="text-sm font-bold text-white">Gourmet Feast Pack</p>
                  <p className="text-xs text-stone-300">Cheeseburger + Herb Fries + Drink</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
