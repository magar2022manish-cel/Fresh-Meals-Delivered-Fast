import React, { useEffect } from 'react';
import { CheckCircle2, Heart, Sparkles, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'cart' | 'favorite' | 'promo' | 'info';
  title: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{
  toast: ToastMessage;
  onDismiss: (id: string) => void;
}> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const getIcon = () => {
    switch (toast.type) {
      case 'cart':
        return <CheckCircle2 className="w-5 h-5 text-[#2E8B57]" />;
      case 'favorite':
        return <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />;
      case 'promo':
        return <Sparkles className="w-5 h-5 text-[#FF6B35]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />;
    }
  };

  return (
    <div className="pointer-events-auto bg-white rounded-2xl p-3.5 shadow-xl border border-stone-200/90 flex items-start gap-3 animate-in slide-in-from-bottom-3 duration-200">
      <div className="mt-0.5 shrink-0">{getIcon()}</div>
      <div className="flex-1 min-w-0 pr-1">
        <h5 className="text-xs font-bold text-[#1F2937]">{toast.title}</h5>
        <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
          {toast.message}
        </p>
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="p-1 text-stone-400 hover:text-stone-600 rounded"
        title="Dismiss"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
