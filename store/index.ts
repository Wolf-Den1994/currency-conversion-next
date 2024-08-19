import { createWithEqualityFn } from 'zustand/traditional';
import { getSymbols, convertRates } from '@/services';

type UseRates = {
  symbols: string[];
  isLoadingSymbol: boolean;
  errorSymbol: string;
  selectedCurrencyFrom: string;
  selectedCurrencyTo: string;
  amount: string;
  convertedResult: string;
  isLoadingConvert: boolean;
  errorConvert: string;
  getSymbols: () => Promise<void>;
  selectCurrency: (currency: string, isFrom: boolean) => void;
  changeAmount: (amount: string) => void;
  convertRates: () => Promise<void>;
};

export const useRates = createWithEqualityFn<UseRates>((set) => ({
  symbols: [],
  isLoadingSymbol: false,
  errorSymbol: '',
  selectedCurrencyFrom: '',
  selectedCurrencyTo: '',
  amount: '',
  convertedResult: '',
  isLoadingConvert: true,
  errorConvert: '',
  getSymbols: async () => {
    try {
      set({ isLoadingSymbol: true, errorSymbol: '' });
      const symbols = await getSymbols();
      if (Object.keys(symbols).length) {
        set({
          isLoadingSymbol: false,
          symbols: [...new Set(Object.keys(symbols))],
        });
      } else {
        set({ isLoadingSymbol: false, errorSymbol: 'Oops, not found :(' });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ isLoadingSymbol: false, errorSymbol: error.message });
      }
    }
  },
  selectCurrency: (currency, isFrom) => {
    if (isFrom) {
      set({ selectedCurrencyFrom: currency });
    } else {
      set({ selectedCurrencyTo: currency });
    }
  },
  changeAmount: (amount) => {
    set({ amount });
  },
  convertRates: async () => {
    try {
      set({ isLoadingConvert: true, errorConvert: '' });
      const { selectedCurrencyFrom, selectedCurrencyTo, amount } =
        useRates.getState();
      const { rates, message } = await convertRates(
        selectedCurrencyFrom,
        selectedCurrencyTo,
        parseFloat(amount)
      );
      set({
        isLoadingConvert: false,
        convertedResult: message
          ? `Oops, error: ${message}`
          : `${amount} ${selectedCurrencyFrom} = ${rates[selectedCurrencyTo]} ${selectedCurrencyTo}`,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ isLoadingConvert: false, errorConvert: error.message });
      }
    }
  },
}));
