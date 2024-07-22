import React, { useState } from 'react';
import logo from '@/public/assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subnav, setSubNavOpen] = useState(false);

  const toggleSubNav = () => {
    return setSubNavOpen(!subnav);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const path = usePathname();

  const obj: { [key: string]: string } = {
    assistant: 'bg-[#1C352D]',
    gene: 'bg-[#1A2421]',
  };

  return (
    <div
      className={`${
        obj[path.split('/')[1]] ?? 'bg-inherit'
      } py-3   fixed font-inter left-0 right-0 z-20`}
    >
      {/* Desktop Nav */}
      <div className='hidden lg:flex items-center  list-none  max-w-7xl mx-auto'>
        <div className=''>
          <Link href='/'>
            <Image src={logo} alt='logo' />
          </Link>
        </div>
        <div
          className={`flex grow ml-16 gap-4 items-center  text-primary-50 w-2/5`}
        >
          <li className='hover:bg-primary-100 cursor-pointer hover:text-black  px-8 py-2 hover:rounded-md'>
            <Link href='/about'>ABOUT</Link>
          </li>

          <li className='relative items-center hover:bg-primary-100 cursor-pointer hover:text-black   px-8 py-2 hover:rounded-md'>
            <div onClick={toggleSubNav} className='flex'>
              <button className='hover:bg-inherit cursor-pointer   px-8 py-1 hover:rounded-md'>
                PRODUCTS
              </button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='#FFFFFF'
                viewBox='0 0 256 256'
                className='opacity-90 mt-2'
              >
                <path d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'></path>
              </svg>
              <div>
                <ul
                  className={`absolute ${
                    subnav ? 'block' : 'hidden'
                  } p-3 mt-6  w-[200px]`}
                >
                  <li className='text-lg'>
                    <Link href='/assistant'>AI ASSISTANT</Link>
                  </li>
                  <li className=' text-lg'>
                    <Link href='/gene'>CAMPUST GENIE</Link>
                  </li>
                  <li className=' text-lg'>
                    <Link href='/article'>ARTICLE</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className='hover:bg-primary-100 cursor-pointer hover:text-black   px-8 py-2 hover:rounded-md'>
            <Link href='/resources'>RESOURCES</Link>
          </li>
          <li className='hover:bg-primary-100 cursor-pointer hover:text-black   px-8 py-2 hover:rounded-md'>
            <Link href='/contact'>CONTACT</Link>
          </li>
        </div>
        <div className='flex grow justify-end gap-[10px]'>
          <li className='text-primary-50 border px-8 py-3 hover:bg-primary-100 hover:text-black  rounded-[13px] hover:border-primary-200'>
            <Link href=''>LOGIN</Link>
          </li>
          <li className='border bg-primary-50 text-black px-8 py-3 rounded-[13px]'>
            <Link href=''>TRY AI</Link>
          </li>
        </div>
      </div>
      {/* Desktop nav ends here */}

      {/* Mobile Nav */}
      <div className='lg:hidden'>
        <div className='py-2 px-2 flex justify-between items-center mx-4 list-none'>
          <div>
            <Link href='/'>
              <Image src={logo} alt='logo' />
            </Link>
          </div>
          {/* Hamburger Menu */}
          <div className='block md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-primary-50 focus:outline-none'
            >
              <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2 6h20v2H2V6zm0 5h20v2H2v-2zm0 5h20v2H2v-2z'
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`py-8 flex flex-col gap-3 text-lg grow ml-8 list-none text-primary-50 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <Link href='/about' onClick={closeMenu}>
              ABOUT
            </Link>
          </li>
          <li className='relative items-center'>
            <div onClick={toggleSubNav} className='flex gap-1'>
              <button>PRODUCTS</button>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  fill='#FFFFFF'
                  viewBox='0 0 256 256'
                  className='opacity-90'
                >
                  <path d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'></path>
                </svg>
                <div>
                  <ul
                    className={`absolute ${
                      subnav ? 'block' : 'hidden'
                    } w-38  ml-4 p-4`}
                  >
                    <li className=''>
                      <Link href='/about'>AI ASSISTANT</Link>
                    </li>
                    <li>
                      <Link href='/about'>CAMPUST GENIE</Link>
                    </li>
                    <li>
                      <Link href='/about'>ARTICLE</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href='/resources' onClick={closeMenu}>
              RESOURCES
            </Link>
          </li>
          <li>
            <Link href='/contact' onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </div>

        <div
          className={`flex grow ml-8 list-none gap-8 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className='text-primary-50 border px-6 py-1 rounded-md hover:border-primary-200'>
            <Link href='' onClick={closeMenu}>
              LOGIN
            </Link>
          </li>
          <li className='border bg-primary-50 px-6 py-1 rounded-md hover:border-primary-300'>
            <Link href='' onClick={closeMenu}>
              TRY AI
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
