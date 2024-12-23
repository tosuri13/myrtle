import { useMutation } from "@tanstack/react-query";
import * as Auth from "aws-amplify/auth";

export const useSignIn = () => {
  return useMutation({
    mutationFn: async ({
      userId,
      password,
    }: {
      userId: string;
      password: string;
    }) => {
      await Auth.signIn({ username: userId, password });
    },
  });
};
