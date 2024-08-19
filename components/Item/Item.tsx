'use client';

import { useRates } from '@/store';

type ItemProps = {
  symbol: string;
};

export const Item = ({ symbol }: ItemProps) => {
  const { selectedCurrency, selectCurrency } = useRates();

  return (
    <button
      key={symbol}
      className={`mb-1 w-20 cursor-pointer border text-center ${selectedCurrency === symbol ? 'border-blue-500' : ''}`}
      onClick={() => selectCurrency(symbol)}
    >
      {symbol}
    </button>
  );
};
