'use client';

import { useEffect } from 'react';
import { Item } from '@/components/Item';
import { Loader } from '@/components/Loader';
import { useRates } from '@/store';

export const List = () => {
  const { symbols, isLoading, error, getSymbols } = useRates();

  useEffect(() => {
    getSymbols().catch(console.error);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className='flex max-h-60 flex-col items-center justify-between overflow-y-scroll px-6 py-1'>
            {symbols.map((symbol) => (
              <Item key={symbol} symbol={symbol} />
            ))}
          </div>
          {error && <p>Oops, error: ${error}</p>}
        </div>
      )}
    </>
  );
};
