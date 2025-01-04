"use client";

import { useAuth } from "@/features/Auth/hooks/useAuth";
import { Lament } from "@/features/Lament/components/Lament";
import { useGetUserLaments } from "@/features/Lament/hooks/useGetUserLaments";
import { useGetUser } from "@/hooks/useGetUser";

export const Timeline = () => {
  const { data: auth } = useAuth();
  const userId = auth?.name;

  const { data: user } = useGetUser({ userId });
  const { data: laments } = useGetUserLaments({ userId });

  if (!user || !laments) {
    return <div>ローディングなう!!</div>;
  }

  return (
    <div className="flex w-full flex-col gap-[8px] bg-background-secondary py-[8px]">
      {laments.map((lament, index) => (
        <Lament key={index} user={user} lament={lament} />
      ))}
    </div>
  );
};
