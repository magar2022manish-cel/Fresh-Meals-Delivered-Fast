import React from 'react';
import { CATEGORIES } from '../data/foodData';
import { Sparkles } from 'lucide-react';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section id="explore" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Taste Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2937] tracking-tight">
              Popular Categories
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-sm">
            Explore curated flavors from Himalayan spices to authentic Italian stone-baked crusts.
          </p>
        </div>

        {/* Categories Grid / Horizontal Scroll */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative text-left p-3.5 rounded-2xl transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#FF6B35] shadow-lg shadow-orange-950/8 scale-102 ring-2 ring-[#FF6B35]/20'
                    : 'bg-white border-stone-200/80 hover:border-orange-200 hover:shadow-md hover:scale-101'
                }`}
              >
                {/* Thumbnail Image Container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-stone-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#FF6B35] ring-2 ring-white" />
                  )}
                </div>

                {/* Details */}
                <div className="space-y-0.5">
                  <h3
                    className={`text-sm font-bold truncate transition-colors ${
                      isSelected ? 'text-[#FF6B35]' : 'text-[#1F2937] group-hover:text-[#FF6B35]'
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-[11px] font-medium text-stone-400">
                    {cat.itemCount} varieties
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
