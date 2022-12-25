import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
      emailVerified: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
  }
}
