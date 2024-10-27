import { z } from "zod";

export const lamentScheme = z.object({
  id: z.string(),
  postTime: z.date(),
  content: z.string(),
});

export type Lament = z.infer<typeof lamentScheme>;
