'use client';

import { useEffect } from 'react';
import { Item } from '@/components/Item';
import { Loader } from '@/components/Loader';
import { useRates } from '@/store';

export const List = () => {
  const { symbols, isLoadingSymbol, errorSymbol, getSymbols } = useRates();

  useEffect(() => {
    getSymbols().catch(console.error);
  }, []);

  return (
    <>
      {isLoadingSymbol ? (
        <Loader />
      ) : (
        <div>
          {errorSymbol ? (
            <p>Oops, error: ${errorSymbol}</p>
          ) : (
            <div className='flex flex-row gap-7'>
              <div className='flex flex-col items-center justify-center gap-4'>
                <div>From</div>
                <div className='flex max-h-60 min-h-60 min-w-28 flex-col items-center justify-between overflow-y-scroll px-6 py-1'>
                  {symbols.map((symbol) => (
                    <Item key={symbol} symbol={symbol} isFrom />
                  ))}
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-4'>
                <div>To</div>
                <div className='flex max-h-60 min-h-60 min-w-28 flex-col items-center justify-between overflow-y-scroll px-6 py-1'>
                  {symbols.map((symbol) => (
                    <Item key={symbol} symbol={symbol} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
