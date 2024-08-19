'use client';

import { useRates } from '@/store';

type ItemProps = {
  symbol: string;
  isFrom?: boolean;
};

export const Item = ({ symbol, isFrom = false }: ItemProps) => {
  const { selectedCurrencyFrom, selectedCurrencyTo, selectCurrency } =
    useRates();

  const isActive = isFrom
    ? selectedCurrencyFrom === symbol
    : selectedCurrencyTo === symbol;

  return (
    <button
      key={symbol}
      className={`mb-1 w-20 cursor-pointer rounded-md border text-center ${isActive ? 'bg-gray-400' : ''}`}
      onClick={() => selectCurrency(symbol, isFrom)}
    >
      {symbol}
    </button>
  );
};
