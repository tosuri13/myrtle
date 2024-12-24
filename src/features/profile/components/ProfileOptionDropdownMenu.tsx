"use client";

import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { VisuallyHidden } from "@/components/VisualyHidden";
import { useSignOut } from "@/features/Auth/hooks/useSignOut";

interface ProfileOptionDropdownMenuProps {
  children: React.ReactNode;
}

export const ProfileOptionDropdownMenu = ({
  children,
}: ProfileOptionDropdownMenuProps) => {
  const { mutateAsync: signOut } = useSignOut();

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onSelect = useCallback(async () => {
    await signOut();
    router.push("/login");
  }, [signOut, router]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <VisuallyHidden>
          <DropdownMenuLabel>Lament Option Menu</DropdownMenuLabel>
        </VisuallyHidden>
        <DropdownMenuItem className="text-text-dark" onSelect={onSelect}>
          <LogOutIcon className="stroke-icon-primary" />
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
