import Image from 'next/image';
import React from 'react';
import handIcon from '@/public/assets/images/partnership.png';
import logo1 from '@/public/assets/images/Logo1.png';
import logo2 from '@/public/assets/images/Logo2.png';
import logo3 from '@/public/assets/images/Logo3.png';
import logo4 from '@/public/assets/images/Logo4.png';
import logo5 from '@/public/assets/images/Logo5.png';
import logo6 from '@/public/assets/images/logo6.png';

const Partners = () => {
  return (
    <div className='flex flex-col py-28  max-w-7xl mx-auto'>
      <div className='flex flex-col text-center md:text-left'>
        <button className='flex border w-fit px-6 py-1 text-primary-50 font-thin rounded-md'>
          OUR PARTNERS
        </button>
        <div className='flex flex-col md:flex-row items-center py-4 gap-2 '>
          <h2 className='text-primary-50 text-[36px] md:text-[48px] lg:text-[66px] font-inter'>
            TRUSTED BY MILLIONS
          </h2>
          <div className='mt-2 md:mt-0'>
            <Image src={handIcon} alt='HandIcon' width={60} />
          </div>
        </div>
        <hr className='opacity-50' />
      </div>
      <div className='mt-16 w-full text-center'>
        <p className='text-primary-50 text-[18px] md:text-[20px] lg:text-[26px] leading-8 mx-auto lg:w-[900px]'>
          Afro Intelligence, with over 1 million users across 12 African
          Nations, seamlessly integrated into daily life, redefining AI
          potential and shaping African digital landscape.
        </p>
      </div>
      <div className='flex flex-wrap justify-center mt-12 md:mt-20 gap-4'>
        <div className='w-1/2 md:w-1/3 lg:w-1/6 flex justify-center'>
          <Image src={logo6} alt='logo6' />
        </div>
        <div className='w-1/2 md:w-1/3 lg:w-1/6 flex justify-center'>
          <Image src={logo1} alt='logo1' />
        </div>
        <div className='w-1/2 md:w-1/3 lg:w-1/6 flex justify-center'>
          <Image src={logo2} alt='logo2' />
        </div>
        <div className='w-1/2 md:w-1/3 lg:w-1/6 flex justify-center'>
          <Image src={logo3} alt='logo3' />
        </div>
        <div className='w-1/2 md:w-1/3 lg:w-1/6 flex justify-center'>
          <Image src={logo4} alt='logo4' />
        </div>
        <div className='w-1/2 md:w-1/3 lg:w-1/6 flex justify-center'>
          <Image src={logo5} alt='logo5' />
        </div>
      </div>
      <hr className='opacity-50 mt-32' />
    </div>
  );
};

export default Partners;
