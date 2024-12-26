"use client";

import { useMemo } from "react";

import { Profile } from "@/features/Profile/types/Profile";
import { User } from "@/types/User";

// FIXME: 実際はAPIに対しての通信を行うが一旦モックする
export const useGetUserProfile = ({ id }: User) => {
  const data: Profile = useMemo(
    () => ({ id: id, bio: "雑用系エンジニアでござい" }),
    [id],
  );

  return { data };
};
