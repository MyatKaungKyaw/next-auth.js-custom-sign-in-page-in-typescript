import { envServerSchema } from "@/serverEnvSchema";
import NextAuth from "next-auth"
import z from 'zod'
import { authOptions } from "@/lib/auth-options";

type EnvSchemaType = z.infer<typeof envServerSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchemaType { }
  }
}

export default NextAuth(authOptions)