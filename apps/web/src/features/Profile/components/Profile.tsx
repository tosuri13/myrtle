"use client";

import { SettingsIcon } from "lucide-react";

import { IconButton } from "@/components/IconButton";
import { useAuth } from "@/features/Auth/hooks/useAuth";
import { ProfileBody } from "@/features/Profile/components/ProfileBody";
import { ProfileHeader } from "@/features/Profile/components/ProfileHeader";
import { ProfileOptionDropdownMenu } from "@/features/Profile/components/ProfileOptionDropdownMenu";
import { useGetUser } from "@/hooks/useGetUser";

export const Profile = () => {
  const { data: auth } = useAuth();
  const userId = auth?.name;

  const { data: user } = useGetUser({ userId });

  return (
    <div className="flex min-h-[360px] w-full flex-col rounded-b-[8px] bg-background-primary">
      <ProfileHeader user={user} />
      <div className="relative flex flex-1 flex-col justify-end p-[16px]">
        <ProfileOptionDropdownMenu>
          <IconButton size="lg" className="absolute right-[8px] top-[8px]">
            <SettingsIcon className="stroke-icon-primary" />
          </IconButton>
        </ProfileOptionDropdownMenu>
        <ProfileBody user={user} />
      </div>
    </div>
  );
};
