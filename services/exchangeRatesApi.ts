import { SymbolsRateResponse, ConvertRateResponse } from '@/types'

export const getSymbols = async (): Promise<SymbolsRateResponse> => {
  const response = await fetch(
    `https://api.exchangeratesapi.io/v1/symbols?access_key=${process.env.API_KEY}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Unable to fetch!');
  }

  return response.json();
};

export async function convertRates(from: string, to: string, amount: number): Promise<ConvertRateResponse> {
  const response = await fetch(`https://api.exchangeratesapi.io/v1/convert?access_key=${process.env.API_KEY}&from=${from}&to=${to}&amount=${amount}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('Unable to fetch!');
  }

  return response.json();
}