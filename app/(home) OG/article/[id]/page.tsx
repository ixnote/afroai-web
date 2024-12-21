import Image from "next/image";
import logo from "@/public/assets/svgs/about.svg";
import article from "@/public/assets/images/Article.png";
import Link from "next/link";

const Article = () => {
  return (
    <div>
      <section className="h-auto min-h-[800px] py-20 lg:py-26 text-primary-50 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="p-4 lg:p-8">
            <button className="border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg">
              <Image src={logo} alt="" />
              <h2 className="flex gap-2">
                {" "}
                <span>/</span>
                <Link href={"/resources"}>RESOURCES</Link> <span>/</span>ARTICLE
              </h2>
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl py-4">
              Afro AI: Bringing Premium AI to Africa at Affordable Prices
            </h2>
            {/* <p className="text-sm md:text-base py-4 font-thin">
              BY SIMON ITODO / 4 JULY 2024 / 10 MIN READ
            </p> */}
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
              Imagine having access to the world&apos;s most advanced AI
              technology, tailored for Africa and at a fraction of the cost.
              That&apos;s exactly what Afro AI delivers!
            </p>
          </div>
          <div>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              Afro AI isn&apos;t a new model – it&apos;s a game-changer.
              We&apos;ve taken the premium versions of ChatGPT-4 and made them
              accessible to every African. It understands our languages
              fluently. The more we interact with the AI, the better it
              understands our languages.
            </p>
          </div>
          <div>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              For students, we&apos;ve gone even further with Campus Genie and
              Wise Nurse. This specialized tool has been trained on lecture
              notes and exam materials. It doesn&apos;t just regurgitate
              information – it breaks down complex topics into
              easy-to-understand explanations.
            </p>
          </div>
          <div>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              Accessing this powerful AI is simple and flexible. Users can
              purchase tokens, allowing them to pay only for what they need. No
              hefty subscriptions or long-term commitments – just world-class AI
              at your fingertips when you need it.
            </p>
          </div>
          <div>
            {/* <h2 className="text-xl md:text-3xl lg:text-4xl py-4 md:py-6 lg:py-8">
              Mapping Progress and Growth
            </h2> */}
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              Afro AI is democratizing access to cutting-edge technology across
              the continent. Students can ace their exams, professionals can
              boost their skills, and businesses can leverage AI insights
              without breaking the bank while using the premium AI models.
            </p>
          </div>
          <div>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              By using Afro AI, you&apos;re not just helping yourself –
              you&apos;re part of a movement to bring Africa to the forefront of
              the global AI revolution.
            </p>
          </div>
          <div>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              Ready to experience the power of premium AI at African-friendly
              prices? Try Afro AI today. Let&apos;s learn, grow, and innovate
              together – the African way!
            </p>
          </div>
          <div>
            <p className="py-4 md:py-6 lg:py-8 text-md md:text-lg">
              Join the Afro AI revolution now and see how accessible, affordable
              AI can transform your life and our continent.
            </p>
          </div>
        </div>
        <hr className="my-8 w-full opacity-50" />
      </section>
    </div>
  );
};

export default Article;
