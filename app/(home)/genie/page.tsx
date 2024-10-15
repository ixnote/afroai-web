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
    // <div className="bg-primary-300">
    <>
      <div className="pt-24 items-center list-none max-w-7xl mx-auto w-full lg:flex lg:flex-col lg:gap-8">
        <section className="h-auto min-h-[800px] pt-24 lg:pt-24 text-primary-50 mx-4 lg:mx-2">
          <div className="flex justify-center lg:justify-start">
            <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
              <Image src={logo} alt="" />
              <h2 className="flex gap-2">
                {" "}
                <span>/</span>CAMPUS GENIE
              </h2>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center py-10">
            <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left uppercase">
              Campus Genie: Your AI-Powered Study Buddy
            </h2>
            <hr className="opacity-50" />
            <div className="mt-6 lg:mt-0">
              <Image
                src={icon}
                alt="Icon"
                className="w-12 h-12 lg:w-20 lg:h-20"
              />
            </div>
          </div>
          <hr className="opacity-50 my-8 " />
          <p className="w-full mx-auto text-2xl text-center my-2">
            Imagine having a super-smart friend who knows all your class notes
            and can answer any question about them. That&apos;s Campus Genie!
            It&apos;s a cool new tool that uses artificial intelligence to help
            you study better and understand your lessons more easily.
          </p>

          <Image
            src={campus}
            alt="AI Assistant"
            className="w-[1376px] h-[704px] object-cover rounded-lg mt-8"
          />
        </section>

        <section className="w-full h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2  lg:py-16">
          <div className="flex justify-center lg:justify-start">
            <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin">
              STUDY COMPANION
            </button>
          </div>
          <div className="w-full lg:w-[40%] flex flex-col md:flex-row items-center py-6 text-2xl md:text-4xl font-inter">
            <h2 className="text-center md:text-left uppercase mr-4">
              How Campus Genie Works
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
              Upload Your Notes
            </p>
            <div className="flex flex-col gap-2 w-full md:w-1/2 text-md font-thin">
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Send your lecture notes or past
                exam questions to documents@afrocenticai.org
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div>Name your file like this:
                Course_University_Level (e.g., Biology101_UniLagos_Year1)
              </h4>
            </div>
          </div>
          <hr className="opacity-50 my-8" />
          <div className="flex flex-col md:flex-row items-center gap-8 py-8">
            <p className="w-full md:w-1/2 text-2xl lg:text-3xl">
              We Check Your Document
            </p>
            <div className="flex flex-col gap-2 w-full md:w-1/2 text-md font-thin">
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Our smart computer program looks
                at your file to make sure it&apos;s clear and readable
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div>If it passes our quality check, we
                save it in our special database
              </h4>
            </div>
          </div>
          <hr className="opacity-50 my-8" />
          <div className="flex flex-col md:flex-row items-center gap-8 py-8">
            <p className="w-full md:w-1/2 text-2xl lg:text-3xl">
              Get Ready to Study
            </p>
            <div className="flex flex-col gap-2 w-full md:w-1/2 text-md font-thin">
              <h4 className="flex items-start">
                <div className="mr-6">●</div>We&apos;ll send you an email when
                your notes are ready to use
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div>Now you can ask questions about
                your notes using super-smart AI like ChatGPT
              </h4>
            </div>
          </div>
          <hr className="opacity-50 my-8" />
          <div className="flex flex-col md:flex-row items-center gap-8 py-8">
            <p className="w-full md:w-1/2 text-2xl lg:text-3xl">
              Start Learning
            </p>
            <div className="flex flex-col gap-2 w-full md:w-1/2 text-md font-thin">
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Ask Campus Genie anything about
                your notes
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div>It&apos;s like having a personal
                tutor available 24/7!
              </h4>
            </div>
          </div>
          <hr className="opacity-50 font-thin" />
        </section>

        <section className="w-full h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2  lg:py-16">
          <div className="flex justify-center lg:justify-start">
            <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin uppercase">
              Did you know?
            </button>
          </div>
          <div className="w-full lg:w-[40%] flex flex-col md:flex-row items-center py-6 text-2xl md:text-4xl font-inter">
            <h2 className="text-center md:text-left uppercase mr-4">
              Cool Things to Know
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
            <p className="w-full md:w-1/2 text-2xl lg:text-3xl">Save Time</p>
            <p className="w-full md:w-1/2 text-md">
              Check our list of already uploaded courses. If your notes are
              there, you can use them right away!
            </p>
          </div>
          <hr className="opacity-50 my-8" />
          <div className="flex flex-col md:flex-row items-center gap-8 py-8">
            <p className="w-full md:w-1/2 text-2xl lg:text-3xl">
              Learn How to Use It
            </p>
            <p className="w-full md:w-1/2 text-md">
              Watch short videos on our YouTube channel or check our resources
              section to become a Campus Genie pro
            </p>
          </div>
          <hr className="opacity-50 my-8" />
          <div className="flex flex-col md:flex-row items-center gap-8 py-8">
            <p className="w-full md:w-1/2 text-2xl lg:text-3xl">
              Choose Your AI
            </p>
            <p className="w-full md:w-1/2 text-md">
              You can use ChatGPT to interact with your notes
            </p>
          </div>
          <hr className="opacity-50 font-thin" />
        </section>

        <div className="flex flex-col gap-2 mx-auto my-24">
          <p className="w-[90%] mx-auto text-lg text-center my-2 text-primary-50">
            Imagine having a super-smart friend who knows all your class notes
            and can answer any question about them. That&apos;s Campus Genie!
            It&apos;s a cool new tool that uses artificial intelligence to help
            you study better and understand your lessons more easily.
          </p>
          <p className="w-[90%] mx-auto text-lg text-center my-2 text-primary-50">
            Ready to become a study superhero? Try Campus Genie today and see
            how it can transform your learning experience!
          </p>
        </div>

        <section className="h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2 w-full">
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
      </div>
      <section>
        <div className="bg-primary-100 py-4">
          <div className="flex flex-col md:flex-row items-center justify-around ">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl md:text-6xl md:w-3/4 font-inter">
                JOIN THE CAMPUS GENIE COMMUNITY
              </h2>
              <p className="mt-8 text-sm md:text-base lg:text-lg">
                Join the thousands of users who are already experiencing the
                difference with Afro AI Assistant. Whether you&apos;re in Lagos,
                Nairobi, or anywhere in between, Afro AI Assistant is here to
                empower you on your digital journey.
              </p>
            </div>

            <button className="flex items-center mt-3 font-inter text-xl justify-center gap-2 text-primary-50 hover:bg-primary-50 hover:text-black  bg-black  w-3/4 max-w-xs md:max-w-sm h-16 rounded-xl px-4">
              TRY CAMPUS GENIE
              <span className=" hover:text-black">
                <Image src={arrow} alt="Arrow" width={25} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gene;
