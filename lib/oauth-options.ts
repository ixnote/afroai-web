import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export const oauthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch("/your/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user, account, profile, email, credentials);
      console.log("🚀 ~ signIn ~ account:", account);

      try {
        const response = await axios.post(
          "https://www.afrocentricai.org/auth",
          {
            // google_token: account?.access_token, // Ensure this token exists
            google_token: account?.id_token, // Ensure this token exists
          },
          {
            headers: {
              "Content-Type": "application/json", // Properly format the headers
            },
          }
        );
        console.log("🚀 ~ signIn ~ response:", response);

        if (response.status === 200) {
          console.log("Token successfully sent to backend");
        } else {
          console.error("Failed to send token to backend");
        }
      } catch (error) {
        console.error("Error sending token to backend: ", error);
      }

      //   const isAllowedToSignIn = true;
      //   if (isAllowedToSignIn) {
      //     return true;
      //   } else {
      //     // Return false to display a default error message
      //     return false;
      //     // Or you can return a URL to redirect to:
      //     // return '/unauthorized'
      //   }

      return true;
    },

    async redirect({ url, baseUrl }) {
      //   // Allows relative callback URLs
      //   if (url.startsWith('/')) return `${baseUrl}${url}`;
      //   // Allows callback URLs on the same origin
      //   else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },

    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        if (profile) {
          token.user = profile;
        }
      }

      return token;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      //   session.accessToken = token.accessToken;
      //   session.user.id = token.id;

      return session;
    },
  },
};
