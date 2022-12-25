import { NextAuthOptions } from "next-auth";

const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 59 * 24 * 30, // 30d - 1m,
  },
  providers: [],
};

export default nextAuthOptions;
