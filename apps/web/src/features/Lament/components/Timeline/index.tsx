"use client";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/Button";
import { Lament } from "@/features/Lament/components/Lament";
import { LamentAppendDialog } from "@/features/Lament/components/LamentAppendDialog";

import { useTimeline } from "./hooks";

export const Timeline = () => {
  const {
    user,
    laments,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    sentinelRef,
  } = useTimeline();

  if (!user || isLoading) {
    return (
      <div className="mt-[32px] flex w-full justify-center">
        <Loader2 className="size-[32px] animate-spin stroke-foreground" />
      </div>
    );
  }

  if (laments.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
        <div className="flex flex-col items-center gap-[4px] text-muted-foreground">
          <p className="font-bold text-[20px]">Myrtleへようこそ!!</p>
          <p className="text-[16px]">ここにはあなた以外誰もいません!!</p>
        </div>
        <LamentAppendDialog userId={user.userId}>
          <Button>嘆いてみる!!</Button>
        </LamentAppendDialog>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-[8px] py-[8px]">
      {laments.map((lament) => (
        <Lament key={lament.lamentId} user={user} lament={lament} />
      ))}
      {hasNextPage && (
        <div
          ref={sentinelRef}
          className="flex justify-center py-[16px] text-muted-foreground"
        >
          {isFetchingNextPage ? (
            <Loader2 className="size-[32px] animate-spin stroke-foreground" />
          ) : (
            <p className="text-[14px]">スクロールして続きを読む</p>
          )}
        </div>
      )}
    </div>
  );
};
