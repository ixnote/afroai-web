import Image from "next/image";
import logo from "@/public/assets/svgs/about.svg";
import icon from "@/public/assets/images/Animated Icon.png";
import arrow from "@/public/assets/svgs/resourceArrow.svg";
import arrow1 from "@/public/assets/images/arrowUp.png";

import resources1 from "@/public/assets/svgs/resources1.svg";
import resources2 from "@/public/assets/svgs/resources2.svg";
import resource from "@/public/assets/svgs/resourceIcon.svg";
import resources3 from "@/public/assets/svgs/resources3.svg";
import resources4 from "@/public/assets/svgs/resources4.svg";
import resources5 from "@/public/assets/svgs/resources5.svg";





const Resources = () => {
  return (
    <div>
      <section className="h-auto min-h-[800px] py-20 lg:py-20 text-primary-50 mx-4 lg:mx-8">
  <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
          <Image src={logo} alt="" />
          <h2 className="flex gap-2"> <span>/</span>RESOURCES</h2>
        </button>
  <div className="flex flex-col lg:flex-row items-center lg:items-end py-10">
    <h2 className="text-xl lg:text-8xl w-full text-center lg:text-left">
      EXPLORE OUR RESOURCES
    </h2>
    <div className="mt-6 lg:mt-12 lg:ml-auto">
      <Image src={icon} alt="" width={60} className="w-12 lg:w-16" />
    </div>
  </div>
  <hr className="opacity-50 my-8 w-full" />
  <div className="flex flex-col md:flex-row justify-around mt-12 h-auto gap-6 ">
    <div className="w-full md:w-2/4 border rounded-xl cursor-pointer shadow-2xl hover:scale-105 transform transition-transform duration-500 ease-in-out">
      <Image src={resources1} alt="" className="w-full h-48 md:h-80 object-cover rounded-t-xl" />
      <div className="p-6 bg-black text-primary-50 rounded-b-xl">
        <button className="font-thin px-6 py-3 bg-white text-black rounded-lg mb-4">WEBINARS</button>
        <h2 className="text-xl md:text-2xl font-inter">
          Engage with Afro AI Experts
        </h2>
      </div>
    </div>
    <div className="w-full md:w-2/4 border rounded-xl cursor-pointer shadow-2xl hover:scale-105 transform transition-transform duration-500 ease-in-out">
      <Image src={resources2} alt="" className="w-full h-48 md:h-80 object-cover rounded-t-xl" />
      <div className="p-6 bg-black text-primary-50 rounded-b-xl">
        <button className="font-thin px-6 py-3 bg-white text-black rounded-lg mb-4">ARTICLE</button>
        <h2 className="text-xl md:text-2xl font-inter">
          Visualizing Afro AI&apos;s Impact
        </h2>
      </div>
    </div>
  </div>
</section>

<section className="h-auto min-h-[800px] py-20 lg:py-32 text-primary-50 mx-4 lg:mx-4">
  <div className="flex flex-col lg:flex-row justify-between py-8">
    <div className="flex gap-2 flex-wrap">
      <button className="border px-4 lg:px-10 py-2 rounded-lg border-primary-100 text-primary-100">Featured</button>
      <button className="border px-4 lg:px-10 py-2 rounded-lg border-primary-50 text-primary-50">Article</button>
      <button className="border px-4 lg:px-10 py-2 rounded-lg border-primary-50 text-primary-50">Case Studies</button>
      <button className="border px-4 lg:px-10 py-2 rounded-lg border-primary-50 text-primary-50">Whitepaper</button>
    </div>
    <h2 className="font-thin mt-4 lg:mt-0">showing: <span className="font-inter">Featured</span></h2>
  </div>
  <hr className="opacity-50" />
  <div className="w-full lg:w-[40%] flex flex-col md:flex-row items-center py-6 text-2xl md:text-4xl font-inter">
    <h2 className="text-center md:text-left">FEATURED CASE STUDIES</h2>
    <Image src={resource} alt="message icon" width={60} className="lg:mb-10 md:mr-32" />
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16 md:py-">
    <div className="w-full border rounded-xl cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out">
      <Image src={resources3} alt="" height={400} className="w-full rounded-t-xl" />
      <button className="font-thin px-6 py-3">ARTICLE</button>
      <h2 className="py-3 text-xl md:text-2xl font-inter bg-black text-primary-50 px-6">Mastering Afro AI&apos;s Features</h2>
    </div>
    <div className="w-full border rounded-xl cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out">
      <Image src={resources4} alt="" height={400} className="w-full rounded-t-xl" />
      <button className="font-thin px-6 py-3">CASE STUDY</button>
      <h2 className="py-3 text-xl md:text-2xl font-inter bg-black text-primary-50 px-6">Real-Life Application Of...</h2>
    </div>
    <div className="w-full border rounded-xl cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out">
      <Image src={resources5} alt="" height={400} className="w-full rounded-t-xl" />
      <button className="font-thin px-6 py-3">WHITEPAPER</button>
      <h2 className="py-3 text-xl md:text-2xl font-inter bg-black text-primary-50 px-6">Deep Dive into Afro AI&apos;s Technol...</h2>
    </div>
  </div>
  <button className="border flex items-center gap-2 mx-auto px-4 lg:px-10 py-2 rounded-lg border-primary-100 text-primary-100 mt-8">
    See All
    <Image src={arrow} alt="arrow up" width={20} />
  </button>
</section>
<section>
      <div className="bg-primary-100 py-12   ">
        <div className="flex flex-col md:flex-row items-center justify-around px-4 md:px-8 lg:px-16">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl">READY TO MOVE FASTER?</h2>
            <p className="mt-8 text-sm">
              Ready to accelerate your progress? Experience the speed and
              efficiency of Afro AI. Try it now and unleash the potential of
              tailored AI solutions.
            </p>
          </div>
          <div className="mt-8 md:mt-0  md:ml-24">
            <button className="flex items-center gap-2 bg-black text-primary-50 text-xl px-20 py-3 rounded-lg">
              Try AI
              <span>
                <Image src={arrow} alt="" width={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
      </section>

        {/* <section className="TRY AI">
        <div className="bg-primary-100 mt-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-around px-4 md:px-8 lg:px-16">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold">
                READY TO MOVE FASTER?
              </h2>
              <p className="mt-8 text-sm md:text-lg">
                Ready to accelerate your progress? Experience the speed and effeciency of afro AI. Try it now and unleash the potential of tailored Ai solutions.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <button className="flex items-center gap-2 bg-black text-primary-50 text-xl px-16 py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                Try AI
                <span>
                  <Image src={arrow1} alt="Arrow Icon" width={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Resources