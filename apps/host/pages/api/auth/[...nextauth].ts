import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  jwt: {
    maxAge: 60 * 60 * 24 * 29,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: "text" },
        password: { type: "text" },
      },
      async authorize() {
        return {
          id: "",
          name: "",
          image: "",
          email: "",
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
