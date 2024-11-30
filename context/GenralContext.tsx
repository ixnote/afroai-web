"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { success, error, info } from "@/helpers/Alert";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  const { data: session, status } = useSession(); // Use NextAuth session
  const router = useRouter();

  // MISC
  const [miscLoading, setMiscLoading] = useState(false);
  const [authToken, setAuthToken] = useState();

  // USER
  const [user, setUser] = useState(session?.user || null); // Initial from session

  // PLANS
  const [allPlans, setAllPlans] = useState();
  const [planDetail, setPlanDetail] = useState();
  const [planLoading, setPlanLoading] = useState(false);

  // Fetch subscription plans
  const getAllPlans = async () => {
    try {
      setPlanLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/subscriptions/plans`,
        {
          headers: { "content-type": "application/json" },
        }
      );
      setPlanLoading(false);
      setAllPlans(response.data.data);
    } catch (err: any) {
      error(`"Error fetching plans: ", ${err.response?.data || err.message}`);
      console.error("Error fetching plans:", err.response?.data || err.message);
    } finally {
      setPlanLoading(false);
    }
  };

  // Subscribe to plan
  const subscribeToPlan = async () => {
    try {
      setPlanLoading(true); // Show loading state

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/subscriptions/pay`,
        { plan_id: planDetail },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": authToken, // Token for authentication
          },
        }
      );

      // console.log("🚀 ~ subscribeToPlan ~ response:", response);

      if (response.status === 200) {
        const checkoutUrl = response.data.data.checkoutUrl;

        // Redirect the user to the checkout URL
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        } else {
          error("Checkout URL is missing from the response.");
          throw new Error("Checkout URL is missing from the response.");
        }
      }
    } catch (err: any) {
      console.error(
        "Error during subscription:",
        err.response?.data || err.message
      );

      // Optional: Show error feedback to the user
      error("Failed to initiate subscription. Please try again later.");
    } finally {
      setPlanLoading(false); // Always reset loading state
    }
  };

  useEffect(() => {
    // Sync user from session whenever it updates
    if (status === "authenticated") {
      setUser(session?.user);
      setAuthToken(session?.user?.token);
    }
  }, [session]);

  useEffect(() => {
    getAllPlans();
  }, []);

  useEffect(() => {
    if (planDetail) {
      subscribeToPlan();
    }
  }, [planDetail]);

  return (
    <GeneralContext.Provider
      value={{
        // User
        user,
        setUser,

        // Misc
        authToken,
        miscLoading,
        setMiscLoading,

        // Plans
        allPlans,
        planDetail,
        planLoading,
        setAllPlans,
        setPlanDetail,
        setPlanLoading,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};

export default GeneralProvider;
