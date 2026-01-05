import { z } from "zod";

export const lamentScheme = z.object({
  lamentId: z.string(),
  userId: z.string(),
  content: z.string(),
  postTime: z.string(),
});
export type Lament = z.infer<typeof lamentScheme>;
