'use client';

import { useRates } from '@/store';

export const Result = () => {
  const { convertedResult } = useRates();

  return (
    <div className='flex flex-col items-center justify-between gap-4'>
      {convertedResult ? (
        <div className='text-xl'>{convertedResult}</div>
      ) : (
        <div className='text-xl'>
          I&apos;m waiting for you to select and fill in everything
        </div>
      )}
    </div>
  );
};
