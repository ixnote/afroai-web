import Image from "next/image";
import logo from "@/public/assets/svgs/about.svg";
import icon from "@/public/assets/images/Animated Icon.png";
import assistant from "@/public/assets/images/assistant.png";
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
    <div className="bg-primary-200">
      <section className="h-auto min-h-[1000px] py-20 lg:py-40 text-primary-50 mx-4 lg:mx-2">
  <div className="flex justify-center lg:justify-start">
    <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
      <Image src={logo} alt="Logo" className="w-6 h-6 lg:w-8 lg:h-8" />
      <h2 className="text-base lg:text-lg">/Ai ASSISTANT</h2>
    </button>
  </div>
  <div className="flex flex-col lg:flex-row items-center py-10">
    <h2 className="text-xl lg:text-5xl lg:w-3/6 text-center lg:text-left">
      YOUR DYNAMIC AI COMPANION CONVERSATIONS
    </h2>
    <div className="mt-6 lg:mt-0">
      <Image src={icon} alt="Icon" className="w-12 h-12 lg:w-20 lg:h-20" />
    </div>
  </div>
  <hr className="border-t border-primary-200 my-8" />
  <Image
    src={assistant}
    alt="AI Assistant"
    className="w-full h-auto object-cover rounded-lg mt-8"
  />
</section>

<section className="h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2 py-8 lg:py-16">
  <div className="flex justify-center lg:justify-start">
    <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin">
      EMPOWERMENT
    </button>
  </div>
  <div className="w-full lg:w-3/5 flex flex-col md:flex-row items-center py-8 text-2xl md:text-6xl">
    <h2 className="text-center md:text-left flex-1">
      YOUR AFROCENTRIC AI COMPANION
    </h2>
    <span className="mt-4 md:mt-0 md:ml-4">
      <Image src={light} alt="icon muscle" width={150} />
    </span>
  </div>
  <hr className="border-t border-primary-200 my-8" />
  <div className="flex flex-col md:flex-row items-center gap-8 py-8">
    <p className="w-full md:w-1/2 text-2xl lg:text-4xl">
      Your smart, Afrocentric AI companion, delivering tailored solution for
    </p>
    <p className="w-full md:w-1/2 text-md">
      Afro AI Assistant is a revolutionary AI platform designed to enhance your
      digital experiences. Powered by advanced technology and enriched with
      insights from Africa, it provides personalized solutions tailored to your
      needs. Whether you &apos;re a business owner seeking optimization, a student in
      need of academic support, or an individual navigating daily tasks, Afro AI
      Assistant is your reliable companion. With its Afrocentric intelligence,
      it understands and responds to your queries with precision and context,
      revolutionizing the way you interact with technology.
    </p>
  </div>
  <hr className="border-t border-primary-200 my-8" />
  <div className="flex flex-col md:flex-row items-center gap-8 py-8">
    <p className="w-full md:w-1/2 text-2xl lg:text-4xl">
      Tailored Solutions for Africa&apos;s Challenges
    </p>
    <p className="w-full md:w-1/2 text-md">
      From bustling marketplaces to rural villages, Afro AI Assistant is
      designed to navigate the complexities of African life. Whether you&apos;re a
      business owner seeking to optimize operations, a student in need of
      academic support, or an individual looking for personalized assistance,
      Afro AI Assistant is your reliable companion every step of the way.
    </p>
  </div>
  <hr className="border-t border-primary-200 my-8" />
  <div className="flex flex-col md:flex-row items-center gap-8 py-8">
    <p className="w-full md:w-1/2 text-2xl lg:text-4xl">
      Accessible Intelligence for All
    </p>
    <p className="w-full md:w-1/2 text-md">
      At Afro AI, we believe that access to transformative technology should be
      a right, not a privilege. That&apos;s why Afro AI Assistant is priced
      affordably, ensuring that individuals and businesses across Africa can
      harness its game-changing capabilities without breaking the bank.
    </p>
  </div>
  <hr className="border-t border-primary-50 my-8" />
</section>

      <section className="h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2 py-8 lg:py-16">
  <div className="flex justify-center lg:justify-start">
    <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin">
      PRICING
    </button>
  </div>
  <div className="flex flex-col lg:flex-row items-center py-10">
    <h2 className="text-xl lg:text-6xl lg:w-2/5 text-center lg:text-left">
      DISCOVER THE PERFECT PLAN
    </h2>
    <div className="mt-6 lg:mt-0">
      <Image src={money} alt="" />
    </div>
  </div>
  <hr className="border-t border-primary-50 my-8" />
  <div className="w-full lg:w-3/5 mx-auto flex flex-col md:flex-row justify-between items-center mt-10">
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
  <div className="w-full lg:w-3/5 mx-auto py-6 flex flex-col md:flex-row justify-between items-center mt-16">
    <div className="flex flex-col items-center text-center">
      <span className="text-5xl">#0</span>
      <p className="mt-8">100% FREE TOKENS/MONTH</p>
    </div>
    <div className="flex flex-col items-center text-center mt-10 md:mt-0">
      <span className="text-5xl">#1,000</span>
      <p className="mt-8">2,000 FREE TOKENS/MONTH</p>
    </div>
    <div className="flex flex-col items-center text-center mt-10 md:mt-0">
      <span className="text-5xl">#2,000</span>
      <p className="mt-8">3,000 FREE TOKENS/MONTH</p>
    </div>
  </div>
</section>

<section className="h-auto min-h-[800px] text-primary-50 mx-4 lg:mx-2 py-8 lg:py-16">
  <div>
    <p className="py-6 text-center lg:text-left text-2xl lg:text-3xl font-bold">FEATURES</p>
    <hr className="border-t border-primary-50 my-4" />
    <div className="py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
        <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">Basic AI Capabilities</p>
        <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
        <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">Essential Tools</p>
        <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
        <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">Limited Usage</p>
        <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus2} alt="plus svg" className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
        <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">Priority Support</p>
        <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
          <Image src={plus2} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
        <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">Expanded Features</p>
        <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
          <Image src={plus2} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
        <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">Premium AI</p>
        <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
          <Image src={plus2} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
        <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">Unlimited Usage</p>
        <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
          <Image src={plus2} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
        <p className="w-full lg:w-1/4 text-center lg:text-left text-xl lg:text-2xl">Dedicated Support</p>
        <div className="flex justify-center lg:justify-around w-full lg:w-3/4 gap-4">
          <Image src={plus2} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
          <Image src={plus1} alt="plus svg" className="w-8 h-8" />
        </div>
      </div>
    </div>
  </div>
</section>

<section className="TRY AI">
  <div className="bg-primary-100 mt-4 py-12">
    <div className="flex flex-col md:flex-row items-center justify-around px-4 md:px-8 lg:px-16">
      <div className="w-full md:w-3/5 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold">
          JOIN THE AFRO AI REVOLUTION
        </h2>
        <p className="mt-8 text-sm md:text-lg">
          Join the thousands of users who are already experiencing the
          difference with Afro AI Assistant. Whether you&apos;re in Lagos,
          Nairobi, or anywhere in between, Afro AI Assistant is here to
          empower you on your digital journey.
        </p>
      </div>
      <div className="mt-8 md:mt-0">
        <button className="flex items-center gap-2 bg-black text-primary-50 text-xl px-10 py-3 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
          Try AI Assistant
          <span>
            <Image src={arrow} alt="Arrow Icon" width={20} />
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Assistant;
