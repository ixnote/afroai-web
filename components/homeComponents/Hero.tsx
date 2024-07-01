import React from "react";
import Image from "next/image";
import Icon from "@/public/assets/images/Animated Icon.png";
import pics from "@/public/assets/svgs/firstpage.svg";
import line from "@/public/assets/images/Line.png";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col py-20 items-center">
      <div className="w-full flex flex-col">

      <div className="text-primary-50  px-10 font-inter flex flex-col ">
        <h2 className="text-2xl md:text-8xl  md:text-left md:mt-8 ">
          YOUR AFFORDABLE <br /> OPTION OF CHATGPT
        </h2>
        <div className="mt-8 md:mt-0 flex justify-end w-full ">
          <Image src={Icon} alt="Icon" width={60} className="md:mt-12 w-10" />
        </div> 
          <hr className="w-full md:mt-4 opacity-50" />
      </div>
      <div className="mt-10 px-8">

        <div className="w-full  md:mt-0 ">
          <Image src={pics} alt="icon" className="w-full"/>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Hero;
