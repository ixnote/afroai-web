import Image from "next/image";
import star from "@/public/assets/images/star.png";
import arrow from "@/public/assets/images/arrowUp.png";
import testimonial1 from "@/public/assets/svgs/testimonial3.svg";
import testimonial2 from "@/public/assets/svgs/testimonial2.svg";
import testimonial3 from "@/public/assets/svgs/testimonial1.svg";

const Testimonials = () => {
  return (
    <div className="font-inter px-4 md:px-8 lg:px-16">
      <div className="text-center md:text-left">
        <button className="border px-6 py-1 text-primary-50 font-serif rounded-md">
          TESTIMONIALS
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full py-8 md:w-3/4">
          <h2 className="text-primary-50 text-3xl md:text-6xl w-full md:w-[80%] font-inter">
            WHAT OUR USERS ARE SAYING ABOUT US
          </h2>
          <span className="mt-4 md:mt-0">
            <Image src={star} alt="" />
          </span>
        </div>
        <hr className="border-primary-50" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div className="py-12 px-4 border-2 border-gray-600 rounded-lg cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out">
          <Image src={testimonial1} alt="" width={50} />
          <p className="text-primary-50 py-8 w-full md:w-3/4">
            &apos;Afro Intelligence has transform the way I approach
            problem-solving in my business. It&apos;s intuitive AI solutions not
            only understand our local context but also provide actionable
            insights that drive real result. Highly recomended&apos;
          </p>
          <p className="text-primary-50 font-bold text-lg">Samuel</p>
          <p className="text-primary-50 mt-3 text-sm">Enterpreneur</p>
        </div>
        <div className="py-12 px-4 border-2 border-gray-600 rounded-lg cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out">
          <Image src={testimonial2} alt="" width={50} />
          <p className="text-primary-50 py-8 w-full md:w-3/4">
            &apos; As a student, Afro Intelligence&apos; Campus Genie has been a
            game changer for my academic journey. It not only helps me stay
            organized with my coursework but also provides valuable resources
            tailored to my university. Thank you Afro Intelligence, for making studying
            easier and more enjoyable!&apos;
          </p>
          <p className="text-primary-50 font-bold text-lg">Fatimah</p>
          <p className="text-primary-50 mt-3 text-sm">University Student</p>
        </div>
        <div className="py-12 px-4 border-2 border-gray-600 rounded-lg cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out">
          <Image src={testimonial3} alt="" width={50} />
          <p className="text-primary-50 py-8 w-full md:w-3/4">
            &apos;Afro Intelligence has exceeded my expectations in every way.
            Its user-friendly interface, coupled with its powerful AI
            capabilities, has made it an indispensable tool in my daily
            workflow. I can&apos;t imagine navigating the complexities of modern
            Africa without it&apos;
          </p>
          <p className="text-primary-50 font-bold text-lg">Aisha</p>
          <p className="text-primary-50 mt-3 text-sm">Business Professional</p>
        </div>
      </div>
      <div className="bg-primary-100 mt-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-around px-4 md:px-8 lg:px-16">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl">READY TO MOVE FASTER?</h2>
            <p className="mt-8 text-sm">
              Ready to accelerate your progress? Experience the speed and
              efficiency of Afro AI. Try it now and unleash the potential of
              tailored AI solutions.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <button className="flex items-center gap-2 bg-black text-primary-50 text-xl px-10 py-3 rounded-lg">
              Try AI
              <span>
                <Image src={arrow} alt="" width={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
