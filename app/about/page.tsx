"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import icon from "@/public/assets/images/Animated Icon.png";
import logo from "@/public/assets/svgs/about.svg";
import about1 from "@/public/assets/images/about1.png";
import muscles from "@/public/assets/svgs/muscles.svg";
import message from "@/public/assets/svgs/message.svg";
import arrow from "@/public/assets/images/arrowUp.png";
import values from "@/public/assets/svgs/park.svg";
import eye from "@/public/assets/svgs/eye.svg";
import map from "@/public/assets/svgs/map.svg";
import quote from "@/public/assets/svgs/qoute.svg";
import team from "@/public/assets/images/about2.png";
import group from "@/public/assets/svgs/team.svg";
import mission from "@/public/assets/images/about3.png";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = container.querySelectorAll(".fade-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div>
      {/* <section className="h-auto min-h-[600px] md:min-h-[800] py-20 md:py-32 lg:py-32 text-primary-50 mx-4 lg:mx-4">
        <button className="border px-4 lg:px-10 py-2 font-thin  flex gap-2 items-center rounded-lg">
          <Image src={logo} alt="" />
          <h2 className="flex gap-2">
            {" "}
            <span>/</span>ABOUT
          </h2>
        </button>

        <div className="flex flex-col lg:flex-row items-end py-10">
          <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left">
            WE EXIST TO EMPOWER AFRICA WITH AI
          </h2>
          <div className="mt-6 md:mr-32">
            <Image src={icon} alt="" width={70} />
          </div>
        </div>
        <hr className="opacity-50" />
        <Image
          src={about1}
          alt="about1"
          className="w-full h-auto object-cover rounded-lg mt-8"
        />
      </section> */}
      <section className="h-auto min-h-[600px] md:min-h-[800px] py-20 md:py-32 lg:py-32 text-primary-50 mx-4 lg:mx-4">
        <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
          <Image src={logo} alt="Logo" />
          <h2 className="flex gap-2">
            <span>/</span>ABOUT
          </h2>
        </button>

        <div className="flex flex-col items-center lg:flex-row lg:items-end py-10">
          <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left">
            WE EXIST TO EMPOWER AFRICA WITH AI
          </h2>
          <div className="mt-6 lg:mt-0 lg:mr-32">
            <Image src={icon} alt="Icon" width={70} />
          </div>
        </div>

        <hr className="opacity-50" />

        <Image
          src={about1}
          alt="About"
          className="w-full h-auto object-cover rounded-lg mt-8"
        />
      </section>

      <section className="h-auto min-h-[600px] text-primary-50 mx-4 lg:mx-4 ">
        <button className="border px-6 lg:px-10 py-3 rounded-lg font-thin">
          WELCOME
        </button>
        <div className="w-full lg:w-[43%] flex flex-col md:flex-row items-center py-6 text-2xl md:text-4xl font-inter">
          <h2 className="text-center md:text-left">
            EMPOWERING AFRICA&apos;S FUTURE
          </h2>
          <Image
            src={muscles}
            alt="icon muscle"
            width={60}
            className="lg:mb-10 md:mr-36 "
          />
        </div>
        <hr className="md:mt-8 opacity-50" />
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 mt-8 md:mt-20">
          <p className="w-full md:w-1/2 text-lg md:text-xl px-4 md:px-8 font-inter">
            Welcome to Afro Intelligence, your trusted partners driving
            innovation and progress through affordable afrocentric AI solutions.
          </p>
          <p className="w-full md:w-1/2 text-md md:text-lg px-4 md:px-8 font-thin">
            As your trusted partners, we are committed to revolutionizing the
            landscape of technology in Africa. Our mission is clear: to make
            cutting-edge AI solutions accessible to all, empowering individuals
            and organizations to thrive in the digital era. With a focus on
            affordability, we ensure that afrocentric AI is within reach,
            enabling communities across the continent to harness the
            transformative power of technology. By understanding local nuances,
            we foster inclusive development and empower communities to thrive.
          </p>
        </div>
      </section>
      <section className=" text-primary-50  mx-4">
        <button className="text-primary-50 font-thin border px-8 py-1 rounded-lg">
          OUR STORY
        </button>
        <div className="w-full lg:w-[45%] flex flex-col md:flex-row items-center py-6 text-2xl md:text-4xl font-inter">
          <h2 className="text-center md:text-left">
            THE STORY OF AFRO INTELLIGENCE
          </h2>
          <Image
            alt="message icon"
            width={60}
            src={message}
            className="lg:mb-10 md:mr-32"
          />
        </div>
        <hr className="opacity-50" />

        <div className="scroll-smooth" ref={containerRef}>
          <div className="pt-10 md:mt-16 fade-section">
            <p className="font-inter md:text-4xl text-xl tracking-[0.5px] text-center w-2/5 mx-auto leading-10">
              Afro Intelligence Emerged From A Shared Understanding: The AI
              Landscape Was Out Of Reach For Many Africans Due To Cost And
              Accessibility Barriers. Driven By Inclusivity, Our Divers Team
              United To Denocratize AI.
            </p>
          </div>
          <div className="pt-16 fade-section">
            <p className="font-inter md:text-4xl text-xl tracking-[0.5px] text-center w-2/5 mx-auto leading-10">
              We Knew That Tailoring AI To African Needs Was Essential. Our
              Journey Began With A Commitment To Affordability and Inclusivity,
              Ensuring That EveryOne Could Access The Benefit Of AI.
            </p>
          </div>
          <div className="pt-16 fade-section">
            <p className="font-inter md:text-4xl text-xl tracking-[0.5px] text-center w-2/5 mx-auto leading-10">
              Today, Afro Intelligence Stands As Beacon Of Hope, Offering Not
              Just AI Solutions But Empowerment For All Africans. Our Mission
              Remains Unwavering As We COntinue Innovate, Shaping A Future Where
              AI Is Accessible To Alll Who Dream To Progress.
            </p>
          </div>
        </div>

        <section className="h-auto min-h-screen  mx-4 lg:mx-4 mt-16 lg:mt-20">
          <button className="text-primary-50 font-thin border px-6 lg:px-8 py-1 rounded-lg">
            OUR VALUES
          </button>
          <div className="w-full flex flex-col lg:flex-row py-4">
            <div className="flex flex-col lg:flex-row items-start py-4 w-full lg:w-1/2">
              <h2 className="md:text-4xl text-2xl font-inter lg:w-3/4 text-black">
                EXPLORING THE CORE VALUES THAT DRIVES AFRO AI
              </h2>
              <div className="mt-4 lg:mt-0 lg:ml-4 flex justify-center lg:justify-start w-full lg:w-auto">
                <Image src={values} alt="message icon" width={60} />
              </div>
            </div>

            <div className="border-l-0 lg:border-l-2 w-full lg:w-3/4 px-4 lg:px-6 mt-8 lg:mt-0">
              <div className="border-b py-4">
                <div className="flex gap-2 items-center">
                  <figure>
                    <Image src={eye} alt="eye icon" />
                  </figure>
                  <h2 className="text-xl lg:text-2xl">Vision</h2>
                </div>
                <p className="w-full lg:w-2/3 mx-0 lg:mx-16 text-lg lg:text-base">
                  We envision a future where AI is not only accessible to
                  Africans but also tailored to their unique cultural,
                  linguistic, and socio-economic contexts, driving inclusive
                  growth and transformation.
                </p>
              </div>
              <div className="border-b py-4">
                <div className="flex gap-2 items-center">
                  <figure>
                    <Image src={map} alt="map icon" />
                  </figure>
                  <h2 className="text-xl lg:text-2xl">Mission</h2>
                </div>
                <p className="w-full lg:w-2/3 mx-0 lg:mx-16 text-lg lg:text-base">
                  Afro AI empowers Africa with accessible AI solutions, bridging
                  the digital gap and driving inclusive growth. Committed to
                  affordability, accessibility, and afrocentric innovation, we
                  unlock AI&apos;s full potential for a brighter African future.
                </p>
              </div>
              <div className="py-4">
                <div className="flex gap-2 items-center">
                  <figure>
                    <Image src={quote} alt="quote icon" />
                  </figure>
                  <h2 className="text-xl lg:text-2xl">Statement</h2>
                </div>
                <p className="w-full lg:w-2/3 mx-0 lg:mx-16 text-lg lg:text-base">
                  Afro AI empowers Africa with AI solutions, envisioning
                  inclusive growth and innovation. Committed to affordability,
                  accessibility, and afrocentric innovation, we unlock AI&apos;s
                  potential for a prosperous African future.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="h-auto min-h-[600px] text-white mx-4 lg:mx-4 mt-12 lg:mt-12">
          <button className="text-primary-50 font-thin border px-6 lg:px-8 py-1 rounded-lg">
            TEAM
          </button>
          <div className="w-full py-4">
            <div className="flex flex-col lg:flex-row items-start py-8 lg:w-[46%]">
              <h2 className="md:text-4xl text-2xl font-inter text-center lg:text-left">
                THE INNOVATION FOR POSITIVE CHANGE TEAM
              </h2>
              <div className="mt-4 lg:mt-0 lg:ml-4 flex justify-center lg:justify-start w-full lg:w-auto">
                <Image
                  src={group}
                  alt="message icon"
                  width={60}
                  className="md:mr-16 lg:mr-16"
                />
              </div>
            </div>

            <hr className="opacity-50" />
            <div className="mt-16">
              <Image src={team} alt="team images" className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="  mx-4 lg:mx-4  lg:mt-20">
          <button className="text-primary-50 font-thin border px-6 lg:px-8 py-1 rounded-lg">
            MISSION
          </button>
          <div className="w-full py-4">
            <div className="flex flex-col lg:flex-row items-start py-8 lg:w-3/6">
              <h2 className="md:text-4xl text-2xl font-inter text-center lg:text-left">
                REVOLUTIONIZING AFRICA&apos;S ACCESS TO AI
              </h2>
              <div className="mt-4 lg:mt-0 lg:ml-4 flex justify-center lg:justify-start w-full lg:w-auto">
                <Image src={values} alt="message icon" />
              </div>
            </div>

            <hr className="opacity-50" />
            <div className="mt-12 flex flex-col lg:flex-row gap-10">
              <Image
                src={mission}
                alt="mission image"
                className="w-full lg:w-1/2 h-auto"
              />
              <div className="flex flex-col gap-10 w-full lg:w-1/2">
                <p className="text-md lg:text-lg font-thin leading-6">
                  At Afro AI, We are driven by a singular mission: to
                  democratize access to cutting-edge AI technology across the
                  diverse tapestry of Africa. We understand that true progress
                  lies in inclusivity, which is why we are committed to
                  providing affordable, afrocentric solutions that cater to the
                  unique needs of our community. Our dedication knows no bounds
                  as we tirelessly work towards empowering individuals and
                  organizations alike to not just adapt but flourish in the
                  digital age.
                </p>
                <p className="text-md lg:text-lg font-thin leading-6">
                  By bridging the gap between technology and community needs, we
                  are not only shaping a future where AI drives inclusive growth
                  and innovation but also fostering a sense of belonging and
                  empowerment among our people. Through our relentless pursuit
                  of excellence and unwavering commitment to serving our
                  communities, Afro AI is not just revolutionizing the tech
                  landscape; we are shaping a future where every African has the
                  opportunity to thrive and succeed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-primary-100 py-20">
            <div className="flex flex-col md:flex-row items-center justify-around ">
              <div className="w-full md:w-3/5 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl text-black">
                  READY TO MOVE FASTER?
                </h2>
                <p className="mt-8 text-sm md:text-base text-black lg:text-lg">
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
      </section>
    </div>
  );
};

export default About;
