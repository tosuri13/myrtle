"use client";

import { Lament } from "@myrtle/types";
import { useQuery } from "@tanstack/react-query";

import { getAuthToken } from "@/features/Auth/utils/getAuthToken";
import { client } from "@/utils/hono";

export const useGetUserLaments = ({
  userId,
}: {
  userId: string | undefined;
}) => {
  return useQuery<Lament[], Error>({
    queryKey: ["users", userId, "laments"],
    queryFn: async () => {
      if (userId === undefined) {
        throw new Error("User ID is undefined");
      }

      const token = await getAuthToken();

      const response = await client.api.users[":id"].laments.$get(
        { param: { id: userId } },
        { headers: { Authorization: token } },
      );

      if (!response.ok) {
        throw new Error("Failed to retrieve the User's Laments");
      }

      const data = await response.json();
      const laments = data.laments.map((lament) => ({
        ...lament,
        postTime: new Date(lament.postTime),
      }));

      return laments;
    },
    enabled: !!userId,
  });
};
