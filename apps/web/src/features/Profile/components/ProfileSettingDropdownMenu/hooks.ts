"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { useSignOut } from "@/features/Auth/hooks/useSignOut";

export const useProfileDropdownMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { mutateAsync: signOut } = useSignOut();
  const router = useRouter();

  const onLogoutSelect = useCallback(async () => {
    await signOut();
    router.push("/login");
  }, [signOut, router]);

  return { dropdownOpen, setDropdownOpen, onLogoutSelect };
};
