"use cleint";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuthToken } from "@/features/Auth/utils";

import { client } from "@/utils/hono";
import type { InferRequestType } from "hono/client";

type PutUserVariables = {
  userId: string;
  data: InferRequestType<(typeof client.api.users)[":userId"]["$put"]>["json"];
};

export const usePutUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, data }: PutUserVariables) => {
      const token = await getAuthToken();
      const response = await client.api.users[":userId"].$put(
        {
          param: { userId },
          json: data,
        },
        { headers: { Authorization: token } },
      );

      if (!response.ok) {
        throw new Error("Failed to add the Lament");
      }
    },
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries({
        queryKey: ["users", userId],
      });
    },
  });
};
