
import React from "react";
import Image from "next/image";
import Icon from "@/public/assets/images/Animated Icon.png";
import pics from "@/public/assets/svgs/firstpage.svg";


const Hero = () => {
  return (
    <div className="h-screen flex flex-col py-20 items-center">
      <div className="w-full flex flex-col">
        <div className="text-primary-50 px-4 sm:px-10 font-inter flex flex-col items-center md:items-start">
          <h2 className="text-[36px] sm:text-[48px] md:text-[72px] lg:text-[105px] text-center md:text-left mt-8 leading-tight md:leading-[100px]">
            YOUR AFFORDABLE <br /> OPTION OF CHATGPT
          </h2>
          <div className="flex justify-center md:justify-end w-full mt-4 md:mt-0">
            <Image src={Icon} alt="Icon"  className="w-17 md:w-18" />
          </div>
          <hr className="w-full mt-4 opacity-50" />
        </div>
        <div className="mt-10 px-4 sm:px-8 w-full">
          <Image src={pics} alt="Icon" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
