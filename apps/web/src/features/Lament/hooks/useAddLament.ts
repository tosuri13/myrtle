"use cleint";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuthToken } from "@/features/Auth/utils/getAuthToken";

import { client } from "@/utils/hono";
import { useAuth } from "@/features/Auth/hooks/useAuth";

export const useAddLament = () => {
  const queryClient = useQueryClient();

  const { data: auth } = useAuth();
  const userId = auth?.name;

  return useMutation({
    mutationFn: async ({ content }: { content: string }) => {
      if (userId === undefined) {
        throw new Error("User ID is undefined");
      }

      const token = await getAuthToken();
      const response = await client.api.users[":userId"].laments.$post(
        {
          param: {
            userId: userId,
          },
          json: {
            content: content,
          },
        },
        { headers: { Authorization: token } },
      );

      if (!response.ok) {
        throw new Error("Failed to add the Lament");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users", userId, "laments"],
      });
    },
  });
};
