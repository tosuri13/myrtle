"use client";

import type { Lament } from "@myrtle/types";
import { useQuery } from "@tanstack/react-query";

import { getAuthToken } from "@/features/Auth/utils/getAuthToken";
import { client } from "@/utils/hono";
import { useAuth } from "@/features/Auth/hooks/useAuth";

export const useGetLaments = () => {
  const { data: auth } = useAuth();
  const userId = auth?.name;

  return useQuery<Lament[], Error>({
    queryKey: ["users", userId, "laments"],
    queryFn: async () => {
      if (userId === undefined) {
        throw new Error("User ID is undefined");
      }

      const token = await getAuthToken();
      const response = await client.api.users[":userId"].laments.$get(
        { param: { userId: userId } },
        { headers: { Authorization: token } },
      );

      if (!response.ok) {
        throw new Error("Failed to get the Laments");
      }

      const data = await response.json();
      return data.laments;
    },
    enabled: !!userId,
  });
};
