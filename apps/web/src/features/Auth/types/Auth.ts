import { z } from "zod";

export const authSchema = z.object({
  name: z.string(),
});

export type Auth = z.infer<typeof authSchema>;
