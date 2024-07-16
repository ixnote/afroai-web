import React from "react";
import Image from "next/image";
import Icon from "@/public/assets/images/Animated Icon.png";
import pics from "@/public/assets/svgs/firstpage.svg";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col pt-20 items-center">
      <div className="w-full flex flex-col items-center md:items-start">
        <div className="text-primary-50 px-4 sm:px-10 font-inter flex flex-col items-center md:items-start max-w-screen-5xl">
          <div className="text-[36px] sm:text-[48px] flex gap-1  md:text-[78px] lg:text-[80px] text-center md:text-left mt-0 md:mt-20 leading-tight md:leading-[100px]">
            YOUR AFFORDABLE <br /> OPTION OF CHATGPT
            <div className=" mt-20 py-4 ">
              <Image src={Icon} alt="Icon" className="w-17 md:w-18 " />
            </div>
          </div>
        </div>
        <hr className="w-full mt-4 md:mt-8 opacity-50" />
        <div className="mt-10 px-4 sm:px-8 w-full">
          <Image src={pics} alt="Icon" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
