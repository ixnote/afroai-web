import React, { useState } from 'react';
import logo from "@/public/assets/images/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const path = usePathname()

  const obj:{[key:string]: string} = {
    assistant: 'bg-[#1C352D]',
    gene: "bg-[#1A2421]"
  }

  return (
    <div className={`${obj[path.split('/')[1]] ?? 'bg-inherit'} py-3 fixed font-inter left-0 right-0 z-20`}>
      {/* Desktop Nav */}
      <div className='hidden lg:flex items-center mx-4 list-none'>
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className={`flex grow ml-8 justify-between text-primary-50 `}>
          <li>
            <Link href="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/assistant">
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link href="/resources">
              RESOURCES
            </Link>
          </li>
          <li>
            <Link href="/contact">
              CONTACT
            </Link>
          </li>
        </div>
        <div className='flex grow justify-end gap-8'>
          <li className='text-primary-50 border px-6 py-1 rounded-md hover:border-primary-200'>
            <Link href="">
              LOGIN
            </Link>
          </li>
          <li className='border bg-primary-50 px-6 py-1 rounded-md hover:border-primary-300'>
            <Link href="">
              TRY AI
            </Link>
          </li>
        </div>
      </div>
      {/* Desktop nav ends here */}

      {/* Mobile Nav */}
      <div className='lg:hidden'>
        <div className='py-2 px-2 flex justify-between items-center mx-4 list-none'>
          <div>
            <Image src={logo} alt="logo" />
          </div>
          {/* Hamburger Menu */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-primary-50 focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 6h20v2H2V6zm0 5h20v2H2v-2zm0 5h20v2H2v-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={`py-8 flex flex-col gap-3 text-lg grow ml-8 list-none text-primary-50 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link href="/about" onClick={closeMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/assistant" onClick={closeMenu}>
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link href="/resources" onClick={closeMenu}>
              RESOURCES
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </div>

        <div className={`flex grow ml-8 list-none gap-8 ${isOpen ? 'block' : 'hidden'}`}>
          <li className='text-primary-50 border px-6 py-1 rounded-md hover:border-primary-200'>
            <Link href="" onClick={closeMenu}>
              LOGIN
            </Link>
          </li>
          <li className='border bg-primary-50 px-6 py-1 rounded-md hover:border-primary-300'>
            <Link href="" onClick={closeMenu}>
              TRY AI
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
