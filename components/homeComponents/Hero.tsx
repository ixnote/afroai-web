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
            Unlock AI Power <br /> Tailored for Africa{" "}
          </div>
          <div className=" sm:mt-20 py-4 ">
            <Image src={Icon} alt="Icon" className="w-14 md:w-18 " />
          </div>
        </div>
        <hr className="w-full mt-4 md:mt-8 opacity-50" />
        <div className="flex relative sm:mt-10 sm:px-8 w-full sm:h-[704px] h-[220px]">
          <Image src={pics} alt="Icon" fill className="rounded-lg" />
          <div className="w-[50%] flex flex-col gap-8 items-start justify-start p-8 bg-[#18181A] absolute top-6 left-6 rounded-lg text-primary-50 ">
            <span className="font-normal text-xl text-primary-50 border-l-2 border-primary-100 pl-4">
              Access premium AI tools like ChatGPT 4 in local currencies. Boost
              your learning and productivity.
            </span>
            <span className="flex flex-col gap-2 font-normal text-primary-50 border-l-2 border-primary-100 pl-4">
              <span className="text-xl border-b-2 border-primary-100 w-max pb-2">
                Our Offerings
              </span>
              <h3>Affordable access to top AI models</h3>
              <div className="flex flex-col gap-2">
                <h4 className="flex items-start">
                  <div className="mr-6">●</div> Campus Genie: AI-powered
                  assistant for university, polytechnic, and college of
                  education students
                </h4>
                <h4 className="flex items-start">
                  <div className="mr-6">●</div> Wise Nurse: Specialized for
                  nursing and medical students (anatomy, physiology, etc.)
                  Interact with your lecture notes and past exam questions 5-10x
                  boost in academic performance
                </h4>
                {/* <h4 className="flex items-start">
                  <div className="mr-6">●</div> Affordable access to ChatGPT 4o
                  through our AI assistant &quot;Afro&quot;
                </h4> */}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
