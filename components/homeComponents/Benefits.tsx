"use client";
import Image from "next/image";
import React from "react";
import handIcon from "@/public/assets/images/happy.png";
import location from "@/public/assets/svgs/location.svg";
import box from "@/public/assets/svgs/box.svg";
import arrow from "@/public/assets/svgs/arrow.svg";
import head from "@/public/assets/svgs/threehead.svg";
import Link from "next/link";

const Benefits = () => {
  return (
    <div className="mt-16">
      <div className="text-center md:text-left">
        <button className="border px-6 py-1 text-primary-50 font-thin rounded-md">
          Benefits
        </button>
        <div className="text-primary-50 text-2xl md:text-5xl mx-8 w-full md:w-[75%] font-inter py-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start ">
          <h2>HOW AFRO INTELLIGENCE ENHANCES YOUR EXPERIENCES</h2>
          <Image src={handIcon} alt="" width={60} className="mr-24" />
        </div>
        <hr className="border-primary-50 mx-8" />
      </div>
      <div className="w-full md:w-[90%] border rounded-xl mx-auto mt-8 flex flex-col md:flex-row ">
        <div className="text-primary-50 text-xl md:text-5xl px-2  w-full md:w-2/6 text-center md:text-left">
          <h2>WHY AFRO INTELLIGENCE</h2>
        </div>
        <div className="w-full md:w-2/6 flex flex-col items-center border">
          <div className="mx-4 md:mx-8 pt-4">
            <Link href="">
              <Image src={location} alt="location" />
            </Link>
            <div className="text-primary-50 mt-4 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Localization</h2>
              <p className="py-4 md:py-8">
                Access innovative solutions that understand and cater to local
                nuances
              </p>
              <hr className="border-primary-50" />
              <button className="mt-4 md:mt-8  px-4 py-1 ">See Products</button>
            </div>
          </div>

          <div className="mx-4 md:mx-8 pt-4">
            <Link href="">
              <Image src={box} alt="location" />
            </Link>
            <div className="text-primary-50 mt-4 md:mt-4 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Affordable</h2>
              <p className="py-4 md:py-7">
                Unlock the power of GPT-4 with very affordable pricing tailored
                for African context
              </p>
              <hr className="border-primary-50" />
              <button className="mt-4 md:mt-3  px-4 py-1 ">
                See Princing Plans
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/6 flex flex-col items-center">
          <div className="mx-4 md:mx-8 pt-4">
            <Link href="">
              <Image src={head} alt="location" />
            </Link>
            <div className="text-primary-50 mt-4 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Community</h2>
              <p className="py-4 md:py-5">
              Join the thriving ecosystem of like-minded individuals and
              organizations driving change
              </p>
              <hr className="border-primary-50 " />
              <button className="mt-4 md:mt-8  px-4 py-1 ">Visit community</button>
            </div>
          </div>
          <div className="mx-4 md:mx-8 pt-4 bg-[#1C352D] w-full  ">
            <Link href="">
              <Image src={arrow} alt="location" className="mx-8 md:mx-8"/>
            </Link>
            <div className="text-primary-50 mt-4 mx-8 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter mx-8 md:mx-8">Needs a Demo?</h2>
              <p className="py-4 md:py-5 md:mx-8">
              Get firsthand experience of Afro Intelligence
              </p>
              <hr className="border-primary-50 mt-5 w-[95%] mx-auto" />
              <button className="mt-4 md:mt-4  px-4 py-1 ">
                Try AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
