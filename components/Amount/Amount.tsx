'use client';

import { type ChangeEvent, useCallback } from 'react';
import { useRates } from '@/store';

export const Amount = () => {
  const { amount, changeAmount } = useRates();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => changeAmount(e.target.value),
    []
  );

  return (
    <div className='flex flex-col items-center justify-between gap-4'>
      <input
        type='number'
        placeholder='Write amount'
        value={amount}
        onChange={handleChange}
        className='p-2/2 block h-8 w-24 rounded-lg border border-white bg-gray-400 p-2 text-sm text-white placeholder-white focus:border-white focus:ring-white sm:w-44'
      />
      <button
        className='mb-1 h-8 w-full cursor-pointer rounded-md border text-center text-sm'
        onClick={() => console.log(1)}
      >
        Convert
      </button>
    </div>
  );
};
