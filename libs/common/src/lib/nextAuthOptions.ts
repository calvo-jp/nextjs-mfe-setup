import { NextAuthOptions } from "next-auth";

const nextAuthOptions: NextAuthOptions = {
  providers: [],
  pages: {
    error: "/login",
    signIn: "/login",
  },
};

export default nextAuthOptions;
