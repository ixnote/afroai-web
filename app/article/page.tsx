import Image from "next/image";
import logo from "@/public/assets/svgs/about.svg";
import article from "@/public/assets/images/Article.png";
import arrow1 from "@/public/assets/images/arrowUp.png";
import itodo from "@/public/assets/svgs/itodo.svg";

import resources3 from "@/public/assets/svgs/resources3.svg";
import resources4 from "@/public/assets/svgs/resources4.svg";
import resources5 from "@/public/assets/svgs/resources5.svg";
import resource from "@/public/assets/svgs/resourceIcon.svg";

const Article = () => {
  return (
    <div>
      <section className="h-auto min-h-[800px] py-20 lg:py-26 text-primary-50 mx-4 lg:mx-8">
        <div className="flex flex-col items-center">
          <div className="p-4 lg:p-8">
            <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
              <Image src={logo} alt="" />
              <h2 className="flex gap-2">
                {" "}
                <span>/</span>RESOURCES <span>/</span>ARTICLE
              </h2>
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl py-4">
              VISUALIZING AFRO AI&apos;S IMPACT
            </h2>
            <p className="text-sm md:text-base py-4 font-thin">
              BY SIMON ITODO / 4 JULY 2024 / 10 MIN READ
            </p>
          </div>
        </div>
        <hr className="my-8 w-full opacity-50" />
        <div className="w-full flex justify-center mt-8">
          <Image
            src={article}
            alt="AI Assistant"
            className="w-full max-w-5xl md:max-w-7xl lg:max-w-7xl h-auto object-cover  rounded-lg"
          />
        </div>
      </section>

      <section className="h-auto min-h-[800px] py-20 lg:py-26 text-primary-50 mx-4 lg:mx-8">
        <div className="flex flex-col w-full max-w-5xl mx-auto">
          <div className="text-md md:text-lg py-8">
            <p>
              In recent years, artificial intelligence (AI) has emerged as a
              transformative force, reshaping industries and revolutionizing the
              way we live and work. One notable player in this technological
              revolution is Afro AI, a platform dedicated to democratizing
              access to AI across Africa. In this article, we&apos;ll explore
              how Afro AI is making a tangible impact on Africa&apos;s digital
              landscape through innovative visualization techniques.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl py-4 md:py-6 lg:py-8">
              The Power of Data Visualization
            </h2>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              Data visualization is a powerful tool for making sense of complex
              information and communicating insights effectively. By
              transforming raw data into visual representations such as charts,
              graphs, and maps, data visualization enables us to uncover
              patterns, identify trends, and extract meaningful insights that
              drive informed decision-making.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl py-4 md:py-6 lg:py-8">
              Visualizing Afro AI&apos;s Impact
            </h2>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              Afro AI harnesses the power of data visualization to illustrate
              its impact across various sectors and communities in Africa.
              Through interactive dashboards, infographics, and visual reports,
              Afro AI provides stakeholders with a clear understanding of how AI
              is driving positive change and fostering innovation across the
              continent.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl py-4 md:py-6 lg:py-8">
              Case Studies: Real-Life Examples
            </h2>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              One way Afro AI visualizes its impact is through case studies that
              highlight real-life examples of AI implementation in African
              contexts. These case studies showcase how Afro AI&apos;s solutions
              are being used to address pressing challenges in areas such as
              healthcare, agriculture, education, and finance. By presenting
              data-driven insights in a visual format, Afro AI demonstrates the
              tangible benefits of AI for African communities.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl py-4 md:py-6 lg:py-8">
              Mapping Progress and Growth
            </h2>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              Another powerful visualization tool used by Afro AI is mapping
              technology. By mapping data points such as infrastructure
              development, economic indicators, and social trends, Afro AI
              creates visual representations of progress and growth across
              Africa. These maps provide valuable insights into areas of
              improvement and opportunities for development, helping
              policymakers and organizations make data-driven decisions.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl py-4 md:py-6 lg:py-8">
              Engaging The Community
            </h2>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              In addition to showcasing its impact through visualizations, Afro
              AI actively engages with the community through webinars,
              workshops, and events focused on data visualization and AI. By
              providing educational resources and hosting interactive sessions,
              Afro AI empowers individuals and organizations to leverage the
              power of data visualization for positive change.
            </p>
          </div>
          <div>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              In conclusion, visualizing Afro AI&apos;s impact is not just about
              presenting data—it&apos;s about telling a story. Through
              compelling visualizations and real-life examples, Afro AI
              demonstrates how AI is empowering Africa and shaping its future in
              profound ways. As we harness the power of data visualization to
              drive positive change, the potential for innovation and growth
              knows no bounds.
            </p>
          </div>
        </div>
        <hr className="my-8 w-full opacity-50" />
        <div className="text-primary-50 flex flex-col items-center pt-8">
          <Image
            src={itodo}
            alt="article"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="text-2xl md:text-2xl font-inter">SIMON ITODO</h2>
          <p className="font-thin">AI JOURNALIST</p>
        </div>
      </section>

      <section className="text-primary-50 mx-4 lg:mx-4">
        <div className="flex justify-center lg:justify-start">
          <button className="border px-6 lg:px-10 py-3  rounded-lg font-thin">
            STUDY COMPANION
          </button>
        </div>
        <div className="w-full lg:w-[40%]  flex flex-col md:flex-row items-center py-6 text-2xl md:text-4xl font-inter">
          <h2 className="text-center md:text-left">YOU MAY ALSO LIKE</h2>
          <Image
            src={resource}
            alt="message icon"
            width={60}
            className="lg:mb-10 md:mr-32"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  mt-16 md:py- ">
          <div className="w-full md:w-auto border rounded-xl cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out">
            <Image
              src={resources3}
              alt=""
              height={400}
              className="w-full md:w-auto rounded-t-xl"
            />
            <button className="font-thin px-6 py-3">ARTICLE</button>
            <h2 className="py-3 rounded-xl  text-xl md:text-2xl font-inter bg-black  px-6">
              Mastering Afro AI&apos;s Features
            </h2>
          </div>
          <div className="w-full md:w-auto border rounded-xl cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out">
            <Image
              src={resources4}
              alt=""
              height={400}
              className="w-full md:w-auto rounded-t-xl "
            />
            <button className="font-thin px-6 py-3">CASE STUDY</button>
            <h2 className="py-3 rounded-xl  text-xl md:text-2xl font-inter bg-black  px-6">
              Real- Life Application Of...
            </h2>
          </div>
          <div className="w-full md:w-auto border rounded-xl cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out">
            <Image
              src={resources5}
              alt=""
              height={400}
              className="w-full md:w-auto rounded-t-xl "
            />
            <button className="font-thin px-6 py-3">WHITEPAPER</button>
            <h2 className="py-3 rounded-xl  text-xl md:text-2xl font-inter bg-black  px-6">
              Deep Dive into Afro AI&apos;s Technol....
            </h2>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="bg-primary-100 py-20">
          <div className="flex flex-col md:flex-row items-center justify-around ">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl text-black">READY TO MOVE FASTER?</h2>
              <p className="mt-8 text-sm md:text-base text-black lg:text-lg">
                Ready to accelerate your progress? Experience the speed and
                efficiency of Afro AI. Try it now and unleash the potential of
                tailored AI solutions.
              </p>
            </div>

            <button className="flex items-center mt-3 justify-center gap-2 bg-black w-3/4 max-w-xs md:max-w-sm h-16 rounded-xl px-4">
              <p className="text-primary-50 text-xl font-inter">TRY AI</p>
              <span>
                <Image src={arrow1} alt="Arrow" width={25} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
