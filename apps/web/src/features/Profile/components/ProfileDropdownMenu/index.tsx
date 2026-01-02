"use client";

import { LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { VisuallyHidden } from "@/components/VisualyHidden";

import { useProfileDropdownMenu } from "./hooks";

interface ProfileOptionDropdownMenuProps {
  children: React.ReactNode;
}

export const ProfileOptionDropdownMenu = ({
  children,
}: ProfileOptionDropdownMenuProps) => {
  const { open, setOpen, onSelect } = useProfileDropdownMenu();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <VisuallyHidden>
          <DropdownMenuLabel>Profile Option Menu</DropdownMenuLabel>
        </VisuallyHidden>
        <DropdownMenuItem onSelect={onSelect}>
          <LogOut className="stroke-foreground" />
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
