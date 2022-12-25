import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      credentials: {
        username: {},
        password: {},
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
