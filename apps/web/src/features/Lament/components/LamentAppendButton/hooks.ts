import { useGetAuth } from "@/features/Auth/hooks/useGetAuth";

export const useLamentAppendButton = () => {
  const { data: auth } = useGetAuth();
  const userId = auth?.username;

  return { userId };
};
