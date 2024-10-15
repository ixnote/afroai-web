"use client";
import Image from "next/image";
import React from "react";
import symbol from "@/public/assets/images/symbol.png";
import { usePathname } from "next/navigation";
import {
  IoGlobe,
  IoLocation,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMail,
  IoNavigate,
} from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  const path = usePathname();

  const obj: { [key: string]: string } = {
    contact: "hidden",
  };
  return (
    <div
      className={`${
        obj[path.split("/")[1]] ?? ""
      } bg-primary-200 w-full px-4 md:px-8 lg:px-16 py-8`}
    >
      <div className="md:text-left">
        <button className="border mt-6 text-primary-50 px-6 py-2 font-thin rounded-md">
          CONTACT
        </button>
        <div className="flex  md:flex-row items-center justify-between gap-2 mt-4">
          <h2 className="text-primary-50 text-lg sm:text-3xl md:text-4xl font-inter">
            SAY HELLO
          </h2>
          <div className="mt-2 md:mt-0">
            <Image
              src={symbol}
              alt="materialsymbols"
              className="md:ml-4 w-12 sm:w-20"
            />
          </div>
        </div>
        <hr className="opacity-50 mt-4" />
      </div>
      <div className="flex flex-col md:flex-row mt-8 gap-8 ">
        <div className="w-full flex flex-col gap-8 md:w-3/5">
          <div>
            <h2 className="text-primary-50 text-2xl md:text-3xl font-inter">
              Need help?
            </h2>
            <p className="text-primary-50 mt-4 font-inter">
              Need assistance? Our dedicated support team is here to help.
              Whether you have questions about our products, need
              troubleshooting assistance, or want to explore partnership
              opportunities, we are just a click away. Contact us now and let us
              help you with all your enquiries.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary-50 mt-4 font-inter flex items-center gap-4">
              <span>
                <IoLocation />
              </span>
              Flat 2 , Block 25 Karu site, by court roundabout, <br /> UND
              Street Karu, Abuja.
            </span>
            <span className="text-primary-50 mt-4 font-inter flex items-center gap-4">
              <span>
                <IoMail />
              </span>
              support@afrocentricai.com
            </span>
            <span className="text-primary-50 mt-4 font-inter flex flex-col justify-start items-start gap-4">
              <div className="flex gap-4 items-center">
                <span>
                  <IoGlobe />
                </span>
                Follow us:
              </div>
              <div className="flex flex-col items-start justify-start gap-1 ml-8">
                <span className="text-primary-50/70 mt-4 font-inter flex items-center gap-4">
                  <span>
                    <IoLogoTwitter />
                  </span>
                  AfroAI
                </span>
                <span className="text-primary-50/70 mt-4 font-inter flex items-center gap-4">
                  <span>
                    <IoLogoFacebook />
                  </span>
                  AfroAIOfficial
                </span>
                <span className="text-primary-50/70 mt-4 font-inter flex items-center gap-4">
                  <span>
                    <IoLogoInstagram />
                  </span>
                  afro.ai
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className="w-full md:w-3/4 pb-4 font-inter">
          <form className="flex flex-wrap gap-8 justify-center md:justify-start">
            <div className="flex flex-col sm:flex-row w-full md:w-full gap-8 ">
              <label
                htmlFor="fullName"
                className="flex flex-col  sm:items-center md:items-start gap-2 text-primary-50 w-full md:w-1/2"
              >
                Full Name
                <input
                  type="text"
                  id="fullName"
                  className="bg-primary-200 border-b-2 w-full"
                />
              </label>
              <label
                htmlFor="email"
                className="flex flex-col sm:items-center  md:items-start gap-2 text-primary-50 w-full md:w-1/2"
              >
                Email
                <input
                  type="email"
                  id="email"
                  className="bg-primary-200 border-b-2 w-full"
                />
              </label>
            </div>
            <label
              htmlFor="subject"
              className="flex flex-col sm:items-center  md:items-start gap-2 text-primary-50 w-full"
            >
              Subject
              <textarea
                id="subject"
                cols={80}
                className="bg-primary-200 border-b-2 w-full"
              />
            </label>
            <label
              htmlFor="message"
              className="flex flex-col  sm:items-center  md:items-start gap-2 text-primary-50 w-full"
            >
              Message
              <textarea
                id="message"
                cols={80}
                className="bg-primary-200 py-8 md:py-10 border-b-2 w-full"
              />
            </label>
          </form>
        </div>
      </div>
      <div className="mt-12 w-full flex justify-between">
        <h1 className=" text-white text-xl">
          Powered by Blathium Technologies
        </h1>
        <div className="flex items-center gap-4">
          <Link
            href={"/privacy"}
            className="text-base cursor-pointer text-primary-100 hover:text-primary-100/60 lg:text-xl"
          >
            Privacy Policy
          </Link>
          <span className="text-base cursor-pointer text-primary-100 lg:text-xl">
            /
          </span>
          <Link
            href={"/disclaimer"}
            className="text-base cursor-pointer text-primary-100 hover:text-primary-100/60 lg:text-xl"
          >
            Disclaimer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
