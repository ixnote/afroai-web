import React from "react";
import Image from "next/image";
import Icon from "@/public/assets/images/Animated Icon.png";
import pics from "@/public/assets/images/flower.png";
import line from "@/public/assets/images/Line.png";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-primary-50 py-20 px-10 font-inter flex flex-col items-center md:flex-row md:gap-16 md:w-3/4">
        <h2 className="text-xl md:text-6xl text-center md:text-left">
          YOUR AFFORDABLE <br /> OPTION OF CHATGPT
        </h2>
        <div className="mt-8 md:mt-0">
          <Image src={Icon} alt="Icon" width={60} className="md:mt-12" />
        </div>
      </div>
      <div className="relative flex flex-col items-center w-full px-8 md:flex-row md:justify-center">
        <div className="relative top-10 bg-black rounded-xl w-full md:w-2/5 h-40 py-8 px-4 text-primary-50 mx-4 md:mx-0">
          <h2 className="w-11/12 md:w-2/3 mx-auto">
            Your Affordable AI Solution. Say goodbye to costly alternatives -
            Afro AI offers premium AI at a fraction of the price, making
            cutting-edge technology accessible to Africans.
            <span className="absolute top-1 left-10">
              <Image src={line} alt="line" />
            </span>
          </h2>
        </div>
        <div className="w-full mt-12 md:mt-0 md:w-auto">
          <Image src={pics} alt="icon" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
