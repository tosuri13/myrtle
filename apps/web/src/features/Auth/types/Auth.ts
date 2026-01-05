import { z } from "zod";

export const authSchema = z.object({
  userId: z.string(),
});

export type Auth = z.infer<typeof authSchema>;
