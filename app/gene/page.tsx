import Image from "next/image";
import logo from "@/public/assets/svgs/about.svg";
import icon from "@/public/assets/images/Animated Icon.png";
import campus from "@/public/assets/images/campus.png";
import light from "@/public/assets/svgs/light.svg";
import arrow from "@/public/assets/images/arrowUp.png";
import money from "@/public/assets/svgs/money.svg";
import square from "@/public/assets/svgs/square.svg";
import circle from "@/public/assets/svgs/circle.svg";
import diamond from "@/public/assets/svgs/diamond.svg";
import plus1 from "@/public/assets/svgs/plus2.svg";
import plus2 from "@/public/assets/svgs/plus1.svg";

const Gene = () => {
  return (
    <div className="bg-primary-300">
      <section className="h-auto min-h-[800px] pt-24 lg:pt-24 text-primary-50 mx-4 lg:mx-2">
        <div className="flex justify-center lg:justify-start">
          <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
          <Image src={logo} alt="" />
          <h2 className="flex gap-2"> <span>/</span>CAMPUS GENIE</h2>
        </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center py-10">
          <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left">
            UNLOCK YOUR ACADEMIC POTENTIALS WITH CAMPUS GENE
          </h2>
          <hr  className="opacity-50"/>
          <div className="mt-6 lg:mt-0">
            <Image
              src={icon}
              alt="Icon"
              className="w-12 h-12 lg:w-20 lg:h-20"
            />
          </div>
        </div>
        <hr className="opacity-50 my-8 " />
        <Image
          src={campus}
          alt="AI Assistant"
          className="w-full h-auto object-cover rounded-lg mt-8"
        />
      </section>

      <section className="h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2  lg:py-16">
        <div className="flex justify-center lg:justify-start">
          <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin">
            STUDY COMPANION
          </button>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col md:flex-row items-center py-6 text-2xl md:text-4xl font-inter">
          <h2 className="text-center md:text-left">
            YOUR ULTIMATE ACADEMIC ALLY
          </h2>
          <Image
            src={light}
            alt="message icon"
            width={60}
            className="lg:mb-10 md:mr-32"
          />
        </div>
        <hr className="opacity-50 my-8" />
        <div className="flex flex-col md:flex-row items-center gap-8 py-8">
          <p className="w-full md:w-1/2 text-2xl lg:text-3xl">
            Unlock Your Academic Potentials with Campus Genie
          </p>
          <p className="w-full md:w-1/2 text-md font-thin">
            Afro AI Assistant is a revolutionary AI platform designed to enhance
            your digital experiences. Powered by advanced technology and
            enriched with insights from Africa, it provides personalized
            solutions tailored to your needs. Whether you &apos;re a business
            owner seeking optimization, a student in need of academic support,
            or an individual navigating daily tasks, Afro AI Assistant is your
            reliable companion. With its Afrocentric intelligence, it
            understands and responds to your queries with precision and context,
            revolutionizing the way you interact with technology.
          </p>
        </div>
        <hr className="opacity-50 my-8" />
        <div className="flex flex-col md:flex-row items-center gap-8 py-8">
          <p className="w-full md:w-1/2 text-2xl lg:text-3xl">
            Featured Tailored to Your Needs
          </p>
          <p className="w-full md:w-1/2 text-md font-thin">
            From bustling marketplaces to rural villages, Afro AI Assistant is
            designed to navigate the complexities of African life. Whether
            you&apos;re a business owner seeking to optimize operations, a
            student in need of academic support, or an individual looking for
            personalized assistance, Afro AI Assistant is your reliable
            companion every step of the way.
          </p>
        </div>
        <hr className="opacity-50 my-8" />
        <div className="flex flex-col md:flex-row items-center gap-8 py-8">
          <p className="w-full md:w-1/2 text-2xl lg:text-3xl">
            Streamline Your Study Experience
          </p>
          <p className="w-full md:w-1/2 text-md font-thin">
            affordably, ensuring that individuals and businesses across Africa
            can At Afro AI, we believe that access to transformative technology
            should be a right, not a privilege. That&apos;s why Afro AI
            Assistant is priced harness its game-changing capabilities without
            breaking the bank.
          </p>
        </div>
        <hr className="opacity-50 font-thin" />
      </section>
      <section className="h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2">
        <div className="flex justify-center lg:justify-start">
          <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin">
            PRICING
          </button>
        </div>
        <div className="w-full lg:w-[45%]  flex flex-col md:flex-row items-center py-6 text-2xl md:text-4xl font-inter">
          <h2 className="text-center md:text-left">
            DISCOVER THE PERFECT PLAN
          </h2>
          <Image
            src={money}
            alt="message icon"
            width={60}
            className="lg:mb-10 md:mr-40 lg:mr-56"
          />
        </div>
        <hr className="opacity-50 my-8" />
        <div className="w-full lg:w-3/5 mx-auto md:mx-[30%] lg:mx-[30%]  flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="flex flex-col items-center text-center">
            <Image src={square} alt="square" />
            <p className="mt-8 text-2xl">FREE</p>
          </div>
          <div className="flex flex-col items-center text-center mt-10 md:mt-0">
            <Image src={circle} alt="circle" />
            <p className="mt-8 text-2xl">PRO</p>
          </div>
          <div className="flex flex-col items-center text-center mt-10 md:mt-0">
            <Image src={diamond} alt="diamond" />
            <p className="mt-8 text-2xl">PREMIUM</p>
          </div>
        </div>
        <div className="w-full lg:w-3/4 mx-auto md:mx-[23%] lg:mx-[23%] flex flex-col md:flex-row justify-around items-center mt-16 gap-2">
          <div className="flex flex-col  mt-10 md:mt-0 lg:ml-20">
            <p className="mt-8 text-2xl">
              <span className="text-5xl">&#8358;0</span>
            </p>
            <p className="mt-8">100% FREE TOKENS/MONTH</p>
          </div>
          <div className="flex flex-col  mt-10 md:mt-0  lg:ml-28">
            <p className="mt-8 text-2xl">
              <span className="text-5xl">&#8358;1,000</span>
            </p>
            <p className="mt-8">100% FREE TOKENS/MONTH</p>
          </div>
          <div className="flex flex-col  mt-10 md:mt-0 lg:ml-24">
            <p className="mt-8 text-2xl">
              <span className="text-5xl">&#8358;2,000</span>
            </p>
            <p className="mt-8">100% FREE TOKENS/MONTH</p>
          </div>
        </div>
      <section className="h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2 py-8 lg:py-16">
        <div>
          <p className="py-6 text-center lg:text-left text-2xl lg:text-3xl font-inter">
            FEATURES
          </p>
          <hr className="opacity-50 my-4" />
          <div className="py-8 ">
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
              <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">
                Basic AI Capabilities
              </p>
              <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
              <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">
                Essential Tools
              </p>
              <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
              <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">
                Limited Usage
              </p>
              <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus2} alt="plus svg" className="w-8 h-8" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
              <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">
                Priority Support
              </p>
              <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
                <Image src={plus2} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
              <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">
                Expanded Features
              </p>
              <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
                <Image src={plus2} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
              <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">
                Premium AI
              </p>
              <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
                <Image src={plus2} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
              <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">
                Unlimited Usage
              </p>
              <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
                <Image src={plus2} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
              <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">
                Dedicated Support
              </p>
              <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
                <Image src={plus2} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
                <Image src={plus1} alt="plus svg" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
      <section>
        <div className="bg-primary-100 py-4">
          <div className="flex flex-col md:flex-row items-center justify-around ">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl md:text-6xl md:w-3/4 font-inter">JOIN THE CAMPUS GENIE COMMUNITY</h2>
              <p className="mt-8 text-sm md:text-base lg:text-lg">
              Join the thousands of users who are already experiencing the
                difference with Afro AI Assistant. Whether you&apos;re in Lagos,
                Nairobi, or anywhere in between, Afro AI Assistant is here to
                empower you on your digital journey.
              </p>
            </div>

            <button className="flex items-center mt-3 justify-center gap-2 bg-black w-3/4 max-w-xs md:max-w-sm h-16 rounded-xl px-4">
              <p className="text-primary-50 text-xl font-inter">TRY CAMPUS GENIE</p>
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

export default Gene;
