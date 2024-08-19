import { SymbolsRateResponse, ConvertRateResponse } from '@/types';

export const getSymbols = async (): Promise<SymbolsRateResponse> => {
  const response = await fetch('https://api.frankfurter.app/currencies', {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
};

export async function convertRates(
  from: string,
  to: string,
  amount: number
): Promise<ConvertRateResponse> {
  const response = await fetch(
    `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}
