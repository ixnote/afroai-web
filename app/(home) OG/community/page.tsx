"use client";
import Image from "next/image";
import light from "@/public/assets/svgs/light.svg";
import Link from "next/link";

const Community = () => {
  return (
    <>
      <section className=" max-w-7xl mx-auto py-20 lg:pt-[200px] text-primary-50">
        <div className="w-[90%] mx-auto flex  gap-4 justify-between items-center lg:w-full">
          <button className="border px-4 py-2 font-thin flex gap-2 items-center rounded-lg">
            <h2 className="flex gap-2 uppercase">Community</h2>
          </button>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-end py-10">
          <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left">
            Community
          </h2>
          <div className="mt-6 lg:mt-0 lg:mr-32">
            <Image src={light} alt="Icon" width={70} />
          </div>
        </div>

        <hr className="opacity-50" />

        <div className="flex flex-col items-start justfy-start gap-4 my-8 w-[90%] mx-auto lg:w-full">
          <div className="flex flex-col items-start justfy-start gap-12 my-4">
            <span className="font-semibold text-xl text-primary-50">
              Join the vibrant Afro AI family! Our community is a melting pot of
              African innovation, where minds from across the continent connect,
              collaborate, and create.
            </span>
            <div className="flex flex-col gap-4 w-full ml-8">
              <h4 className="flex items-start">
                <div className="mr-6">●</div>Share Knowledge: Exchange ideas
                with fellow users, fromNigeria, Senegal to Somalia, Cape Town to
                Cairo.
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Solve Challenges: Tackle uniquely
                African problems with the power of collective intelligence.
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Celebrate Diversity: Experience
                the richness of our continent&aposs cultures through AI-powered
                interactions.
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Shape the Future: Your feedback
                helps Afro AI grow smarter and more in tune with African needs.
              </h4>
            </div>
            <span className="font-semibold text-xl text-primary-50">
              Together, we&apos;re not just using AI – we&apos;re defining how
              AI serves Africa. Join us in building a brighter, more connected
              future for our continent!
            </span>
            <span className="font-semibold text-xl text-primary-50">
              #AfroAITogether #InnovateAfrica #AIForAll
            </span>
          </div>
        </div>
      </section>

      <section className=" max-w-7xl mx-auto py-20 text-primary-50">
        <div className="flex flex-col items-center lg:flex-row lg:items-end py-10">
          <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left">
            How It Works
          </h2>
          <div className="mt-6 lg:mt-0 lg:mr-32">
            <Image src={light} alt="Icon" width={70} />
          </div>
        </div>

        <hr className="opacity-50" />

        <div className="flex flex-col items-start justfy-start gap-4 my-8 w-[90%] mx-auto lg:w-full">
          <div className="flex flex-col items-start justfy-start gap-8 my-4">
            <div className="flex flex-col gap-4 w-full ml-8">
              <h4 className="flex items-start">
                <div className="mr-6">●</div>Ask Anything: Type your question in
                any African language. School work, business advice, local info -
                we&apos;ve got you.
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Get Smart Answers: Afro AI taps
                into a vast knowledge base, tailored for African contexts.
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Learn & Grow: Each interaction
                makes Afro AI smarter. Your questions help us serve Africa
                better.
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Connect Anytime: Available 24/7 on
                your phone or computer. No internet? We&apos;re working on SMS
                access.
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Respect Privacy: Your data stays
                yours. We don&apos;t store personal info.
              </h4>
              <h4 className="flex items-start">
                <div className="mr-6">●</div> Affordable Access: Pay only for
                what you use. More lower special rates if you watch our training
                videos (Coming soon).
              </h4>
            </div>
            <span className="font-semibold text-xl text-primary-50">
              Start your Afro AI journey now. Let&apos;s innovate together!
            </span>
          </div>
        </div>
      </section>

      <section className=" max-w-7xl mx-auto py-20 text-primary-50">
        <div className="flex flex-col items-center lg:flex-row lg:items-end py-10">
          <h2 className="text-xl lg:text-8xl lg:w-full text-center lg:text-left">
            Need Help? We&apos;ve Got You!
          </h2>
          <div className="mt-6 lg:mt-0 lg:mr-32">
            <Image src={light} alt="Icon" width={70} />
          </div>
        </div>

        <hr className="opacity-50" />

        <div className="flex flex-col items-start justfy-start gap-4 my-8 w-[90%] mx-auto lg:w-full">
          <div className="flex flex-col items-start justfy-start gap-8 my-4">
            <span className="font-semibold text-xl text-primary-50">
              Welcome to Afro AI&apos;s support hub. We&apos;re here to ensure
              your journey with us is smooth and rewarding.
            </span>
            <div className="flex flex-col gap-2 w-full ml-8">
              <span className="flex flex-col gap-4 font-normal text-primary-50 my-8">
                <span className="text-xl border-b-2 border-primary-100 w-max pb-2">
                  Quick Start Guide
                </span>
                <div className="flex flex-col gap-2 ml-8">
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div>Ask Anything: Type your
                    question in your preferred African language.
                  </h4>
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div> Get Instant Answers: Our AI
                    processes your query and provides a tailored response.
                  </h4>
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div> Refine Your Results: Not quite
                    what you needed? Rephrase or ask for more details.
                  </h4>
                </div>
              </span>
              <span className="flex flex-col gap-4 font-normal text-primary-50 my-8">
                <span className="text-xl border-b-2 border-primary-100 w-max pb-2">
                  Common Issues
                </span>
                <div className="flex flex-col gap-2 ml-8">
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div>Language Not Recognized?
                    We&apos;re constantly expanding. Try English or another
                    major African language for now.
                  </h4>
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div> Unexpected Responses? Be
                    specific in your questions. The more context, the better we
                    understand.
                  </h4>
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div> App Not Loading? Check your
                    internet connection
                  </h4>
                </div>
              </span>
              <span className="flex flex-col gap-4 font-normal text-primary-50 my-8">
                <span className="text-xl border-b-2 border-primary-100 w-max pb-2">
                  Self-Help Resources
                </span>
                <div className="flex flex-col gap-2 ml-8">
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div>Tutorial Videos: Watch our
                    quick guides on{" "}
                    <Link
                      href={"https://youtube.com/afroai"}
                      className="text-base cursor-pointer text-primary-100 hover:text-primary-100/60 mx-2"
                    >
                      YouTube
                    </Link>
                  </h4>
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div> User Forum: Connect with other
                    users at{" "}
                    <Link
                      href={"https://community.afroai.com"}
                      className="text-base cursor-pointer text-primary-100 hover:text-primary-100/60 mx-2"
                    >
                      community.afroai.com
                    </Link>{" "}
                  </h4>
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div> FAQ: Browse our{" "}
                    <Link
                      href={"/contact#faq"}
                      className="text-base cursor-pointer text-primary-100 hover:text-primary-100/60 mx-2"
                    >
                      Frequently Asked Questions
                    </Link>{" "}
                    for instant solutions
                  </h4>
                </div>
              </span>
              <span className="flex flex-col gap-4 font-normal text-primary-50 my-8">
                <span className="text-xl border-b-2 border-primary-100 w-max pb-2">
                  Still Stuck?
                </span>
                <h3>We&apos;re just a message away</h3>
                <div className="flex flex-col gap-2 ml-8">
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div> Chat with us 24/7 in the app
                  </h4>
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div>Email:{" "}
                    <Link
                      href={"support@afroai.com"}
                      className="text-base cursor-pointer text-primary-100 hover:text-primary-100/60 mx-2"
                    >
                      support@afroai.com
                    </Link>
                  </h4>
                  <h4 className="flex items-start">
                    <div className="mr-6">●</div>WhatsApp:{" "}
                    <Link
                      href={"support@afroai.com"}
                      className="text-base cursor-pointer text-primary-100 hover:text-primary-100/60 mx-2"
                    >
                      support@afroai.com
                    </Link>
                  </h4>
                </div>
              </span>
              <span className="flex flex-col gap-4 font-normal text-primary-50 my-8">
                <span className="text-xl border-b-2 border-primary-100 w-max pb-2">
                  Feedback
                </span>
                <h3>
                  Your input shapes Afro AI. Share your experience or suggest
                  improvements. Together, we&apos;re building an AI that truly
                  serves Africa.
                </h3>
                <h3>
                  Remember, every question you ask helps Afro AI grow smarter.
                  Keep learning, keep asking!
                </h3>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
