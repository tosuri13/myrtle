import { useGetAuth } from "@/features/Auth/hooks/useGetAuth";
import { useGetUser } from "@/hooks/useGetUser";

export const useProfile = () => {
  const { data: auth } = useGetAuth();
  const userId = auth?.username;

  const { data: user } = useGetUser({ userId });

  return { user };
};
