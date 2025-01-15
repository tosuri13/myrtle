"use client";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/Button";
import { useAuth } from "@/features/Auth/hooks/useAuth";
import { Lament } from "@/features/Lament/components/Lament";
import { LamentAppendDialog } from "@/features/Lament/components/LamentAppendDialog";
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
        <Loader2 className="stroke-foreground size-[32px] animate-spin" />
      </div>
    );
  }

  if (!laments.length) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
        <div className="text-muted-foreground flex flex-col items-center gap-[4px]">
          <p className="text-[20px] font-bold">Myrtleへようこそ!!</p>
          <p className="text-[16px]">ここにはあなた以外誰もいません!!</p>
        </div>
        <LamentAppendDialog>
          <Button>嘆いてみる!!</Button>
        </LamentAppendDialog>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-[8px] py-[8px]">
      {laments.map((lament, index) => (
        <Lament key={index} user={user} lament={lament} />
      ))}
    </div>
  );
};
