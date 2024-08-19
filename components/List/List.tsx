'use client';

import { useEffect } from 'react';
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
          <div className='flex flex-col items-center justify-between p-6'>
            {symbols.map((symbol) => (
              <div
                key={symbol}
                className='mb-1 w-20 cursor-pointer border text-center'
              >
                {symbol}
              </div>
            ))}
          </div>
          {error && <p>Oops, error: ${error}</p>}
        </div>
      )}
    </>
  );
};
