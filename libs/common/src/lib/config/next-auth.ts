import { faker } from "@faker-js/faker";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const nextAuthConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          type: "email",
          name: "email",
          label: "Email",
        },
      },
      async authorize(credentials) {
        const input = z
          .strictObject({ email: z.string().email() })
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
  pages: {
    error: "/login",
    signIn: "/login",
  },
};

export default nextAuthConfig;
