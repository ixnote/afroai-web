"use client";

import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";

import FeatureItem from "@/components/ui/FeatureItem";
import money from "@/public/assets/svgs/money.svg";
import circle from "@/public/assets/svgs/circle.svg";
import diamond from "@/public/assets/svgs/diamond.svg";
import { useGeneralContext } from "@/context/GenralContext";
import Spinner from "@/components/spinner/Spinner";
import { useSearchParams } from "next/navigation";

const Plans = () => {
  const [selectedDisplay, setSelectedDisplay] = useState("afro");
  const {
    allPlans,
    setPlanDetail,
    planLoading,
    transactionDetails,
    setTransactionDetails,
  }: any = useGeneralContext();
  // console.log("🚀 ~ Plans ~ allPlans:", allPlans);

  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");

  // useEffect(() => {
  //   // Extract query parameters from URL
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const status = urlParams.get("status") as any;
  //   const tx_ref = urlParams.get("tx_ref") as any;
  //   const transaction_id = urlParams.get("transaction_id") as any;
  //   if (status === "completed") {
  //     setTransactionDetails((item: any) => ({
  //       ...item,
  //       status: status,
  //       tx_ref: tx_ref,
  //       transaction_id: transaction_id,
  //     }));
  //   }
  // }, []);

  useEffect(() => {
    if (status === "completed") {
      setTransactionDetails((item: any) => ({
        ...item,
        status: status,
        tx_ref: tx_ref,
        transaction_id: transaction_id,
      }));
    }
  }, [transaction_id]);

  return (
    <>
      <div className="pt-24 items-center list-none max-w-7xl mx-auto w-full lg:flex lg:flex-col lg:gap-8">
        <section className="w-full h-auto min-h-[800px] mb-20 text-primary-50 px-4 lg:px-2">
          <div className="flex justify-center lg:justify-start">
            <span className="border px-6 lg:px-10 py-3 rounded-lg font-thin cursor-not-allowed">
              OUR PLANS
            </span>
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

          {/* <div className="w-max my-8 rounded-3xl mx-auto bg-white/10  p-2 px-4 flex items-center justify-center">
            <span
              onClick={() => setSelectedDisplay("afro")}
              className={`transition-all duration-300 ease-in-out p-2 px-4 rounded-l-3xl cursor-pointer capitalize hover:bg-black ${
                selectedDisplay === "afro"
                  ? "bg-black text-primary-50"
                  : "text-gray-400"
              }`}
            >
              Afro AI
            </span>
            <span
              onClick={() => setSelectedDisplay("campus")}
              className={`transition-all duration-300 ease-in-out p-2 px-4 cursor-pointer capitalize hover:bg-black ${
                selectedDisplay === "campus"
                  ? "bg-black text-primary-50"
                  : "text-gray-400"
              }`}
            >
              Campus Genie
            </span>
            <span
              onClick={() => setSelectedDisplay("nurse")}
              className={`transition-all duration-300 ease-in-out p-2 px-4 rounded-r-3xl cursor-pointer capitalize hover:bg-black ${
                selectedDisplay === "nurse"
                  ? "bg-black text-primary-50"
                  : "text-gray-400"
              }`}
            >
              Wise Nurse
            </span>
          </div>

          {selectedDisplay === "afro" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full lg:w-4/5 mx-auto mt-10">
                <div className="flex flex-col items-center p-6 border rounded-lg bg-white/10 w-full cursor-pointer hover:border-primary-100">
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

                <div className="flex flex-col items-center p-6 border rounded-lg bg-white/10 w-full cursor-pointer hover:border-primary-100">
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
            </>
          )}

          {selectedDisplay === "campus" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full lg:w-4/5 mx-auto mt-10">
                <div className="flex flex-col items-center p-6 border rounded-lg bg-white/10 w-full cursor-pointer hover:border-green-500 hover:border-[1px]">
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

                <div className="flex flex-col items-center p-6 border rounded-lg bg-white/10 w-full cursor-pointer hover:border-primary-100">
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
            </>
          )}

          {selectedDisplay === "nurse" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full lg:w-4/5 mx-auto mt-10">
                <div className="flex flex-col items-center p-6 border rounded-lg bg-white/10 w-full cursor-pointer hover:border-green-500 hover:border-[1px]">
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

                <div className="flex flex-col items-center p-6 border rounded-lg bg-white/10 w-full cursor-pointer hover:border-primary-100">
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
            </>
          )} */}

          {planLoading ? (
            <div className="w-full h-[50vh] flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full mx-auto mt-10">
                {allPlans?.map((plan: any, i: number) => (
                  <div
                    key={i}
                    onClick={() => setPlanDetail(plan.id)}
                    className="flex flex-col items-center p-6 border rounded-lg bg-white/10 w-full cursor-pointer hover:border-green-500 hover:border-[1px]"
                  >
                    <Image
                      src={circle}
                      alt="circle"
                      className="w-20 h-20 object-contain"
                    />
                    <p className="mt-4 text-2xl font-semibold capitalize">
                      {plan.plan_name}
                    </p>
                    <p className="mt-2 text-4xl md:text-5xl">
                      &#8358;{plan.amount}
                    </p>
                    <p className="mt-4 text-center">{plan.description}</p>
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
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

// export default Plans;

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Plans />
    </Suspense>
  );
}
