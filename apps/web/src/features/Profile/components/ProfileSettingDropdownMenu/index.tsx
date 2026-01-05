"use client";

import { LogOut, Pencil } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { VisuallyHidden } from "@/components/VisualyHidden";
import { ProfileEditDialog } from "@/features/Profile/components/ProfileEditDialog";

import { useProfileDropdownMenu } from "./hooks";
import type { User } from "@myrtle/types";

interface ProfileSettingDropdownMenuProps {
  children: React.ReactNode;
  user: User;
}

export const ProfileSettingDropdownMenu = ({
  children,
  user,
}: ProfileSettingDropdownMenuProps) => {
  const { dropdownOpen, setDropdownOpen, onLogoutSelect } =
    useProfileDropdownMenu();

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <VisuallyHidden>
          <DropdownMenuLabel>Profile Setting Menu</DropdownMenuLabel>
        </VisuallyHidden>
        <ProfileEditDialog user={user} setDropdownOpen={setDropdownOpen}>
          <DropdownMenuItem
            className="text-foreground"
            onSelect={(event) => event.preventDefault()}
          >
            <Pencil className="stroke-foreground" />
            プロフィール編集
          </DropdownMenuItem>
        </ProfileEditDialog>
        <DropdownMenuItem onSelect={onLogoutSelect}>
          <LogOut className="stroke-foreground" />
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
