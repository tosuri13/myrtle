import { z } from "zod";

export const lamentScheme = z.object({
  id: z.string(),
  content: z.string(),
  postTime: z.date(),
});

export type Lament = z.infer<typeof lamentScheme>;
