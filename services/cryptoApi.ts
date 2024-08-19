import { SymbolsRateResponse, ConvertRateResponse } from '@/types';

export const getSymbols = async (): Promise<SymbolsRateResponse> => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/simple/supported_vs_currencies',
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
};

export async function convertRates(
  from: string,
  to: string
): Promise<ConvertRateResponse> {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}
