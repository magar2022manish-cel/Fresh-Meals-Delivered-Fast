import React, { useState } from 'react';
import { MapPin, Search, ArrowRight, Clock, Star, Flame, ShieldCheck, Heart } from 'lucide-react';
import { HERO_IMAGE } from '../data/foodData';

interface HeroProps {
  onFindFood: (address: string) => void;
  onExploreMenu: () => void;
  onHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onFindFood,
  onExploreMenu,
  onHowItWorks,
}) => {
  const [addressInput, setAddressInput] = useState('');
  const [addressHelper, setAddressHelper] = useState('');

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (addressInput.trim()) {
      onFindFood(addressInput);
      setAddressHelper(`Delivering to ${addressInput}`);
    } else {
      onFindFood('Jhamsikhel, Lalitpur');
      setAddressInput('Jhamsikhel, Lalitpur');
      setAddressHelper('Defaulting to Jhamsikhel, Lalitpur');
    }
  };

  const setPreset = (preset: string) => {
    setAddressInput(preset);
    onFindFood(preset);
    setAddressHelper(`Delivering to ${preset}`);
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-10%] w-[380px] h-[380px] bg-amber-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, CTAs, Search & Trust */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Small Promotional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-bold text-[#FF6B35]">
              <Flame className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Fresh Meals, Delivered Fast</span>
            </div>

            {/* Large Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-[1.12]">
              Good Food.{' '}
              <span className="text-[#FF6B35] relative inline-block">
                Great Mood.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FF6B35]/20 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>{' '}
              Delivered.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
              Discover your favorite meals from top-rated local restaurants and get them delivered hot, fresh, and spill-free straight to your doorstep.
            </p>

            {/* Delivery-address Search Box */}
            <div className="max-w-xl">
              <form
                onSubmit={handleAddressSubmit}
                className="p-1.5 sm:p-2 bg-white rounded-2xl sm:rounded-full border border-stone-200/90 shadow-lg shadow-orange-950/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
              >
                <div className="flex items-center gap-3 px-3 py-2 sm:py-1 flex-1">
                  <MapPin className="w-5 h-5 text-[#FF6B35] shrink-0" />
                  <input
                    type="text"
                    value={addressInput}
                    onChange={(e) => setAddressInput(e.target.value)}
                    placeholder="Enter your delivery location..."
                    className="w-full text-sm font-medium text-[#1F2937] placeholder:text-stone-400 bg-transparent focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl sm:rounded-full bg-[#FF6B35] hover:bg-[#e65a26] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-[#FF6B35]/30 transition-transform active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Find Food</span>
                </button>
              </form>

              {/* Quick suggestions tags */}
              <div className="mt-2.5 flex items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-stone-400">Popular:</span>
                <button
                  type="button"
                  onClick={() => setPreset('Jhamsikhel')}
                  className="hover:text-[#FF6B35] underline decoration-stone-300 transition-colors"
                >
                  Jhamsikhel
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => setPreset('Thamel')}
                  className="hover:text-[#FF6B35] underline decoration-stone-300 transition-colors"
                >
                  Thamel
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => setPreset('Durbar Marg')}
                  className="hover:text-[#FF6B35] underline decoration-stone-300 transition-colors"
                >
                  Durbar Marg
                </button>
              </div>

              {addressHelper && (
                <p className="mt-1.5 text-xs font-semibold text-[#2E8B57] animate-in fade-in">
                  ✓ {addressHelper}
                </p>
              )}
            </div>

            {/* Action Buttons: Explore Menu & How It Works */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreMenu}
                className="px-7 py-3.5 rounded-full bg-[#FF6B35] hover:bg-[#e65a26] text-white text-sm font-bold flex items-center gap-2.5 shadow-lg shadow-[#FF6B35]/25 transition-all active:scale-95 group cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={onHowItWorks}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-stone-200/90 text-[#1F2937] text-sm font-bold transition-colors cursor-pointer"
              >
                How It Works
              </button>
            </div>

            {/* Trust Indicators Strip */}
            <div className="pt-4 border-t border-stone-200/60 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="flex items-center gap-1 text-base sm:text-lg font-extrabold text-[#1F2937]">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5</span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5 font-medium">18k+ verified reviews</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-base sm:text-lg font-extrabold text-[#1F2937]">
                  <Clock className="w-4 h-4 text-[#FF6B35]" />
                  <span>25-35 min</span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5 font-medium">Average delivery time</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-base sm:text-lg font-extrabold text-[#1F2937]">
                  <ShieldCheck className="w-4 h-4 text-[#2E8B57]" />
                  <span>50k+</span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5 font-medium">Happy foodies served</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase with Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Background Decorative Rings */}
            <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full border border-orange-200/60 -z-10" />
            <div className="absolute w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full border border-orange-100/40 -z-10" />

            {/* Main Visual Image Card */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] rounded-3xl overflow-hidden shadow-2xl shadow-orange-950/15 border-4 border-white bg-white group">
              <img
                src={HERO_IMAGE}
                alt="Gourmet double cheeseburger with crispy french fries and iced drink"
                className="w-full aspect-square object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-[11px] font-bold uppercase tracking-widest text-orange-200">
                  Signature Dish
                </span>
                <p className="text-sm font-bold">Double Gourmet Brioche Burger</p>
              </div>
            </div>

            {/* Floating Card 1: Delivery Time (Top-Left) */}
            <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B35] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wide">
                  Fast Express
                </p>
                <p className="text-sm font-extrabold text-[#1F2937]">25–35 min</p>
              </div>
            </div>

            {/* Floating Card 2: Rating & Customer Proof (Bottom-Right) */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-400">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2E8B57] flex items-center justify-center">
                <Heart className="w-5 h-5 fill-[#2E8B57]" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-xs font-extrabold text-[#1F2937] ml-1">4.9</span>
                </div>
                <p className="text-[11px] font-medium text-stone-500">
                  4.8k food lovers rated
                </p>
              </div>
            </div>

            {/* Floating Promo Tag (Top-Right) */}
            <div className="hidden sm:flex absolute -top-3 right-4 bg-[#FF6B35] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-[#FF6B35]/30 items-center gap-1.5">
              <span>🔥 20% OFF FIRST ORDER</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
