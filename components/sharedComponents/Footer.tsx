import Image from "next/image";
import React from "react";
import symbol from "@/public/assets/images/symbol.png";

const Footer = () => {
  return (
    <div className="bg-primary-200 font-inter w-full px-4 md:px-8 lg:px-16 py-8">
      <div className="text-center md:text-left">
        <button className="border mt-6 text-primary-50 px-6 py-2 rounded-md">
          CONTACT
        </button>
        <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
          <h2 className="text-primary-50 text-3xl md:text-4xl">
            SAY HELLO
          </h2>
          <div className="mt-2 md:mt-0">
            <Image src={symbol} alt="materialsymbols" className="w-10" />
          </div>
        </div>
        <hr className="border-primary-50 mt-4" />
      </div>
      <div className="flex flex-col md:flex-row mt-8 gap-8">
        <div className="w-full md:w-2/6">
          <h2 className="text-primary-50 text-2xl md:text-3xl">
            Need help?
          </h2>
          <p className="text-primary-50 mt-4">
            Need assistance? Our dedicated support team is here to help. Whether
            you have questions about our products, need troubleshooting
            assistance, or want to explore partnership opportunities, we are
            just a click away. Contact us now and let us help you with all your
            enquiries.
          </p>
        </div>
        <div className="w-full md:w-3/4 pb-4">
          <form className="flex flex-wrap gap-8 justify-center md:justify-start">
            <label htmlFor="fullName" className="flex flex-col items-center md:items-start gap-2 text-primary-50 w-full md:w-1/2">
              Full Name
              <input type="text" id="fullName" className="bg-primary-200 border-b-2 w-full" />
            </label>
            <label htmlFor="email" className="flex flex-col items-center md:items-start gap-2 text-primary-50 w-full md:w-1/2">
              Email
              <input type="email" id="email" className="bg-primary-200 border-b-2 w-full" />
            </label>
            <label htmlFor="subject" className="flex flex-col items-center md:items-start gap-2 text-primary-50 w-full">
              Subject
              <textarea id="subject" cols={80} className="bg-primary-200 border-b-2 w-full" />
            </label>
            <label htmlFor="message" className="flex flex-col items-center md:items-start gap-2 text-primary-50 w-full">
              Message
              <textarea id="message" cols={80} className="bg-primary-200 border-b-2 w-full" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
