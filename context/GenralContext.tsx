"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { success, error, info } from "@/helpers/Alert";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  const { data: session, status }: any = useSession(); // Use NextAuth session
  const router = useRouter();

  // MISC
  const [miscLoading, setMiscLoading] = useState(false);
  const [authToken, setAuthToken] = useState();
  // console.log("🚀 ~ GeneralProvider ~ authToken:", authToken);

  // USER
  const [user, setUser] = useState(session?.user || null) as any; // Initial from session
  // console.log("🚀 ~ GeneralProvider ~ user:", user);

  // PLANS
  const [allPlans, setAllPlans] = useState();
  const [planDetail, setPlanDetail] = useState();
  const [planLoading, setPlanLoading] = useState(false);

  // TRANSACTION
  const [transactionDetails, setTransactionDetails] = useState({
    status: "",
    tx_ref: "",
    transaction_id: "",
  });

  // ((( ******FUNCTIONS******* ))) //
  const getUser = async () => {
    try {
      setPlanLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/${user?.id}`,
        {
          headers: {
            "content-type": "application/json",
            "x-access-token": authToken,
          },
        }
      );
      setPlanLoading(false);
      setUser(response.data.data);
    } catch (err: any) {
      // error(`"Error fetching user: ", ${err.response?.data || err.message}`);
      console.error("Error fetching user:", err.response?.data || err.message);
    } finally {
      setPlanLoading(false);
    }
  };

  // Fetch subscription plans
  const getAllPlans = async () => {
    try {
      setPlanLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/subscriptions/plans`,
        {
          headers: {
            "content-type": "application/json",
          },
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
      console.log(
        "🚀 ~ subscribeToPlan ~ authToken:",
        authToken ? true : false
      );

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
      error(err.response?.data.message || err.message);
    } finally {
      setPlanLoading(false); // Always reset loading state
    }
  };

  // Transactions
  const callTransactonWebhook = async () => {
    try {
      setPlanLoading(true); // Show loading stat
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/subscriptions/confirm`,
        { transactionDetails },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": authToken, // Token for authentication
            "verif-hash": process.env.NEXT_PUBLIC_FLW_SECRET_HASH,
          },
        }
      );
      // console.log("🚀 ~ callTransactonWebhook ~ response:", response);

      setPlanLoading(false);
      if (response.status === 200) {
        success(response?.data?.message);
        getUser();
        // window.reload(false);
        router.push("/plans");
      }
    } catch (err: any) {
      console.log("🚀 ~ callTransactonWebhook ~ err:", err);
      error(err.response?.data.message || err.message);
    } finally {
      setPlanLoading(false); // Always reset loading state
    }
  };

  // Logout
  // const logoutUser = async () => {
  //   try {
  //     setMiscLoading(true); // Optional: Show loading state during logout

  //     // Clear session via NextAuth sign-out
  //     const response = await axios.post("/api/auth/signout");
  //     if (response.status === 200) {
  //       setUser(null); // Clear user state
  //       setAuthToken(undefined); // Clear auth token
  //       router.push("/login"); // Redirect to login page
  //       info("You were logged out.");
  //     } else {
  //       error("Failed to log out. Please try again.");
  //     }
  //   } catch (err: any) {
  //     console.error("Logout error:", err.response?.data || err.message);
  //     error("An error occurred during logout. Please try again.");
  //   } finally {
  //     setMiscLoading(false); // Reset loading state
  //   }
  // };
  const logoutUser = async () => {
    try {
      setMiscLoading(true); // Optional: Show loading state during logout

      // Trigger session destruction via NextAuth sign-out
      await signOut({ redirect: false }); // No immediate redirect to allow custom handling
      setUser(null); // Clear user state
      setAuthToken(undefined); // Clear auth token
      router.push("/login"); // Redirect to login page
      info("You were logged out.");
    } catch (err: any) {
      console.error("Logout error:", err.response?.data || err.message);
      error("An error occurred during logout. Please try again.");
    } finally {
      setMiscLoading(false); // Reset loading state
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
    if (user?.id) {
      getUser();
    }
  }, [user]);

  useEffect(() => {
    // if (!user) {
    //   router.push("/login");
    // }
    getAllPlans();
  }, []);

  useEffect(() => {
    if (planDetail) {
      subscribeToPlan();
    }
  }, [planDetail]);

  useEffect(() => {
    if (transactionDetails?.status === "completed") {
      callTransactonWebhook();
    }
  }, [transactionDetails]);

  return (
    <GeneralContext.Provider
      value={{
        // User
        user,
        setUser,
        logoutUser,

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

        // Transactions
        transactionDetails,
        setTransactionDetails,
        callTransactonWebhook,
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
