
import Image from "next/image";
import star from "@/public/assets/images/star.png";
import arrow from "@/public/assets/images/arrowUp.png";
import testimonial1 from "@/public/assets/svgs/testimonial3.svg";
import testimonial2 from "@/public/assets/svgs/testimonial2.svg";
import testimonial3 from "@/public/assets/svgs/testimonial5.svg";
import testimonial4 from "@/public/assets/svgs/testimonial4.svg";
import testimonial5 from "@/public/assets/svgs/testimonial1.svg";

import btn from "@/public/assets/svgs/arrow-btn1.svg";
import btn1 from "@/public/assets/svgs/arrow-btn2.svg";
import { useRef } from "react";

const items = [
  {
    src: testimonial1,
    alt: "Testimonial 1",
    text: "Afro Intelligence has transformed the way I approach problem-solving in my business. Its intuitive AI solutions not only understand our local context but also provides actionable insights that drive real results. Highly recommended.",
    author: "Samuel",
    role: "Entrepreneur",
  },
  {
    src: testimonial2,
    alt: "Testimonial 2",
    text: "As a student, Afro Intelligence's Campus Genie has been a game changer for my academic journey. It not only help me stay organized with my coursework but also provides valuable resources tailored to my university experience. Thank you, Afro AI, for making study easier and more enjoyable!",
    author: "Fatimah",
    role: "University Student",
  },
  {
    src: testimonial3,
    alt: "Testimonial 3",
    text: " I have been using Afro Intelligence for my organization's data analysis needs and I'm thoroughly impressed. The platforms ability to handle large datasets while still providing accurate insight is remarkable. It has become invaluable asset to our decision making process",
    author: "Emeka",
    role: "Data Analyst",
  },
  {
    src: testimonial4,
    alt: "Testimonial 4",
    text: "Afro Intelligence is a breath of fresh air in the AI landscape. Its commitment to understanding and catering for African nuances set it apart from othq platforms. With Afro AI, I feel confident that I'm using AI that truly reflects my culture and values!.",
    author: "OluwaTosin",
    role: "AI Enthusiast",
  },
  {
    src: testimonial5,
    alt: "Testimonial 5",
    text: " Afro AI has exceedded my expectations in every way. Its user-friendly interface, coupled with powerful AI capabilities, has made it an indispensable tool in my daily workflow. I can't imagine navigating the complexities of modern Africa without it!.",
    author: "Aisha",
    role: "Business Professional",
  },
];

const Testimonials = () => {
 
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="px-4 mt-8 md:px-8 lg:px-16 md:py-12">
        <div className="text-center md:text-left">
          <button className="border px-6 py-1 text-primary-50 font-thin rounded-md">
            TESTIMONIALS
          </button>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full py-8 md:w-3/4">
            <h2 className="text-primary-50 text-3xl font-inter md:text-6xl w-full md:w-[80%]">
              WHAT OUR USERS ARE SAYING ABOUT US
            </h2>
            <span className="mb-12">
              <Image src={star} alt="Star" width={60} />
            </span>
          </div>
          <hr className="opacity-50" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-end w-full mt-10 pr-4 gap-2">
            <button onClick={scrollLeft}>
              <Image src={btn} alt="prev" width={70} />
            </button>
            <button onClick={scrollRight}>
              <Image src={btn1} alt="next" width={70} />
            </button>
          </div>
          <div ref={containerRef} className="flex w-full mt-16 overflow-hidden">
            {items.map((item, index) => (
              <div
                key={index}
                className="min-w-[400px] max-w-[300px] py-12 px-4 border-2 border-gray-600 rounded-lg mx-2"
              >
                <Image src={item.src} alt={item.alt} width={90} />
                <p className="text-primary-50 py-8  text-[26px]">{item.text}</p>
                <p className="text-primary-50 font-bold text-lg mt-16">
                  {item.author}
                </p>
                <p className="text-primary-50 mt-3 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="bg-primary-100 py-20">
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl">READY TO MOVE FASTER?</h2>
              <p className="mt-8 text-sm md:text-base lg:text-lg">
                Ready to accelerate your progress? Experience the speed and
                efficiency of Afro AI. Try it now and unleash the potential of
                tailored AI solutions.
              </p>
            </div>
            <button className="flex items-center mt-3 font-inter text-xl justify-center gap-2 text-primary-50 hover:bg-primary-50 hover:text-black  bg-black  w-3/4 max-w-xs md:max-w-sm h-16 rounded-xl px-4"> 
              TRY AI
              <span className=" hover:text-black">
                <Image src={arrow} alt="Arrow" width={25} />
              </span> 
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
