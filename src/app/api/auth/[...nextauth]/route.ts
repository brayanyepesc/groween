import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthenticateUser } from "../../actions/AuthenticateUser";

type Credentials = {
  email: string;
  code: string;
};

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: Record<never, string> | undefined, req) {
        if (!credentials) {
          return null;
        }
        const { email, code } = credentials as Credentials;
        return await AuthenticateUser(email, code);
      }
    })        
  ],
  pages: {
    signIn: "/autenticacion/ingresar"
  },
  callbacks: {
    async redirect() {
      return '/plataforma'
    }
  }
};

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
