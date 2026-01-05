"use client";

import type { User } from "@myrtle/types";
import { useQuery } from "@tanstack/react-query";

import { getAuthToken } from "@/features/Auth/utils";
import { client } from "@/utils/hono";

export type UseGetUserProps = {
  userId?: string;
};

export const useGetUser = ({ userId }: UseGetUserProps) => {
  return useQuery<User, Error>({
    queryKey: ["users", userId],
    queryFn: async () => {
      const token = await getAuthToken();
      const response = await client.api.users[":userId"].$get(
        { param: { userId: userId! } },
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
