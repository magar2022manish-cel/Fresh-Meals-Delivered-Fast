import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { BestSellingDishes } from './components/BestSellingDishes';
import { SpecialOfferBanner } from './components/SpecialOfferBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Toast, ToastMessage } from './components/Toast';
import { DISHES } from './data/foodData';
import { Dish, CartItem } from './types/food';

export default function App() {
  // Navigation & Location state
  const [selectedLocation, setSelectedLocation] = useState<string>('Jhamsikhel, Lalitpur');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Favorites state
  const [favorites, setFavorites] = useState<Set<string>>(new Set(['dish-1', 'dish-3']));

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { dish: DISHES[0], quantity: 1 },
    { dish: DISHES[2], quantity: 2 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [appliedPromo, setAppliedPromo] = useState<string>('BITERUSH20');

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: ToastMessage['type'], title: string, message: string) => {
    const newToast: ToastMessage = {
      id: Date.now().toString() + Math.random().toString(),
      type,
      title,
      message,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const handleAddToCart = (dish: Dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });

    addToast('cart', 'Added to Cart', `${dish.name} is in your bag.`);
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.dish.id === dishId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCartItems((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Toggle favorite
  const handleToggleFavorite = (dishId: string) => {
    const dish = DISHES.find((d) => d.id === dishId);
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(dishId)) {
        next.delete(dishId);
        if (dish) addToast('favorite', 'Removed from Favorites', `${dish.name}`);
      } else {
        next.add(dishId);
        if (dish) addToast('favorite', 'Saved to Favorites', `${dish.name} added to your wishlist.`);
      }
      return next;
    });
  };

  // Handle Find Food from Hero
  const handleFindFood = (address: string) => {
    setSelectedLocation(address);
    const popularSection = document.getElementById('popular');
    if (popularSection) {
      popularSection.scrollIntoView({ behavior: 'smooth' });
    }
    addToast('info', 'Location Updated', `Browsing restaurants delivering to ${address}`);
  };

  const handleExploreMenu = () => {
    const popularSection = document.getElementById('explore');
    if (popularSection) {
      popularSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHowItWorks = () => {
    const section = document.getElementById('how-it-works');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClaimOffer = (couponCode: string) => {
    setAppliedPromo(couponCode);
    setIsCartOpen(true);
    addToast('promo', '20% Coupon Applied', `Coupon ${couponCode} is active in your cart!`);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartItemIds = new Set(cartItems.map((item) => item.dish.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F3] text-[#1F2937] font-sans selection:bg-[#FF6B35]/20 selection:text-[#FF6B35]">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onFindFood={handleFindFood}
          onExploreMenu={handleExploreMenu}
          onHowItWorks={handleHowItWorks}
        />

        {/* Popular Categories */}
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            const popularSection = document.getElementById('popular');
            if (popularSection) {
              popularSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* Best-Selling Dishes */}
        <BestSellingDishes
          dishes={DISHES}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* Special Offer Banner */}
        <SpecialOfferBanner onClaimOffer={handleClaimOffer} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* How It Works */}
        <HowItWorks />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Newsletter / Final CTA */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        appliedPromo={appliedPromo}
        onApplyPromo={(code) => {
          setAppliedPromo(code);
          addToast('promo', 'Discount Applied', '20% off will be deducted from your order.');
        }}
        deliveryLocation={selectedLocation}
      />

      {/* Floating Toasts */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
