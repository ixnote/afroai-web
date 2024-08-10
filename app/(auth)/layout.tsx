import Image from 'next/image';
import React from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-[#18181A]'>
      <div className='flex w-full h-screen'>
        <div className=' hidden sm:flex relative sm:w-1/2 h-full'>
          <Image src='/assets/images/authBg.svg' alt='' fill />
        </div>
        <div className='flex sm:w-1/2 w-full'>{children}</div>
      </div>
    </div>
  );
}
