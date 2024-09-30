import { oauthOptions } from "@/lib/oauth-options";
import NextAuth from "next-auth";

export async function generateStaticParams() {
  return [];
}

const handler = NextAuth(oauthOptions);

export { handler as GET, handler as POST };
