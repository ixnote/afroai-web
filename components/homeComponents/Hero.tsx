"use client";
import React from "react";
import Image from "next/image";
import Icon from "@/public/assets/images/Animated Icon.png";
import pics from "@/public/assets/images/flower.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex flex-col pt-20 items-center  sm:max-w-7xl sm:mx-auto w-full">
      <div className="w-full flex flex-col items-center md:items-start">
        <div className="text-primary-50 px-4 sm:px-10 font-inter flex justify-between items-center md:items-end w-full">
          <div className="text-[26px] sm:text-[48px] flex gap-1  md:text-[78px] lg:text-[80px] text-left md:text-left mt-0 md:mt-20 leading-tight md:leading-[100px]">
            Unlock AI Power, <br /> Tailored for Africa
          </div>
          <div className=" sm:mt-20 py-4 ">
            <Image src={Icon} alt="Icon" className="w-14 md:w-18 " />
          </div>
        </div>
        <hr className="w-full mt-4 md:mt-8 opacity-50" />
        <div className="flex relative sm:mt-10 sm:px-8 w-full sm:h-[704px] h-[220px]">
          <Image src={pics} alt="Icon" fill className="rounded-lg" />
          <div className="w-[50%] flex items-center justify-center p-8 bg-[#18181A] absolute top-6 left-6 rounded-lg text-primary-50 ">
            Access premium AI tools like ChatGPT 4 in local currencies. Boost
            your learning and productivity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
