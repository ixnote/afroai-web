import Image from "next/image";
import star from "@/public/assets/images/star.png";
import arrow from "@/public/assets/images/arrowUp.png";
import testimonial1 from "@/public/assets/svgs/testimonial3.svg";
import testimonial2 from "@/public/assets/svgs/testimonial2.svg";
import testimonial3 from "@/public/assets/svgs/testimonial1.svg";
import btn from "@/public/assets/svgs/arrow-btn1.svg";
import btn1 from "@/public/assets/svgs/arrow-btn2.svg";
import { useState } from "react";
import { log } from "util";

const items = [
  {
    src: testimonial1,
    alt: "Testimonial 1",
    text: "Afro Intelligence has transformed the way I approach problem-solving in my business...",
    author: "Samuel",
    role: "Entrepreneur",
  },
  {
    src: testimonial2,
    alt: "Testimonial 2",
    text: "As a student, Afro Intelligence's Campus Genie has been a game changer for my academic journey...",
    author: "Fatimah",
    role: "University Student",
  },
  {
    src: testimonial3,
    alt: "Testimonial 3",
    text: "Afro Intelligence has exceeded my expectations in every way...",
    author: "Aisha",
    role: "Business Professional",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  return (
    <div>
      <section className=" px-4 mt-8  md:px-8 lg:px-16 md:py-12 ">
        <div className="text-center md:text-left">
          <button className="border px-6 py-1 text-primary-50 font-thin  rounded-md">
            TESTIMONIALS
          </button>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full py-8 md:w-3/4">
            <h2 className="text-primary-50 text-3xl font-inter md:text-6xl w-full md:w-[80%]">
              WHAT OUR USERS ARE SAYING ABOUT US
            </h2>
            <span className=" mb-12">
              <Image src={star} alt="" width={60} />
            </span>
          </div>
          <hr className="opacity-50 " />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-end w-full  mt-10 pr-4 gap-2">
            <button onClick={handlePrevClick} className="">
              <Image src={btn} alt="prev" width={70} />
            </button>
            <button onClick={handleNextClick}>
              <Image src={btn1} alt="next" width={70} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 mt-16 font-inter w-full px-4">
            <div className="py-12 px-4 border-2 border-gray-600 rounded-lg ">
              <Image src={items[currentIndex].src} alt="" width={80} />

              <p
                data-author={items[currentIndex].author}
                className="text-primary-50 py-8 w-full  md:w-3/4 text-[26px]"
              >
                Afro Intelligence has transformed the way I approach
                problem-solving in my business. Its intuitive AI solutions not
                only understand our local context but also provide actionable
                insights that drive real results. Highly recommended
              </p>

              <p className="text-primary-50 font-bold text-lg mt-20">Samuel</p>
              <p className="text-primary-50 mt-3 text-sm">Entrepreneur</p>
            </div>

            <div className="py-12 px-4 border-2 border-gray-600 rounded-lg">
              <Image src={testimonial2} alt="" width={80} />
              <p className="text-primary-50 py-8 w-full md:w-3/4 text-[26px]">
                As a student, Afro Intelligence&apos; Campus Genie has been a
                game changer for my academic journey. It not only helps me stay
                organized with my coursework but also provides valuable
                resources tailored to my university. Thank you Afro
                Intelligence, for making studying easier and more enjoyable!
              </p>
              <p className="text-primary-50 font-bold text-lg">Fatimah</p>
              <p className="text-primary-50 mt-3 text-sm">University Student</p>
            </div>

            <div className="py-12 px-4 border-2 border-gray-600 rounded-lg ">
              <Image src={testimonial3} alt="" width={80} />
              <p className="text-primary-50 py-8 w-full md:w-3/4 text-[26px]">
                Afro Intelligence has exceeded my expectations in every way. Its
                user-friendly interface, coupled with its powerful AI
                capabilities, has made it an indispensable tool in my daily
                workflow. I can&apos;t imagine navigating the complexities of
                modern Africa without it
              </p>
              <p className="text-primary-50 font-bold text-lg">Aisha</p>
              <p className="text-primary-50 mt-3 text-sm">
                Business Professional
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-primary-100 py-20">
          <div className="flex flex-col md:flex-row items-center justify-around ">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl">READY TO MOVE FASTER?</h2>
              <p className="mt-8 text-sm md:text-base lg:text-lg">
                Ready to accelerate your progress? Experience the speed and
                efficiency of Afro AI. Try it now and unleash the potential of
                tailored AI solutions.
              </p>
            </div>

            <button className="flex items-center mt-3 justify-center gap-2 bg-black w-3/4 max-w-xs md:max-w-sm h-16 rounded-xl px-4">
              <p className="text-primary-50 text-xl font-inter">TRY AI</p>
              <span>
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
