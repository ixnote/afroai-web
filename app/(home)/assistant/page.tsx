import Image from "next/image";
import logo from "@/public/assets/svgs/about.svg";
import icon from "@/public/assets/images/Animated Icon.png";
// import assistant from "@/public/assets/images/assistant.png";
import assistant from "@/public/assets/images/products/AI_1.jpg";
import light from "@/public/assets/svgs/light.svg";
import arrow from "@/public/assets/images/arrowUp.png";
import money from "@/public/assets/svgs/money.svg";
import square from "@/public/assets/svgs/square.svg";
import circle from "@/public/assets/svgs/circle.svg";
import diamond from "@/public/assets/svgs/diamond.svg";
import plus1 from "@/public/assets/svgs/plus2.svg";
import plus2 from "@/public/assets/svgs/plus1.svg";

const Assistant = () => {
  return (
    // <div className="bg-primary-200">
    <>
      <div className="pt-24 items-center list-none max-w-7xl mx-auto w-full lg:flex lg:flex-col lg:gap-8">
        <section className="h-auto min-h-[800px] pt-24  lg:pt-20 text-primary-50 mx-4 lg:mx-4">
          <div className="flex justify-center lg:justify-start">
            <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
              <Image src={logo} alt="" />
              <h2 className="flex gap-2">
                {" "}
                <span>/</span> AI ASSISTANT
              </h2>
            </button>
          </div>
          <div className="flex flex-col lg:flex-row items-center py-10">
            <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left">
              Introducing Afro AI: Empowering Africa with Cutting-Edge AI
            </h2>
            <div className="mt-6 lg:mt-0 lg:ml-4 flex justify-center lg:justify-start w-full lg:w-auto">
              <Image src={icon} alt="Icon" width={60} />
            </div>
          </div>

          <hr className="opacity-50 my-8" />

          <p className="w-full mx-auto text-2xl text-center my-2">
            Afro AI is revolutionizing access to world-class artificial
            intelligence across Africa. Our innovative platform brings the power
            of premium AI models like ChatGPT-4 to every African at an
            affordable rate. You can begin using it for any and every task.
          </p>

          <Image
            src={assistant}
            alt="AI Assistant"
            className="w-[1376px] h-[704px] object-cover rounded-lg mt-8"
          />
        </section>

        <section className="w-full h-auto min-h-[700px] text-primary-50 mx-4 lg:mx-2 lg:py-14">
          <div className="flex justify-center lg:justify-start">
            <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin">
              EMPOWERMENT
            </button>
          </div>
          <div className="w-full lg:w-[45%]  flex flex-col md:flex-row md:gap-4 items-center py-6 text-2xl md:text-4xl font-inter">
            <h2 className="text-center md:text-left uppercase mr-4">
              Key Features
            </h2>
            <Image
              src={light}
              alt="message icon"
              width={60}
              className="lg:mb-4 md:mr-32"
            />
          </div>

          <hr className="opacity-50 my-8" />
          <div className="flex flex-col md:flex-row items-center gap-8 py-8">
            <p className="w-full md:w-3/6 text-2xl lg:text-4xl">
              Affordable Access
            </p>
            <p className="w-full md:w-1/2 text-md">
              Pay in three African currencies, making advanced AI accessible to
              all.
            </p>
          </div>
          <hr className="opacity-50 my-8" />
          <div className="flex flex-col md:flex-row items-center gap-8 py-8">
            <p className="w-full md:w-1/2 text-2xl lg:text-4xl">
              Multilingual Support
            </p>
            <p className="w-full md:w-1/2 text-md">
              Fluent understanding of Hausa, Igbo, and Yoruba languages.
            </p>
          </div>
          <hr className="opacity-50 my-8" />
          <div className="flex flex-col md:flex-row items-center gap-8 py-8">
            <p className="w-full md:w-1/2 text-2xl lg:text-4xl">
              Flexible Pricing
            </p>
            <div className="flex flex-col items-start-justify-start gap-2 w-full md:w-1/2">
              <p className=" text-md">
                Purchase tokens and pay only for what you need – no long-term
                commitments.
              </p>
              <span className="border-b-2 border-primary-100 w-max pb-1">
                Integrated tools
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="flex items-start">
                  <div className="mr-6">●</div> Afro AI: Direct access to
                  ChatGPT-4
                </h4>
                <h4 className="flex items-start">
                  <div className="mr-6">●</div>Campus Genie: Interact with your
                  lecture notes using premium AI
                </h4>
                <h4 className="flex items-start">
                  <div className="mr-6">●</div> Wise Nurse: For medical
                  students, nurses, and health science students to interact with
                  their lecture notes using premium AI
                </h4>
              </div>
            </div>
          </div>
          <hr className="opacity-50 my-8" />
        </section>

        <section className="h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2 w-full">
          <div className="flex justify-center lg:justify-start">
            <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin">
              PRICING
            </button>
          </div>
          <div className="w-full flex flex-col items-center py-6 text-2xl font-inter md:text-4xl md:flex-row lg:w-[45%]">
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
                JOIN THE AFRO AI REVOLUTION
              </h2>
              <p className="mt-8 text-sm md:text-base lg:text-lg">
                Join the thousands of users who are already experiencing the
                difference with Afro AI Assistant. Whether you&apos;re in Lagos,
                Nairobi, or anywhere in between, Afro AI Assistant is here to
                empower you on your digital journey.
              </p>
            </div>

            <button className="flex items-center mt-3 font-inter text-xl justify-center gap-2 text-primary-50 hover:bg-primary-50 hover:text-black  bg-black  w-3/4 max-w-xs md:max-w-sm h-16 rounded-xl px-4">
              TRY AI ASSISTANT
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

export default Assistant;
