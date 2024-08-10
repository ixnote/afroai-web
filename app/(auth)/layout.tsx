import Image from 'next/image';
import React from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-black'>
      <div className='flex w-full h-screen'>
        <div className='flex relative w-1/2 h-full'>
          <Image src='/assets/images/authBg.svg' alt='' fill />
        </div>
        <div className='flex w-1/2'>{children}</div>
      </div>
    </div>
  );
}
