import React, { useState, useEffect } from 'react';
import { MapPin, Search, ShoppingBag, Menu, X, ChevronDown, UtensilsCrossed } from 'lucide-react';
import { DELIVERY_LOCATIONS } from '../data/foodData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  selectedLocation,
  onSelectLocation,
  searchQuery,
  onSearchChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FFF9F3]/95 backdrop-blur-md shadow-sm border-b border-orange-100/60 py-3'
          : 'bg-[#FFF9F3] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-6 shrink-0">
            <a
              href="#hero"
              className="group flex items-center gap-2.5 focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
            >
              <div className="w-10 h-10 rounded-2xl bg-[#FF6B35] flex items-center justify-center text-white shadow-md shadow-[#FF6B35]/25 group-hover:scale-105 transition-transform">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-[#1F2937]">
                  Bite<span className="text-[#FF6B35]">Rush</span>
                </span>
              </div>
            </a>

            {/* Location Selector (Desktop) */}
            <div className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200/80 text-xs font-semibold text-[#1F2937] hover:border-[#FF6B35]/50 transition-colors shadow-2xs"
                title="Select delivery location"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                <span className="max-w-[140px] truncate">{selectedLocation}</span>
                <ChevronDown className="w-3 h-3 text-stone-400 shrink-0" />
              </button>

              {isLocationDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLocationDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-stone-100 py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Deliver To
                    </div>
                    {DELIVERY_LOCATIONS.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          onSelectLocation(loc);
                          setIsLocationDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between ${
                          selectedLocation === loc
                            ? 'bg-orange-50 font-bold text-[#FF6B35]'
                            : 'text-[#1F2937] hover:bg-stone-50'
                        }`}
                      >
                        <span className="truncate">{loc}</span>
                        {selectedLocation === loc && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-stone-600">
            <button
              onClick={() => handleNavClick('hero')}
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('explore')}
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap cursor-pointer"
            >
              Explore Food
            </button>
            <button
              onClick={() => handleNavClick('popular')}
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap cursor-pointer"
            >
              Popular
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap cursor-pointer"
            >
              About Us
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Input / Toggle */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-white border border-[#FF6B35]/40 rounded-full pl-3 pr-2 py-1 shadow-xs transition-all w-48 sm:w-60">
                  <Search className="w-3.5 h-3.5 text-[#FF6B35] shrink-0 mr-1.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search dishes..."
                    autoFocus
                    className="w-full text-xs text-[#1F2937] bg-transparent focus:outline-none placeholder:text-stone-400"
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      onSearchChange('');
                    }}
                    className="p-1 text-stone-400 hover:text-stone-600 rounded-full"
                    title="Close search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="w-9 h-9 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-stone-600 hover:text-[#FF6B35] hover:border-[#FF6B35]/40 transition-colors shadow-2xs"
                  title="Search dishes"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Cart Icon with Counter */}
            <button
              type="button"
              onClick={onOpenCart}
              className="relative w-10 h-10 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#1F2937] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors shadow-2xs group"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4.5 h-4.5 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-75">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Order Now Button */}
            <button
              type="button"
              onClick={() => handleNavClick('popular')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#e65a26] active:scale-95 transition-all shadow-md shadow-[#FF6B35]/25 whitespace-nowrap"
            >
              Order Now
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-stone-700 hover:text-[#FF6B35]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white rounded-3xl border border-stone-200/70 shadow-xl space-y-4 animate-in slide-in-from-top-3 duration-200">
            {/* Mobile Location Picker */}
            <div className="p-3 bg-stone-50 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-500 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" />
                Delivery Location
              </div>
              <select
                value={selectedLocation}
                onChange={(e) => onSelectLocation(e.target.value)}
                className="w-full text-xs font-semibold text-[#1F2937] bg-white border border-stone-200 rounded-xl p-2 focus:outline-none"
              >
                {DELIVERY_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <nav className="flex flex-col space-y-2 text-sm font-bold text-[#1F2937]">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-left px-3 py-2 rounded-xl hover:bg-orange-50 hover:text-[#FF6B35] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('explore')}
                className="text-left px-3 py-2 rounded-xl hover:bg-orange-50 hover:text-[#FF6B35] transition-colors"
              >
                Explore Food
              </button>
              <button
                onClick={() => handleNavClick('popular')}
                className="text-left px-3 py-2 rounded-xl hover:bg-orange-50 hover:text-[#FF6B35] transition-colors"
              >
                Popular Dishes
              </button>
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="text-left px-3 py-2 rounded-xl hover:bg-orange-50 hover:text-[#FF6B35] transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left px-3 py-2 rounded-xl hover:bg-orange-50 hover:text-[#FF6B35] transition-colors"
              >
                About Us
              </button>
            </nav>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleNavClick('popular');
              }}
              className="w-full py-3 rounded-2xl bg-[#FF6B35] text-white text-sm font-bold shadow-md shadow-[#FF6B35]/25"
            >
              Order Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
