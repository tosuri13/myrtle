"use client";

import { useMemo } from "react";

import { User } from "@/types/User";

// FIXME: 実際はAPIに対しての通信を行うが一旦モックする
export const useGetUser = () => {
  const data: User = useMemo(
    () => ({ id: "tosuri13", name: "嘆きのぺんぎん" }),
    [],
  );

  return { data };
};
