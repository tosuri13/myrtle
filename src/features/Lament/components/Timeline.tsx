"use client";

import { Lament } from "@/features/Lament/components/Lament";
import { useGetUserLaments } from "@/features/Lament/hooks/useGetUserLaments";
import { useGetUser } from "@/hooks/useGetUser";

export const Timeline = () => {
  const { data: user } = useGetUser();
  const { data: laments } = useGetUserLaments(user);

  return (
    <div className="flex w-full flex-col gap-[8px] bg-background-secondary py-[8px]">
      {laments.map((lament, index) => (
        <Lament key={index} user={user} lament={lament} />
      ))}
    </div>
  );
};
