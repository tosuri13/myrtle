"use client";

import { Loader2 } from "lucide-react";

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
    return (
      <div className="mt-[32px] flex w-full justify-center">
        <Loader2 className="size-[32px] animate-spin stroke-icon-primary" />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-[8px] bg-background-secondary py-[8px]">
      {laments.map((lament, index) => (
        <Lament key={index} user={user} lament={lament} />
      ))}
    </div>
  );
};
