import React from "react";
import Image from "next/image";
import Icon from "@/public/assets/images/Animated Icon.png";
import pics from "@/public/assets/svgs/firstpage.svg";
import line from "@/public/assets/images/Line.png";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col py-20 items-center">
      <div className="text-primary-50  px-10 font-inter flex flex-col items-center md:flex-row md:gap-8 md:w-full">
        <h2 className="text-2xl md:text-8xl  md:text-left md:mt-8 ">
          YOUR AFFORDABLE <br /> OPTION OF CHATGPT
          <hr className="w-[120%] md:mt-4" />
        </h2>
        <div className="mt-8 md:mt-0">
          <Image src={Icon} alt="Icon" width={60} className="md:mt-12" />
        </div> 
      </div>
      <div className="flex flex-col md:mt-8 items-center w-full px-8 md:flex-row md:justify-center">
        <div className="w-full mt-12 md:mt-0 md:w-auto">
          <Image src={pics} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
