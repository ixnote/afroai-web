import { oauthOptions } from '@/lib/oauth-options';
import NextAuth from 'next-auth';

const handler = NextAuth(oauthOptions);

export { handler as GET, handler as POST };
