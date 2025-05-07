import { Button } from '@/components/ui/button';
import React from 'react';

export default function Page() {
  return (
    <div className='flex flex-col mx-auto items-center justify-center h-screen bg-black text-white'>
      <h1 className='text-3xl font-bold mb-4'>My First Next.js App</h1>
      <p className='text-xl mb-4'>Welcome to my first Next.js app!</p>
      <p className='font-bold text-amber-300'>I'm excited to learn more about this framework.</p>
      <Button className='mt-4 text-black' variant='outline'>
        <a href='https://nextjs.org/docs/getting-started' target='_blank' rel='noopener noreferrer'>
          Learn Next.js
        </a>
      </Button>
  </div>
  );
}