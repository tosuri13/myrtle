import { z } from "zod";

export const profileScheme = z.object({
  id: z.string(),
  bio: z.string(),
});

export type Profile = z.infer<typeof profileScheme>;
