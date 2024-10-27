"use client";

import { add } from "date-fns";
import { useMemo } from "react";

import { Lament } from "@/features/timeline/types/Lament";

// FIXME: 実際はAPIに対しての通信を行うが一旦モックする
export const useGetUser = () => {
  const data: Lament[] = useMemo(
    () => [
      {
        id: "1",
        postTime: new Date(),
        content: "仕事だるすぎる。早くおうちに帰って寝たいヨォ〜",
      },
      {
        id: "2",
        postTime: add(new Date(), { hours: 1 }),
        content: "傘持ってないのに雨めっちゃ降ってきちゃった(泣)",
      },
      {
        id: "3",
        postTime: add(new Date(), { hours: 3 }),
        content:
          "IKEAのサーモン美味しすぎて泣きそう。今日も冷凍パック買っちゃった...",
      },
    ],
    [],
  );

  return { data };
};
