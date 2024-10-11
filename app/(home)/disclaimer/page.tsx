"use client";

const About = () => {
  return (
    <div>
      <section className=" max-w-7xl mx-auto h-auto min-h-[600px] md:min-h-[800px] py-20 md:py-32 lg:py-32 lg:pt-[200px] text-primary-50">
        <div className="flex flex-col items-center lg:items-end py-10">
          <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left">
            IMPORTANT DISCLAIMER:
          </h2>
          <h2 className="text-3xl lg:text-4xl lg:w-full text-center my-2 lg:text-left">
            Proper Use of Wise Nurse and Campus Genie,
          </h2>
          <h2 className="text-xl lg:w-full text-center lg:text-left">
            PLEASE READ CAREFULLY.
          </h2>
          {/* <div className="mt-6 lg:mt-0 lg:mr-32">
            <Image src={eye} alt="Icon" width={70} />
          </div> */}
        </div>

        <hr className="opacity-50" />

        <div className="flex flex-col items-start justfy-start gap-4 my-8 w-[90%] mx-auto lg:w-full">
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              Wise Nurse and Campus Genie are educational tools designed by Afro
              AI to enhance learning, comprehension, and study efficiency for
              students across various disciplines, including medical and health
              sciences. While these tools can significantly improve your
              understanding and retention of knowledge, it is crucial to
              understand their limitations and proper use.
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              Educational Purpose Only
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              <p>
                ● These tools are intended solely as study aids to help improve
                student performance and comprehension.
              </p>
              <p>
                ● They should be used to enhance learning, not replace
                traditional study methods or professional instruction.
              </p>
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              Not for Professional Advice
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              <p>
                ● Wise Nurse should never be used to diagnose, treat, cure, or
                prevent any disease or medical condition.
              </p>
              <p>
                ● Neither tool can or should be used to prescribe or recommend
                treatments.
              </p>
              <p>
                ● For medical information, always consult with qualified
                healthcare providers or your instructors.
              </p>
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              Academic Integrity
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              <p>
                ● We do not support or condone any form of exam malpractice or
                academic dishonesty.
              </p>
              <p>
                ● These tools are designed to aid in understanding and learning,
                not to provide answers during exams or assessments.
              </p>
              <p>
                ● Users are expected to adhere to their institution&apos;s
                academic integrity policies.
              </p>
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              Performance Enhancement
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              <p>
                ● While our tools aim to improve study efficiency and
                comprehension, individual results may vary.
              </p>
              <p>
                ● The effectiveness of these tools depends on proper and ethical
                use by the student. User Responsibility
              </p>
              <p>
                ● By using Wise Nurse and Campus Genie, you acknowledge that
                they are supplementary educational resources.
              </p>
              <p>
                ● Users are responsible for verifying information and using
                these tools in compliance with their educational
                institution&apos;s policies.
              </p>
              To exercise these rights, please contact us using the information
              provided at the end of this policy.
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="font-bold text-xl text-primary-50">
              Document Handling and Financial Aspects
            </span>
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              <p>
                ● We do not profit from the documents students upload. In fact,
                we incur costs to store these documents in our vector database.
              </p>
              <p>
                ● The only fee students pay is for purchasing AI premium tokens,
                which allow interaction with the uploaded documents using
                premium AI models.
              </p>
              <p>
                ● Our goal is to provide an affordable service that enhances
                educational experiences, not to monetize student materials.
              </p>
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              Remember, Wise Nurse and Campus Genie are here to support your
              learning journey, not to replace critical thinking or professional
              expertise. Use them responsibly to enhance your education and
              achieve your academic goals ethically.
            </span>
          </div>
          <div className="flex flex-col items-start justfy-start gap-4 my-4">
            <span className="w-full text-md md:text-lg px-4 md:px-8 font-thin flex flex-col gap-2">
              Stay curious, study smart, and use our tools responsibly!
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
