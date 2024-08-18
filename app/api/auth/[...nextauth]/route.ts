import { oauthOptions } from '@/lib/oauth-options';
import NextAuth from 'next-auth';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(oauthOptions);

// export { handler as GET, handler as POST };
