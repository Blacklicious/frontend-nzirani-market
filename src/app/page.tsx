'use client';
import Image from 'next/image'

import { useEffect } from 'react';
import StoresPage from './stores/page';

export default function Home() {
  useEffect(() => {
    const setViewport = () => {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(meta);
    };

    setViewport();
  }, []);

  return (
    <main className='mt-1 rounded-2xl min-h-screen '> 
      < StoresPage />
    </main>
  )
}
