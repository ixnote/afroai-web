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
import FeatureItem from "@/components/ui/FeatureItem";

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

          <p className="w-full mx-auto text-xl text-center my-2 lg:text-2xl">
            Afro AI is revolutionizing access to world-class artificial
            intelligence across Africa. Our innovative platform brings the power
            of premium AI models like ChatGPT-4 to every African at an
            affordable rate. You can begin using it for any and every task.
          </p>
          <div className="relative w-full max-w-[1376px] mt-8">
            <Image
              src={assistant}
              alt="AI Assistant"
              className="w-full h-auto max-h-[80vh] object-cover rounded-lg"
            />
          </div>
        </section>

        <section className="w-full my-12 h-auto min-h-[700px] text-primary-50 px-4 lg:px-2 lg:py-14">
          <div className="flex justify-center lg:justify-start">
            <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin uppercase">
              EMPOWERMENT
            </button>
          </div>

          <div className="flex items-center justify-center text-left py-10 text-2xl md:text-4xl font-inter space-x-4 lg:justify-start">
            <h2 className="uppercase">Key Features</h2>
            <Image
              src={light}
              alt="message icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          <hr className="opacity-50 my-8" />

          <div className="flex flex-col md:flex-row md:items-center gap-8 py-8 w-full">
            <p className="w-full md:w-3/6 text-2xl lg:text-4xl text-center md:text-left">
              Affordable Access
            </p>
            <p className="w-full md:w-1/2 text-md text-center md:text-left">
              Pay in three African currencies, making advanced AI accessible to
              all.
            </p>
          </div>

          <hr className="opacity-50 my-8" />

          <div className="flex flex-col md:flex-row md:items-center gap-8 py-8 w-full">
            <p className="w-full md:w-1/2 text-2xl lg:text-4xl text-center md:text-left">
              Multilingual Support
            </p>
            <p className="w-full md:w-1/2 text-md text-center md:text-left">
              Fluent understanding of Hausa, Igbo, and Yoruba languages.
            </p>
          </div>

          <hr className="opacity-50 my-8" />

          <div className="flex flex-col md:flex-row gap-8 py-8 w-full">
            <p className="w-full md:w-1/2 text-2xl lg:text-4xl text-center md:text-left">
              Flexible Pricing
            </p>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <p className="text-md text-center md:text-left">
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
                  <div className="mr-6">●</div> Campus Genie: Interact with your
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

        <section className="w-full h-auto min-h-[800px] mb-20 text-primary-50 px-4 lg:px-2">
          <div className="flex justify-center lg:justify-start">
            <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin">
              PRICING
            </button>
          </div>

          <div className="flex items-center justify-center text-left py-6 text-2xl md:text-4xl font-inter space-x-4 lg:justify-start">
            <h2 className="uppercase">DISCOVER THE PERFECT PLAN</h2>
            <Image
              src={money}
              alt="message icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          <hr className="opacity-50 my-8" />

          {/* Responsive Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full lg:w-4/5 mx-auto mt-10">
            {/* Plan Card - PRO */}
            <div className="flex flex-col items-center p-6 border rounded-lg bg-white/10 w-full">
              <Image
                src={circle}
                alt="circle"
                className="w-20 h-20 object-contain"
              />
              <p className="mt-4 text-2xl font-semibold">PRO</p>
              <p className="mt-2 text-4xl md:text-5xl">&#8358;1,000</p>
              <p className="mt-4 text-center">100% FREE TOKENS/MONTH</p>
              <hr className="opacity-50 my-4 w-full" />
              <div className="flex flex-col gap-2">
                <FeatureItem text="Basic AI Capabilities" active />
                <FeatureItem text="Essential Tools" active />
                <FeatureItem text="Priority Support" active />
                <FeatureItem text="Expanded Features" active />
                <FeatureItem text="Premium AI" active />
                <FeatureItem text="Unlimited Usage" />
                <FeatureItem text="Dedicated Support" active />
              </div>
            </div>

            {/* Plan Card - PREMIUM */}
            <div className="flex flex-col items-center p-6 border border-primary-100 rounded-lg bg-white/10 w-full">
              <Image
                src={diamond}
                alt="diamond"
                className="w-20 h-20 object-contain"
              />
              <p className="mt-4 text-2xl font-semibold">PREMIUM</p>
              <p className="mt-2 text-4xl md:text-5xl">&#8358;2,000</p>
              <p className="mt-4 text-center">100% FREE TOKENS/MONTH</p>
              <hr className="opacity-50 my-4 w-full" />
              <div className="flex flex-col gap-2">
                <FeatureItem text="Basic AI Capabilities" active />
                <FeatureItem text="Essential Tools" active />
                <FeatureItem text="Priority Support" active />
                <FeatureItem text="Expanded Features" active />
                <FeatureItem text="Premium AI" active />
                <FeatureItem text="Unlimited Usage" active />
                <FeatureItem text="Dedicated Support" active />
              </div>
            </div>
          </div>
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
