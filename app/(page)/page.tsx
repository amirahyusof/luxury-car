// This is a server component
import React from 'react';
import Homepage from './homepage';

export default function Page() {
  return (
    <div className='flex flex-col mx-auto items-center justify-center bg-black text-white'>
      <Homepage />
  </div>
  );
}