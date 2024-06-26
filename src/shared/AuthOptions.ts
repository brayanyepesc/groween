import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthenticateUser } from "../app/api/actions/AuthenticateUser";

type Credentials = {
    email: string;
    code: string;
  };

export const nextAuthOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
        async authorize(credentials, req) {
          if (!credentials) {
            return null;
          }
          const { email, code } = credentials as Credentials;
          return await AuthenticateUser(email, code);
        }
      })        
    ],
    secret: process.env.SECRET,
    pages: {
      signIn: "/auth/login"
    },
    callbacks: {
      async redirect() {
        return '/platform'
      }
    }
};