import type { Session } from '@/lib/auth-types';
import { getAllPricePlans } from '@/lib/price-plan';
import type { PricePlan, Subscription } from '@/payment/types';
import { create } from 'zustand';

export interface PaymentState {
  currentPlan: PricePlan | null;
  subscription: Subscription | null;
  isLoading: boolean;
  error: string | null;
  fetchPayment: (user: Session['user'] | null | undefined) => Promise<void>;
  resetState: () => void;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  currentPlan: getAllPricePlans().find((plan) => plan.isFree) || null,
  subscription: null,
  isLoading: false,
  error: null,
  fetchPayment: async () => {
    set({ isLoading: false, error: null });
  },
  resetState: () => {
    set({
      currentPlan: getAllPricePlans().find((plan) => plan.isFree) || null,
      subscription: null,
      isLoading: false,
      error: null,
    });
  },
}));
