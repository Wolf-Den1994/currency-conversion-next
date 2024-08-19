import { createWithEqualityFn } from 'zustand/traditional';
import { getSymbols, convertRates } from '@/services';

type UseRates = {
  symbols: string[];
  isLoading: boolean;
  error: string;
  selectedCurrency: string;
  getSymbols: () => Promise<void>;
  selectCurrency: (currency: string) => void;
};

export const useRates = createWithEqualityFn<UseRates>((set) => ({
  symbols: [],
  isLoading: false,
  error: '',
  selectedCurrency: '',
  getSymbols: async () => {
    try {
      set({ isLoading: true, error: '' });
      const data = await getSymbols();
      if (data.success) {
        set({ isLoading: false, symbols: Object.keys(data.symbols) });
      } else {
        set({ isLoading: false, error: data.error.info });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ isLoading: false, error: error.message });
      }
    }
  },
  selectCurrency: (currency: string) => {
    set({ selectedCurrency: currency });
  },
}));
