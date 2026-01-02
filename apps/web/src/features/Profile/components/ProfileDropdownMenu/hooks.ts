"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { useSignOut } from "@/features/Auth/hooks/useSignOut";

export const useProfileDropdownMenu = () => {
  const [open, setOpen] = useState(false);

  const { mutateAsync: signOut } = useSignOut();
  const router = useRouter();

  const onSelect = useCallback(async () => {
    await signOut();
    router.push("/login");
  }, [signOut, router]);

  return { open, setOpen, onSelect };
};
