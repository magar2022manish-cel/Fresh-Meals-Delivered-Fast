import React from 'react';
import { UtensilsCrossed, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2937] text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info (2 columns wide) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#FF6B35] flex items-center justify-center text-white shadow-md shadow-[#FF6B35]/25">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Bite<span className="text-[#FF6B35]">Rush</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              BiteRush is Kathmandu Valley's fastest gourmet food delivery service, bringing fresh restaurant specialties from top local chefs right to your door with heat-seal technology.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#FF6B35] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#FF6B35] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#FF6B35] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#social"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#FF6B35] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('explore')}
                  className="hover:text-white transition-colors"
                >
                  Explore Food
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('popular')}
                  className="hover:text-white transition-colors"
                >
                  Popular Dishes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors"
                >
                  About BiteRush
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#help" className="hover:text-white transition-colors">
                  Help Center & FAQs
                </a>
              </li>
              <li>
                <a href="#orders" className="hover:text-white transition-colors">
                  Live Order Tracker
                </a>
              </li>
              <li>
                <a href="#refund" className="hover:text-white transition-colors">
                  Refund & Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#partner" className="hover:text-white transition-colors">
                  Partner Restaurant Sign-Up
                </a>
              </li>
              <li>
                <a href="#rider" className="hover:text-white transition-colors">
                  Become a Delivery Rider
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Contact & Hub
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                <span>Jhamsikhel Road, Lalitpur, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6B35] shrink-0" />
                <span>+977 1 5523456 / 9801234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" />
                <span>orders@biterush.com</span>
              </div>
              <div className="pt-2 text-[11px] text-stone-500">
                Operating Daily: 8:00 AM – Midnight
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} BiteRush Inc. Made with</span>
            <Heart className="w-3.5 h-3.5 fill-[#FF6B35] text-[#FF6B35] inline" />
            <span>for genuine food enthusiasts.</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-stone-500">Accepted:</span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 text-[10px] font-bold">
              eSewa
            </span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 text-[10px] font-bold">
              Khalti
            </span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 text-[10px] font-bold">
              Fonepay
            </span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 text-[10px] font-bold">
              Cash on Delivery
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
