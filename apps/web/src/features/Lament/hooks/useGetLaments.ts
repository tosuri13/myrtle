"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getAuthToken } from "@/features/Auth/utils/getAuthToken";
import { client } from "@/utils/hono";
import { useAuth } from "@/features/Auth/hooks/useAuth";

export type UseGetLamentsProps = {
  limit?: number;
};

type UseGetLamentsPageParam = {
  limit?: number;
  cursor?: string;
};

export const useGetLaments = ({ limit = 20 }: UseGetLamentsProps) => {
  const { data: auth } = useAuth();
  const userId = auth?.name;

  return useInfiniteQuery({
    queryKey: ["users", userId, "laments"],
    queryFn: async ({ pageParam }) => {
      if (userId === undefined) {
        throw new Error("User ID is undefined");
      }

      const token = await getAuthToken();
      const response = await client.api.users[":userId"].laments.$get(
        {
          param: { userId: userId },
          query: {
            limit: String(pageParam.limit),
            cursor: pageParam?.cursor,
          },
        },
        { headers: { Authorization: token } },
      );

      if (!response.ok) {
        throw new Error("Failed to get the Laments");
      }

      return await response.json();
    },
    initialPageParam: { limit: limit } as UseGetLamentsPageParam,
    getNextPageParam: (lastPage) =>
      lastPage.nextCursor
        ? { limit: limit, cursor: lastPage.nextCursor }
        : undefined,
    enabled: !!userId,
  });
};
