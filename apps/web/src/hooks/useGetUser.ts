"use client";

import { User } from "@myrtle/types";
import { useQuery } from "@tanstack/react-query";

import { getAuthToken } from "@/features/Auth/utils/getAuthToken";
import { client } from "@/utils/hono";

export const useGetUser = ({ userId }: { userId: string | undefined }) => {
  return useQuery<User, Error>({
    queryKey: ["users", userId],
    queryFn: async () => {
      if (userId === undefined) {
        throw new Error("User ID is undefined");
      }

      const token = await getAuthToken();
      const response = await client.api.users[":id"].$get(
        { param: { id: userId } },
        { headers: { Authorization: token } },
      );

      if (!response.ok) {
        throw new Error("Failed to retrieve the User");
      }

      return await response.json();
    },
    enabled: !!userId,
  });
};
