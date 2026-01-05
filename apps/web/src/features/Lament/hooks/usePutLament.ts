"use cleint";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuthToken } from "@/features/Auth/utils";

import { client } from "@/utils/hono";
import type { InferRequestType } from "hono/client";

type PutLamentVariables = {
  userId: string;
  lamentId: string;
  data: InferRequestType<
    (typeof client.api.users)[":userId"]["laments"][":lamentId"]["$put"]
  >["json"];
};

export const usePutLament = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, lamentId, data }: PutLamentVariables) => {
      const token = await getAuthToken();
      const response = await client.api.users[":userId"].laments[
        ":lamentId"
      ].$put(
        {
          param: { userId, lamentId },
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
