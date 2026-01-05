import { z } from "zod";

export const userSchema = z.object({
  userId: z.string(),
  name: z.string(),
  bio: z.string(),
  avatarImageUrl: z.string().optional(),
  profileImageUrl: z.string().optional(),
});
export type User = z.infer<typeof userSchema>;

export const mediaTypeSchema = z.enum(["AVATAR", "PROFILE"]);
export type MediaType = z.infer<typeof mediaTypeSchema>;
