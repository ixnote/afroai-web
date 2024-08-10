'use client';
import Benefits from '@/components/homeComponents/Benefits';
import Hero from '@/components/homeComponents/Hero';
import Partners from '@/components/homeComponents/Partners';
import Products from '@/components/homeComponents/Products';
import Testimonials from '@/components/homeComponents/Testimonials';
import Image from 'next/image';
export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Partners />
      <Products />
      <Benefits />
      {/* <Testimonials /> */}
    </main>
  );
}
