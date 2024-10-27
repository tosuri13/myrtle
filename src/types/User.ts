import { z } from "zod";

export const userScheme = z.object({
  id: z.string(),
  name: z.string(),
});

export type User = z.infer<typeof userScheme>;
