import React from 'react';
import { Dish } from '../types/food';
import { Star, Clock, Heart, Plus, Check } from 'lucide-react';

interface BestSellingDishesProps {
  dishes: Dish[];
  selectedCategory: string;
  searchQuery: string;
  favorites: Set<string>;
  onToggleFavorite: (dishId: string) => void;
  onAddToCart: (dish: Dish) => void;
  cartItemIds: Set<string>;
}

export const BestSellingDishes: React.FC<BestSellingDishesProps> = ({
  dishes,
  selectedCategory,
  searchQuery,
  favorites,
  onToggleFavorite,
  onAddToCart,
  cartItemIds,
}) => {
  // Filter logic
  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory =
      selectedCategory === 'all' || dish.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="popular" className="py-12 sm:py-16 bg-white/60 border-y border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-2">
              Customer Favorites
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2937] tracking-tight">
              Best-Selling Dishes
            </h2>
          </div>
          <div className="text-sm text-stone-500 font-medium">
            Showing {filteredDishes.length} fresh culinary picks
          </div>
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-stone-200/80 p-8 max-w-md mx-auto">
            <p className="text-base font-bold text-[#1F2937] mb-1">No dishes found</p>
            <p className="text-xs text-stone-500">
              Try adjusting your category or search keywords to find mouth-watering meals.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDishes.map((dish) => {
              const isFav = favorites.has(dish.id);
              const isInCart = cartItemIds.has(dish.id);

              return (
                <div
                  key={dish.id}
                  className="group bg-white rounded-3xl border border-stone-200/80 hover:border-orange-200/90 shadow-sm hover:shadow-xl hover:shadow-orange-950/5 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Food Image Container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Badge if available */}
                    {dish.badge && (
                      <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#FF6B35] shadow-xs">
                        {dish.badge}
                      </div>
                    )}

                    {/* Favorite Heart Button */}
                    <button
                      type="button"
                      onClick={() => onToggleFavorite(dish.id)}
                      className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isFav
                          ? 'bg-rose-50 text-rose-500 shadow-sm'
                          : 'bg-white/90 text-stone-600 hover:text-rose-500 hover:bg-white shadow-2xs'
                      }`}
                      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Heart
                        className={`w-4.5 h-4.5 transition-transform ${
                          isFav ? 'fill-rose-500 scale-110' : ''
                        }`}
                      />
                    </button>

                    {/* Delivery & Prep time badge */}
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium">
                      <Clock className="w-3.5 h-3.5 text-orange-300" />
                      <span>{dish.deliveryTime}</span>
                    </div>

                    {/* Calories metadata */}
                    <div className="absolute bottom-3 right-3.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium">
                      <span>{dish.calories}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating and Reviews */}
                      <div className="flex items-center gap-1.5 text-xs mb-2">
                        <div className="flex items-center gap-1 font-bold text-[#1F2937]">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{dish.rating.toFixed(1)}</span>
                        </div>
                        <span className="text-stone-300">·</span>
                        <span className="text-stone-400 font-medium">
                          ({dish.reviewsCount} reviews)
                        </span>
                        {dish.isSpicy && (
                          <>
                            <span className="text-stone-300">·</span>
                            <span className="text-rose-600 font-semibold text-[11px]">
                              🌶️ Mild Spice
                            </span>
                          </>
                        )}
                      </div>

                      {/* Dish Name */}
                      <h3 className="text-lg font-bold text-[#1F2937] group-hover:text-[#FF6B35] transition-colors leading-snug">
                        {dish.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs text-stone-500 leading-relaxed line-clamp-2">
                        {dish.description}
                      </p>
                    </div>

                    {/* Price and Add to Cart Action */}
                    <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                          Price
                        </span>
                        <span className="text-xl font-extrabold text-[#1F2937] tabular-nums tracking-tight">
                          Rs. {dish.price}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onAddToCart(dish)}
                        className={`px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
                          isInCart
                            ? 'bg-[#2E8B57] hover:bg-[#267347] text-white shadow-md shadow-emerald-900/15'
                            : 'bg-[#FF6B35] hover:bg-[#e65a26] text-white shadow-md shadow-[#FF6B35]/25'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
