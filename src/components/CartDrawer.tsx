import React, { useState } from 'react';
import { CartItem } from '../types/food';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Sparkles, Tag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
  appliedPromo: string;
  onApplyPromo: (code: string) => void;
  deliveryLocation: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  appliedPromo,
  onApplyPromo,
  deliveryLocation,
}) => {
  const [promoInput, setPromoInput] = useState(appliedPromo || '');
  const [promoError, setPromoError] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 500 || subtotal === 0 ? 0 : 60;
  const isDiscountActive = appliedPromo === 'BITERUSH20';
  const discountAmount = isDiscountActive ? Math.round(subtotal * 0.2) : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'BITERUSH20') {
      onApplyPromo('BITERUSH20');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon. Try "BITERUSH20" for 20% off.');
    }
  };

  const handlePlaceOrder = () => {
    setIsOrdered(true);
  };

  const resetOrderSimulation = () => {
    setIsOrdered(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF6B35] flex items-center justify-center font-bold">
                <ShoppingBag className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1F2937]">Your Food Cart</h3>
                <p className="text-[11px] text-stone-400">
                  Deliver to: <span className="font-semibold text-stone-600">{deliveryLocation}</span>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-100 transition-colors"
              title="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {isOrdered ? (
              /* Success Checkout Confirmation Simulation */
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2E8B57] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-extrabold text-[#1F2937]">
                  Order Successfully Placed!
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed max-w-xs mx-auto">
                  Your kitchen has accepted the order. Fresh meals are currently being prepared and packed in thermal sealed boxes.
                </p>

                <div className="bg-stone-50 rounded-2xl p-4 text-left border border-stone-200/80 space-y-2 mt-4">
                  <div className="flex justify-between text-xs text-stone-500">
                    <span>Estimated Arrival:</span>
                    <span className="font-bold text-[#1F2937]">25–35 Mins</span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-500">
                    <span>Delivery Location:</span>
                    <span className="font-bold text-[#1F2937]">{deliveryLocation}</span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-500">
                    <span>Total Paid:</span>
                    <span className="font-bold text-[#FF6B35]">Rs. {grandTotal}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetOrderSimulation}
                  className="w-full mt-4 py-3 rounded-full bg-[#FF6B35] hover:bg-[#e65a26] text-white text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  Order More Food
                </button>
              </div>
            ) : items.length === 0 ? (
              /* Empty Cart State */
              <div className="py-20 text-center space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-orange-50 text-[#FF6B35] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-[#1F2937]">
                  Your cart is empty
                </h4>
                <p className="text-xs text-stone-400 max-w-xs mx-auto">
                  Looks like you haven't added any appetizing meals yet. Explore our best-selling dishes!
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#e65a26] shadow-sm"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              /* Item List */
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.dish.id}
                    className="p-3 bg-white rounded-2xl border border-stone-200/80 shadow-2xs flex gap-3.5 items-center"
                  >
                    <img
                      src={item.dish.image}
                      alt={item.dish.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 bg-stone-100"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold text-[#1F2937] truncate">
                        {item.dish.name}
                      </h5>
                      <p className="text-[11px] font-semibold text-[#FF6B35] tabular-nums mt-0.5">
                        Rs. {item.dish.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center bg-stone-100 rounded-lg p-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.dish.id, -1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold tabular-nums text-[#1F2937]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.dish.id, 1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.dish.id)}
                          className="p-1 text-stone-400 hover:text-rose-500 rounded transition-colors ml-auto"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Input */}
                <div className="pt-2">
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        placeholder="Coupon (e.g. BITERUSH20)"
                        className="w-full pl-8 pr-3 py-2 text-xs font-mono font-semibold bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-[#FF6B35]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-stone-800 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors shrink-0"
                    >
                      Apply
                    </button>
                  </form>
                  {isDiscountActive && (
                    <p className="text-[11px] font-semibold text-[#2E8B57] mt-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      20% discount coupon applied successfully!
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] font-semibold text-rose-500 mt-1">
                      {promoError}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Bill & Action */}
          {!isOrdered && items.length > 0 && (
            <div className="p-6 border-t border-stone-100 bg-stone-50/70 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1F2937] tabular-nums">
                    Rs. {subtotal}
                  </span>
                </div>

                {isDiscountActive && (
                  <div className="flex justify-between text-[#2E8B57] font-semibold">
                    <span>Promo Discount (20%)</span>
                    <span className="tabular-nums">- Rs. {discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between text-stone-500">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-[#1F2937] tabular-nums">
                    {deliveryFee === 0 ? (
                      <span className="text-[#2E8B57] font-bold">FREE</span>
                    ) : (
                      `Rs. ${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="pt-2 border-t border-stone-200/80 flex justify-between text-sm font-extrabold text-[#1F2937]">
                  <span>Total Amount</span>
                  <span className="text-base text-[#FF6B35] tabular-nums">
                    Rs. {grandTotal}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full py-3.5 rounded-2xl bg-[#FF6B35] hover:bg-[#e65a26] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B35]/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>Place Order (Cash / eSewa)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
