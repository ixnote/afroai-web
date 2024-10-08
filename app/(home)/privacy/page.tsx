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
      <section className=" max-w-7xl mx-auto h-auto min-h-[600px] md:min-h-[800px] py-20 md:py-32 lg:py-32 lg:pt-[200px] text-primary-50">
        <button className="border px-4 py-2 font-thin flex gap-2 items-center rounded-lg">
          {/* <Image src={logo} alt="Logo" /> */}
          <h2 className="flex gap-2">
            Last updated: <span>1st Oct. 2024</span>
          </h2>
        </button>

        <div className="flex flex-col items-center lg:flex-row lg:items-end py-10">
          <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left">
            PRIVACY POLICY
          </h2>
          <div className="mt-6 lg:mt-0 lg:mr-32">
            <Image src={eye} alt="Icon" width={70} />
          </div>
        </div>

        <hr className="opacity-50" />

        <div className="flex flex-col items-start justfy-start gap-4 my-8 w-[90%] mx-auto lg:w-full">
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              1. Introduction
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              Welcome to AFRO AI (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our mobile application and website
              (collectively, the &quot;Service&quot;).
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              2. Information We Collect
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              We collect information that you provide directly to us when you
              use our Service:
              <p>
                - Personal Information: This may include your name, email
                address, and profile information associated with your Google
                account when you use Google OAuth to sign in.
              </p>
              <p>
                {" "}
                - User Content: Any data and content that you input into our AI
                assistants or RAG application.
              </p>
              <p>
                - Usage Data: Information on how you use the Service, including
                your interactions with our AI models.
              </p>
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              3. How We Use Your Information
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              We use the information we collect for various purposes, including:
              <p>- To provide and maintain our Service</p>
              <p>
                {" "}
                - User Content: Any data and content that you input into our AI
                assistants or RAG application.
              </p>
              <p>
                - To personalize your experience with our AI assistants and RAG
                application
              </p>
              <p>- To improve our Service and develop new features</p>
              <p>
                - To communicate with you about updates or changes to our
                Service
              </p>
              <p>- To detect, prevent, and address technical issues</p>
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              4. Data Sharing and Disclosure
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              We may share your information in the following situations:
              <p>
                - With service providers who help us operate our Service (e.g.,
                cloud storage providers)
              </p>
              <p> - To comply with legal obligations</p>
              <p>- To protect our rights, privacy, safety, or property</p>
              <p>- With your consent or at your direction</p>
              <p>
                - To communicate with you about updates or changes to our
                Service
              </p>
              <p>- To detect, prevent, and address technical issues</p>
              We do not sell your personal information to third parties.
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              5. Data Security
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              We implement appropriate technical and organizational measures to
              protect your information. However, no method of transmission over
              the Internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              6. Your Rights and Choices
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              Depending on your location, you may have certain rights regarding
              your personal information, such as:
              <p>- Access to your personal information</p>
              <p>- Correction of inaccurate or incomplete information</p>
              <p>- Deletion of your personal information</p>
              <p>
                - Objection to or restriction of our use of your information
              </p>
              To exercise these rights, please contact us using the information
              provided at the end of this policy.
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              7. Children&apos;s Privacy
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              Our Service is not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13.
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              8. Changes to This Privacy Policy
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date.
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              9. Contact Us
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              If you have any questions about this Privacy Policy, please
              contact us at:
              <p>AFRO AI</p>
              <p>
                -{" "}
                <a href="support@afrocentricai.com">
                  support@afrocentricai.com
                </a>
              </p>
              <p>
                - Flat 2 , Block 25 Karu site, by court roundabout, UND
                Street Karu, Abuja
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
