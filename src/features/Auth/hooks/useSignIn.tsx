import * as Auth from "aws-amplify/auth";
import { useState } from "react";

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (userId: string, password: string) => {
    setIsLoading(true);

    try {
      await Auth.signIn({ username: userId, password });
    } finally {
      setIsLoading(false);
    }
  };

  return { signIn, isLoading };
};
