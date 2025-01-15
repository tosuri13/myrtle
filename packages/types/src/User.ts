import { z } from "zod";

export const profileScheme = z.object({
  bio: z.string(),
});

export type Profile = z.infer<typeof profileScheme>;

export const userSchema = z.object({
  userId: z.string(),
  name: z.string(),
  profile: profileScheme,
});

export type User = z.infer<typeof userSchema>;
