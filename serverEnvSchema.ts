import z from 'zod';

export const envServerSchema = z.object({
  AUTH0_ID: z.string(),
  AUTH0_SECRET: z.string(),
  AUTH0_ISSUER: z.string(),

  DESCOPE_ID: z.string(),
  DESCOPE_SECRET: z.string(),

  FACEBOOK_ID: z.string(),
  FACEBOOK_SECRE: z.string(),

  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),

  GOOGLE_ID: z.string(),
  GOOGLE_SECRET: z.string(),

  TWITTER_ID: z.string(),
  TWITTER_SECRET: z.string(),

  APPLE_ID: z.string(),
  APPLE_SECRET: z.string(),
});
