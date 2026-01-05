import { useQuery } from "@tanstack/react-query";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

import type { Auth } from "@/features/Auth/types/Auth";

export const useGetAuth = () => {
  return useQuery<Auth, Error>({
    queryKey: ["auth"],
    queryFn: async () => {
      await fetchAuthSession();
      const { userId, username } = await getCurrentUser();

      return { userId, username };
    },
  });
};
