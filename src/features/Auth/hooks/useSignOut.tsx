import { useMutation } from "@tanstack/react-query";
import * as Auth from "aws-amplify/auth";

export const useSignOut = () => {
  return useMutation({
    mutationFn: async () => {
      await Auth.signOut({ global: true });
    },
  });
};
