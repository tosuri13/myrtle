"use client";

import type { User } from "@myrtle/types";
import { useQuery } from "@tanstack/react-query";

import { getAuthToken } from "@/features/Auth/utils/getAuthToken";
import { client } from "@/utils/hono";
import { useAuth } from "@/features/Auth/hooks/useAuth";

export const useGetUser = () => {
  const { data: auth } = useAuth();
  const userId = auth?.name;

  return useQuery<User, Error>({
    queryKey: ["users", userId],
    queryFn: async () => {
      if (userId === undefined) {
        throw new Error("User ID is undefined");
      }

      const token = await getAuthToken();
      const response = await client.api.users[":userId"].$get(
        { param: { userId: userId } },
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
