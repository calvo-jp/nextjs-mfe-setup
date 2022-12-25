import { faker } from "@faker-js/faker";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
      },
      async authorize(credentials) {
        const input = z
          .object({ email: z.string().email() })
          .parse(credentials);

        return {
          id: faker.datatype.uuid(),
          name: faker.name.fullName(),
          image: faker.internet.avatar(),
          createdAt: faker.date.past().toISOString(),
          updatedAt: faker.date.recent().toISOString(),
          emailVerified: faker.date.past().toISOString(),
          ...input,
        };
      },
    }),
  ],
  callbacks: {},
  pages: {
    error: "/login",
    signIn: "/login",
  },
};

export default nextAuthOptions;
