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
    <div className="sm:max-w-7xl sm:mx-auto mt-12 mx-4">
      <div className="flex flex-col md:text-left w-full">
        <button className="flex border px-6 py-1 text-primary-50 font-thin  mx-8 rounded-md w-fit">
          Benefits
        </button>
        <div className="text-primary-50 sm:text-3xl md:text-5xl lg:text-6xl p-6 w-full md:w-full font-inter py-9 flex md:flex-row items-center md:items-start justify-between">
          <h2 className="text-primary-50 font-inter w-[60%] sm:w-[80%]">
            HOW AFRO ARTIFICIAL INTELLIGENCE ENHANCES YOUR EXPERIENCES
          </h2>
          <Image
            src={handIcon}
            alt="Hand Icon"
            className="md:ml-4 w-12 sm:w-20"
          />
        </div>
        <hr className="opacity-50 mx-8" />
      </div>
      <div className="flex flex-col sm:flex-row w-full border rounded-xl mt-8  overflow-hidden">
        <div className="flex flex-col items-start justify-start gap-4 text-primary-50 p-8 w-full sm:w-1/3 text-xl md:text-2xl lg:text-[45px]  text-center md:text-left py-10 md:py-8 md:px-8 sm:h-auto ">
          <h2 className="w-full">WHY AFRO AI?</h2>
          <p className="mt-8 text-sm md:text-base lg:text-lg">
            AFFORDABLE: You you can access the premium version of ChatGpt 4o
            through our AI assistant Afro AI for just N2,800 (about 28 Ghanaian
            cedis or 223 Kenyan shillings). This is much cheaper than
            subscribing directly, which usually costs $20 per month and must be
            paid in dollars. Direct subscriptions would cost around N27,000 to
            N30,000 (about 299 Ghanaian cedis or 2,500 Kenyan shillings),
            depending on the exchange rate.
          </p>

          <p className="mt-8 text-sm md:text-base lg:text-lg">
            The big idea here is not to create a new AI but to take the most
            powerful premium AI tool (ChatGPT 4) that already exists and make it
            affordable for Africans. Afro AI ensures Africans can use the same
            advanced technology as anyone else, but at a price that makes sense
            for Africa.
          </p>
        </div>
        <div className="flex flex-col sm:w-2/3 w-full sm:border-l-[0.5px]">
          <div className="flex flex-col sm:flex-row justify-between w-full sm:border-b-[0.5px]">
            <div className="md:mx-8 p-6 border-t-[0.5px] sm:border-r-[0.5px] w-full sm:w-1/2">
              <Link href="#">
                <Image src={box} alt="box Icon" className="" />
              </Link>
              <div className="text-primary-50 mt-4 md:mt-8 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-inter">
                  Affordability
                </h2>
                <p className="py-4 md:py-8">
                  Unlock the power of GPT-4 with very affordable pricing
                  tailored for African contex
                </p>
                <hr className=" w-full mx-auto opacity-50" />

                <button className="mt-4 md:mt-8 px-4 py-1">
                  {" "}
                  See Pricing Plans
                </button>
              </div>
            </div>
            <div className="p-6 w-full sm:w-1/2 border-t-[0.5px] sm:border-t-0">
              <Link href="#">
                <Image
                  src={location}
                  alt="Location Icon"
                  className="mx-4 md:mx-4"
                />
              </Link>
              <div className="text-primary-50 mt-4 md:mt-8 mx-4 md:mx-4 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-inter">Localization</h2>
                <p className="py-4 md:py-8">
                  Access innovative solutions that understand and cater to local
                  nuances
                </p>
                <hr className=" w-full mx-auto opacity-50" />

                <button className="mt-4 md:mt-8 px-4 py-1">See Products</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="p-6 w-full sm:w-1/2 border-t-[0.5px] sm:border-t-0">
              <Link href="#">
                <Image src={head} alt="Head Icon" className="mx-4 md:mx-4" />
              </Link>
              <div className="text-primary-50 mt-4 md:mt-8 mx-4 md:mx-4 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-inter">Community</h2>
                <p className="py-4 md:py-8">
                  Join the thriving ecosystem of like-minded individuals and
                  organizations driving change
                </p>
                <hr className=" w-full mx-auto opacity-50" />
                <button className="mt-4 md:mt-8 px-4 py-1">
                  Visit Community
                </button>
              </div>
            </div>
            <div className="p-6 w-full sm:w-1/2 rounded-lg max-h-svh bg-primary-200 border-t-[0.5px] sm:border-l-[0.5px]">
              <Link href="#">
                <Image src={arrow} alt="Arrow Icon" className=" mx-4 md:mx-4" />
              </Link>
              <div className="text-primary-50 mx-4 md:mx-4 mt-4 md:mt-8 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-inter">Get Started</h2>
                <p className="py-4 md:py-8">
                  Call to action button to take them to the payment page
                </p>
                <hr className=" w-full mx-auto opacity-50" />
                <button className="mt-4 md:mt-8 px-4 py-1">
                  Try AI Assistant
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full md:w-2/6 flex flex-col items-center border"> */}
      </div>
      {/* <div className="mx-4 md:mx-8 pt-4">
            <Link href="#">
              <Image src={box} alt="Box Icon" />
            </Link>
            <div className="text-primary-50 mt-4 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Affordable</h2>
              <p className="py-4 md:py-7">
                Unlock the power of GPT-4 with very affordable pricing tailored for African context
              </p>
              <hr className="w-full" />
              <button className="mt-4 md:mt-8 px-4 py-1">
                See Pricing Plans
              </button>
            </div>
          </div> */}
      {/* <div className="w-full md:w-2/6 flex flex-col items-center">
          <div className="mx-4 md:mx-8 pt-4">
            <Link href="#">
              <Image src={head} alt="Head Icon" />
            </Link>
            <div className="text-primary-50 mt-4 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Community</h2>
              <p className="py-4 md:py-5">
                Join the thriving ecosystem of like-minded individuals and organizations driving change
              </p>
              <hr className="w-full" />
              <button className="mt-4 md:mt-8 px-4 py-1">
                Visit Community
              </button>
            </div>
          </div>
          <div className="mx-4 md:mx-8 pt-8 py-6 bg-[#1C352D] w-full">
            <Link href="#">
              <Image src={arrow} alt="Arrow Icon" className="mx-auto md:mx-8" />
            </Link>
            <div className="text-primary-50 mt-4 mx-8 md:mt-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-inter">Needs a Demo?</h2>
              <p className="py-4 md:py-5">
                Get firsthand experience of Afro Intelligence
              </p>
              <hr className="w-full mx-auto mt-5" />
              <button className="mt-4 md:mt-4 px-4 py-1">
                Try AI Assistant
              </button>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Benefits;
