"use client";

import { useMemo } from "react";

import { Lament } from "@/features/Lament/types/Lament";
import { User } from "@/types/User";

// FIXME: 実際はAPIに対しての通信を行うが一旦モックする
export const useGetUserLaments = ({ id }: User) => {
  const data: Lament[] = useMemo(
    () => [
      {
        id: "1",
        postTime: new Date("2024-10-28T15:00:00"),
        content: "仕事だるすぎる。早くおうちに帰って寝たいヨォ〜",
      },
      {
        id: "2",
        postTime: new Date("2024-10-29T23:00:00"),
        content: "傘持ってないのに雨めっちゃ降ってきちゃった(泣)",
      },
      {
        id: "3",
        postTime: new Date("2024-10-30T04:00:00"),
        content:
          "IKEAのサーモン美味しすぎて泣きそう。今日も冷凍パック買っちゃった...",
      },
      {
        id: "4",
        postTime: new Date("2024-10-31T17:00:00"),
        content: "指スケの新しいセクションを買ってもらった〜!!",
      },
      {
        id: "5",
        postTime: new Date("2024-10-31T21:00:00"),
        content:
          "指スケ飛ばしてたら車輪が一個どっかに飛んでっちゃったよぉ〜!!泣きそう。",
      },
    ],
    [id],
  );

  return { data };
};
