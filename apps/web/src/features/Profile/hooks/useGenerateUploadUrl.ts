import { useMutation } from "@tanstack/react-query";
import type { InferRequestType } from "hono/client";

import { client } from "@/utils/hono";
import { getAuthToken } from "@/features/Auth/utils";

type PostGenerateUploadUrlVariables = {
  userId: string;
  data: InferRequestType<
    (typeof client.api.users)[":userId"]["generate-upload-url"]["$post"]
  >["json"];
};

export const useGenerateUplaodUrl = () => {
  return useMutation({
    mutationFn: async ({ userId, data }: PostGenerateUploadUrlVariables) => {
      const token = await getAuthToken();
      const response = await client.api.users[":userId"][
        "generate-upload-url"
      ].$post(
        {
          param: { userId },
          json: data,
        },
        { headers: { Authorization: token } },
      );

      if (!response.ok) {
        throw new Error("Failed to add the Lament");
      }

      return await response.json();
    },
  });
};
