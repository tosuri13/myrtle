"use cleint";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuthToken } from "@/features/Auth/utils";
import type { InferRequestType } from "hono/client";

import { client } from "@/utils/hono";

type PostLamentVariables = {
  userId: string;
  data: InferRequestType<
    (typeof client.api.users)[":userId"]["laments"]["$post"]
  >["json"];
};

export const usePostLament = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, data }: PostLamentVariables) => {
      const token = await getAuthToken();
      const response = await client.api.users[":userId"].laments.$post(
        {
          param: { userId: userId },
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
        queryKey: ["users", userId, "laments"],
      });
    },
  });
};
