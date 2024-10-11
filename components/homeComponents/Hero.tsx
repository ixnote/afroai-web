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
          <div className="w-50 flex p-8 bg-red-300 absolute top-4 left-4 rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            vitae quisquam totam laboriosam nesciunt, aliquid ad! Nostrum eos
            assumenda placeat ad sequi ab.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
