import Image from 'next/image'
import React from 'react'
import handIcon from "@/public/assets/images/partnership.png"
import logo1 from "@/public/assets/images/Logo1.png"
import logo2 from "@/public/assets/images/Logo2.png"
import logo3 from "@/public/assets/images/Logo3.png"
import logo4 from "@/public/assets/images/Logo4.png"
import logo5 from "@/public/assets/images/Logo5.png"

const Partners = () => {
  return (
    <div className='min-h-screen mt-10 px-4 md:px-8 lg:px-16'>
      <div className='text-center md:text-left'>
        <button className='border px-6 py-1 text-primary-50 font-serif rounded-md'>
          OUR PARTNERS
        </button>
        <div className='flex flex-col md:flex-row items-center py-4 gap-2'>
          <h2 className='text-primary-50 text-3xl font-inter'>
            TRUSTED BY MILLIONS
          </h2>
          <div className='mt-2 md:mt-0'>
            <Image src={handIcon} alt='HandIcon' width={30} />
          </div>
        </div>
        <hr className='border-primary-50' />
      </div>
      <div className='mt-16 w-full md:w-3/6 mx-auto text-center'>
        <p className='text-primary-50'>
          Afro Intelligence, with over 1 million users across 12 African Nations,
          seamlessly integrated into daily life, redefining AI potential and shaping
          <span className='block md:inline md:ml-2'>
            African digital landscape.
          </span>
        </p>
      </div>
      <div className='flex flex-wrap justify-around mx-8 mt-20 md:mt-44 gap-4'>
        <div className='w-1/2 md:w-auto flex justify-center'>
          <Image src={logo1} alt='logo1' />
        </div>
        <div className='w-1/2 md:w-auto flex justify-center'>
          <Image src={logo2} alt='logo2' />
        </div>
        <div className='w-1/2 md:w-auto flex justify-center'>
          <Image src={logo3} alt='logo3' />
        </div>
        <div className='w-1/2 md:w-auto flex justify-center'>
          <Image src={logo4} alt='logo4' />
        </div>
        <div className='w-1/2 md:w-auto flex justify-center'>
          <Image src={logo5} alt='logo5' />
        </div>
      </div>
    </div>
  )
}

export default Partners
