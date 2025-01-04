import { useQuery } from "@tanstack/react-query";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

import { Auth } from "@/features/Auth/types/Auth";

export const useAuth = () => {
  return useQuery<Auth, Error>({
    queryKey: ["auth"],
    queryFn: async () => {
      // NOTE: トークンの有効期限切れで処理が失敗する前にトークンをRefetchする
      await fetchAuthSession();

      const { username } = await getCurrentUser();

      if (username === undefined) {
        throw new Error("Failed to retrieve the Username");
      }

      return { name: username };
    },
  });
};
