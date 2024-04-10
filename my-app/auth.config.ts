import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      console.log(`auth.config nexturl:${nextUrl.pathname}`)
      const studioPage = nextUrl.pathname.startsWith('/studio');
      if (studioPage) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      //  else if (isLoggedIn) {
      //   return Response.redirect(new URL('/', nextUrl));
      // }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;