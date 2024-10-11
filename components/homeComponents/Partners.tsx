import Image from "next/image";
import React from "react";
import handIcon from "@/public/assets/images/partnership.png";
import logo1 from "@/public/assets/images/Logo1.png";
import logo2 from "@/public/assets/images/Logo2.png";
import logo3 from "@/public/assets/images/Logo3.png";
import logo4 from "@/public/assets/images/Logo4.png";
import logo5 from "@/public/assets/images/Logo5.png";
import logo6 from "@/public/assets/images/logo6.png";

const Partners = () => {
  return (
    <div className="flex flex-col sm:py-28  py-10 sm:max-w-7xl sm:mx-auto px-4">
      <div className="flex flex-col text-center md:text-left">
        <button className="flex border w-fit px-6 py-1 text-primary-50 font-thin rounded-md">
          OUR PARTNERS
        </button>
        <div className="flex sm:flex-col md:flex-row items-center py-4 gap-2 justify-between ">
          <h2 className="text-primary-50 text-[26px] md:text-[48px] lg:text-[66px] font-inter text-left">
            TRUSTED BY MILLIONS
          </h2>
          <div className="mt-2 md:mt-0">
            <Image src={handIcon} alt="HandIcon" className="w-12 sm:w-20" />
          </div>
        </div>
        <hr className="opacity-50" />
      </div>
      <div className="sm:mt-16 mt-6 w-full text-center">
        <p className="text-primary-50 text-[18px] md:text-[20px] lg:text-[26px] leading-8 mx-auto lg:w-[900px]">
          Stay tuned! We&apos;re in talks with professional bodies across Africa
          to build lasting partnerships for Afro AI. Watch this space for
          exciting updates!
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-12 md:mt-20 sm:gap-4 gap-8">
        <div className="w-1/2 md:w-1/3 lg:w-1/6 flex justify-center">
          <Image src={logo6} alt="logo6" />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 flex justify-center">
          <Image src={logo1} alt="logo1" />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 flex justify-center">
          <Image src={logo2} alt="logo2" />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 flex justify-center">
          <Image src={logo3} alt="logo3" />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 flex justify-center">
          <Image src={logo4} alt="logo4" />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 flex justify-center">
          <Image src={logo5} alt="logo5" />
        </div>
      </div>
      <hr className="opacity-50 sm:mt-32 mt-16" />
    </div>
  );
};

export default Partners;
