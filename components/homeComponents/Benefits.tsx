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
        <button className="border px-6 py-1 text-primary-50 font-serif rounded-md">
          Benefits
        </button>
        <div className="text-primary-50 text-2xl md:text-5xl w-full md:w-[70%] font-inter py-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
          <h2>HOW AFRO INTELLIGENCE ENHANCES YOUR EXPERIENCES</h2>
          <div className="mt-4 md:mt-0 md:ml-4">
            <Image src={handIcon} alt="" width={50} />
          </div>
        </div>
        <hr className="border-primary-50" />
      </div>
      <div className="w-full md:w-[90%] mx-auto mt-8 flex flex-col md:flex-row items-center">
        <div className="text-primary-50 text-xl md:text-5xl px-2 py-10 w-full md:w-2/6 text-center md:text-left">
          <h2>WHY AFRO INTELLIGENCE</h2>
        </div>
        <div className="w-full md:w-2/6 flex flex-col items-center border rounded-xl py-6">
          <div className="mx-4 md:mx-8 pt-4">
            <Link href="">
              <Image src={location} alt="location" />
            </Link>
            <div className="text-primary-50 mt-4 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Localization</h2>
              <p className="py-4 md:py-8">
                Access innovative solutions that understand and cater to local nuances
              </p>
              <hr className="border-primary-50" />
              <button className="mt-4 md:mt-8 border px-4 py-1 rounded-md">See Products</button>
            </div>
          </div>
          <div className="border-t w-full py-10">
            <Link href="">
              <Image src={box} alt="location" className="mx-4 md:mx-8" />
            </Link>
            <div className="text-primary-50 mt-4 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Affordable</h2>
              <p className="py-4 md:py-8">
                Unlock the power of GPT-4 with very affordable pricing tailored for African context
              </p>
              <hr className="border-primary-50" />
              <button className="mt-4 md:mt-8 border px-4 py-1 rounded-md">See Pricing Plans</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/6 flex flex-col items-center border rounded-xl py-6 mt-8 md:mt-0 md:ml-4">
          <div className="pt-4">
            <Link href="">
              <Image src={head} alt="location" className="mx-4 md:mx-8" />
            </Link>
            <div className="text-primary-50 mt-4 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Community</h2>
              <p className="py-4 md:py-8">
                Join the thriving ecosystem of like-minded individuals and organizations driving change
              </p>
              <hr className="border-primary-50" />
              <button className="mt-4 md:mt-8 border px-4 py-1 rounded-md">Visit Community</button>
            </div>
          </div>
          <div className="border-t w-full py-10 bg-[#1C352D] rounded-b-xl">
            <Link href="">
              <Image src={arrow} alt="location" className="mx-4 md:mx-8" />
            </Link>
            <div className="text-primary-50 mt-4 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Need a Demo?</h2>
              <p className="py-4 md:py-8">
                Get firsthand experience of Afro Intelligence
              </p>
              <hr className="border-primary-50" />
              <button className="mt-4 md:mt-8 border px-4 py-1 rounded-md">Try AI Assistant</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
