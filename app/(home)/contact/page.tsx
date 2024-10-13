"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/svgs/about.svg";
import arrow1 from "@/public/assets/images/arrowUp.png";
import plus from "@/public/assets/svgs/contactPlus.svg";
import minus from "@/public/assets/svgs/contactPlus.svg"; // Optional: Minus icon for opened questions
import {
  IoGlobe,
  IoLocation,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import Link from "next/link";

const Contact = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index: any) => {
    setOpenQuestion(openQuestion === index ? null : index); // Toggle the question state
  };

  const faqs = [
    {
      question: "What languages does Afro AI support?",
      answer:
        "We support major African languages including Swahili, Yoruba, Zulu, Amharic, and more.",
    },
    {
      question: "How accurate is Afro AI's information?",
      answer:
        "Afro AI uses premium ChatGPT 4 AI models and is constantly updated by Open AI and Anthropic, the owners of the premium models. However, always verify critical information from official sources.",
    },
    {
      question: "Can Afro AI help with my homework?",
      answer:
        "Yes! Afro AI can explain concepts and guide you through problems. Remember, the goal is to learn, not just get answers.",
    },
    {
      question: "Is my data safe with Afro AI?",
      answer:
        "We prioritize your privacy. We don't store personal conversations or sell your data.",
    },
    {
      question: "How much does Afro AI cost?",
      answer:
        "We offer flexible pricing plans. Check our pricing page for details.",
    },
    {
      question: "Can I use Afro AI offline?",
      answer:
        "Currently, Afro AI requires an internet connection. We're working on solutions for low-connectivity areas.",
    },
    {
      question: "How is Afro AI different from other AI assistants?",
      answer:
        "Afro AI brings the premium models of ChatGPT to your fingertips at an affordable price, which would otherwise cost $20 (around N27,000–N30,000). Therefore, you are using the same premium model (ChatGPT 4 or 4o) as other top-tier assistants.",
    },
    {
      question: "Can I contribute to improving Afro AI?",
      answer:
        "Absolutely! Your usage and feedback help us improve the user experience and train the premium models to better understand African culture, promoting tailored responses for African users.",
    },
  ];

  return (
    <div>
      {/* Contact Section */}
      <section className="h-auto my-12 min-h-[600px] md:min-h-[800px] py-20 lg:py-20 text-primary-50 max-w-7xl mx-auto">
        <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
          <Image src={logo} alt="" />
          <h2 className="flex gap-2">
            {" "}
            <span>/</span>CONTACT
          </h2>
        </button>

        <div className="flex flex-col md:flex-row mt-12 gap-8 ">
          <div className="w-full flex flex-col gap-8 md:w-3/5">
            <p className="text-primary-50 mt-4 font-inter text-3xl md:text-5xl lg:text-7xl">
              Contact Afro AI
            </p>
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
              <div className="flex w-full md:w-full gap-8 ">
                <label
                  htmlFor="fullName"
                  className="flex flex-col  items-center md:items-start gap-2 text-primary-50 w-full md:w-1/2"
                >
                  Full Name
                  <input
                    type="text"
                    id="fullName"
                    className="bg-black border-b-2 w-full"
                  />
                </label>
                <label
                  htmlFor="email"
                  className="flex flex-col items-center md:items-start gap-2 text-primary-50 w-full md:w-1/2"
                >
                  Email
                  <input
                    type="email"
                    id="email"
                    className="bg-black border-b-2 w-full"
                  />
                </label>
              </div>
              <label
                htmlFor="subject"
                className="flex flex-col items-center md:items-start gap-2 text-primary-50 w-full"
              >
                Subject
                <textarea
                  id="subject"
                  cols={80}
                  className=" bg-black border-b-2 w-full"
                />
              </label>
              <label
                htmlFor="message"
                className="flex flex-col  items-center md:items-start gap-2 text-primary-50 w-full"
              >
                Message
                <textarea
                  id="message"
                  cols={80}
                  className="bg-black py-8 md:py-10 border-b-2 w-full"
                />
              </label>
            </form>
          </div>
        </div>
        <button className="border ml-[38%] md:ml-[45%]  px-4 lg:px-16 py-2 mt-10 rounded-lg border-primary-50 text-black bg-primary-50">
          Submit
        </button>
        <hr className="mt-16 opacity-50" />
        {/* <span className="py-8 mt-4 text-base text-primary-50 w-full">
          Available 24/7 for your questions and feedback. Let&apos;s build a
          smarter Africa together!
        </span> */}
      </section>

      {/* FAQ Section */}
      <section className="h-max my-12 min-h-[600px] py-4 text-primary-50 max-w-7xl mx-auto">
        <button className="border px-4 lg:px-10 py-2 rounded-lg font-thin">
          FAQS
        </button>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="w-full md:w-3/6">
            <p className="text-3xl md:text-5xl lg:text-7xl font-inter">
              Frequently Asked Questions
            </p>
          </div>
          <div className="border-l-2 w-full md:w-3/4">
            <div className="px-8 mx-8">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                  >
                    <p className="py-5">{faq.question}</p>
                    <Image
                      src={openQuestion === index ? minus : plus}
                      alt="Toggle Icon"
                      width={30}
                    />
                  </div>
                  <hr />
                  {openQuestion === index && (
                    <div className="py-4">
                      <p className="text-sm text-primary-50/70">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section>
        <div className="bg-primary-100 py-8 lg:py-14">
          <div className="flex flex-col md:flex-row items-center justify-around ">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl text-black">
                READY TO MOVE FASTER?
              </h2>{" "}
              <p className="mt-8 text-sm md:text-base text-black lg:text-lg">
                Ready to accelerate your progress? Experience the speed and
                efficiency of Afro AI. Try it now and unleash the potential of
                tailored AI solutions.
              </p>
            </div>
            <Link
              href={"/login"}
              className="flex items-center mt-3 font-inter text-xl justify-center gap-2 text-primary-50 hover:bg-primary-50 hover:text-black  bg-black  w-3/4 max-w-xs md:max-w-sm h-16 rounded-xl px-4"
            >
              TRY AI
              <span className=" hover:text-black">
                <Image src={arrow1} alt="Arrow" width={25} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

// import Image from "next/image";
// import logo from "@/public/assets/svgs/about.svg";
// import arrow1 from "@/public/assets/images/arrowUp.png";
// import plus from "@/public/assets/svgs/contactPlus.svg";
// import { IoLocation, IoMail } from "react-icons/io5";

// const Contact = () => {
//   return (
//     <div>
//       <section className="h-auto min-h-[600px] md:min-h-[800px] py-20 lg:py-20 text-primary-50 max-w-7xl mx-auto">
//         <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
//           <Image src={logo} alt="" />
//           <h2 className="flex gap-2">
//             {" "}
//             <span>/</span>CONTACT
//           </h2>
//         </button>

//         <div className="flex flex-col md:flex-row mt-8 gap-8 ">
//           <div className="w-full flex flex-col gap-8 md:w-3/5">
//             <p className="text-primary-50 mt-4 font-inter text-3xl md:text-5xl lg:text-7xl">
//               REACH OUT TO AFRO AI TODAY
//             </p>
//             <div>
//               <span className="text-primary-50 mt-4 font-inter flex items-center gap-4">
//                 <span>
//                   <IoLocation />
//                 </span>
//                 Flat 2 , Block 25 Karu site, by court roundabout, <br /> UND
//                 Street Karu, Abuja.
//               </span>
//               <span className="text-primary-50 mt-4 font-inter flex items-center gap-4">
//                 <span>
//                   <IoMail />
//                 </span>
//                 support@afrocentricai.com
//               </span>
//             </div>
//           </div>
//           <div className="w-full md:w-3/4 pb-4 font-inter">
//             <form className="flex flex-wrap gap-8 justify-center md:justify-start">
//               <div className="flex w-full md:w-full gap-8 ">
//                 <label
//                   htmlFor="fullName"
//                   className="flex flex-col  items-center md:items-start gap-2 text-primary-50 w-full md:w-1/2"
//                 >
//                   Full Name
//                   <input
//                     type="text"
//                     id="fullName"
//                     className="bg-black border-b-2 w-full"
//                   />
//                 </label>
//                 <label
//                   htmlFor="email"
//                   className="flex flex-col items-center md:items-start gap-2 text-primary-50 w-full md:w-1/2"
//                 >
//                   Email
//                   <input
//                     type="email"
//                     id="email"
//                     className="bg-black border-b-2 w-full"
//                   />
//                 </label>
//               </div>
//               <label
//                 htmlFor="subject"
//                 className="flex flex-col items-center md:items-start gap-2 text-primary-50 w-full"
//               >
//                 Subject
//                 <textarea
//                   id="subject"
//                   cols={80}
//                   className=" bg-black border-b-2 w-full"
//                 />
//               </label>
//               <label
//                 htmlFor="message"
//                 className="flex flex-col  items-center md:items-start gap-2 text-primary-50 w-full"
//               >
//                 Message
//                 <textarea
//                   id="message"
//                   cols={80}
//                   className="bg-black py-8 md:py-10 border-b-2 w-full"
//                 />
//               </label>
//             </form>
//           </div>
//         </div>
//         <button className="border ml-[38%] md:ml-[45%]  px-4 lg:px-16 py-2 mt-10 rounded-lg border-primary-50 text-black bg-primary-50">
//           Submit
//         </button>
//         <hr className="mt-16 opacity-50" />
//       </section>
//       <section className="h-auto min-h-[600px] py-4  lg:py-4  text-primary-50 max-w-7xl mx-auto">
//         <button className="border px-4 lg:px-10 py-2 rounded-lg font-thin border-primary-50 text-primary-50">
//           FAQS
//         </button>
//         <div className="flex flex-col md:flex-row  gap-8">
//           <div className="w-full md:w-3/6">
//             <p className="text-primary-50 mt-4 font-inter text-3xl md:text-5xl lg:text-7xl">
//               EXPLORE COMMON QUESTIONS
//             </p>
//           </div>
//           <div className=" border-l-2 h-80 md:h-80">
//             <div className=" px-8 w-3/4 md:w-3/4 mx-8 ">
//               <div className="flex  items-center justify-between">
//                 <p className="py-5">
//                   How can I get started with Afro AI&apos;s services?
//                 </p>
//                 <Image src={plus} alt="" width={30} />
//               </div>
//               <hr />
//               <div className="flex  items-center justify-between">
//                 <p className="py-5">
//                   What makes Afro AI&apos;s solutions unique compared to other
//                   AIplatforms?
//                 </p>
//                 <Image src={plus} alt="" width={30} />
//               </div>
//               <hr />
//               <div className="flex  items-center justify-between">
//                 <p className="py-5">
//                   Is there a free trial available for Afro AI&apos;s services?
//                 </p>
//                 <Image src={plus} alt="" width={30} />
//               </div>
//               <hr />
//               <div className="flex  items-center justify-between">
//                 <p className="py-5">
//                   How can I get contact Afro AI&apos;s support team for
//                   assistance?
//                 </p>
//                 <Image src={plus} alt="" width={30} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="bg-primary-100 py-8 lg:py-14">
//           <div className="flex flex-col md:flex-row items-center justify-around ">
//             <div className="w-full md:w-3/5 text-center md:text-left">
//               <h2 className="text-3xl md:text-5xl text-black">
//                 READY TO MOVE FASTER?
//               </h2>
//               <p className="mt-8 text-sm md:text-base text-black lg:text-lg">
//                 Ready to accelerate your progress? Experience the speed and
//                 efficiency of Afro AI. Try it now and unleash the potential of
//                 tailored AI solutions.
//               </p>
//             </div>

//             <button className="flex items-center mt-3 font-inter text-xl justify-center gap-2 text-primary-50 hover:bg-primary-50 hover:text-black  bg-black  w-3/4 max-w-xs md:max-w-sm h-16 rounded-xl px-4">
//               TRY AI
//               <span className=" hover:text-black">
//                 <Image src={arrow1} alt="Arrow" width={25} />
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
