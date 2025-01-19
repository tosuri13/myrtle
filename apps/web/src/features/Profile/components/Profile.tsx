"use client";

import { Settings } from "lucide-react";

import { IconButton } from "@/components/IconButton";
import { ProfileBody } from "@/features/Profile/components/ProfileBody";
import { ProfileHeader } from "@/features/Profile/components/ProfileHeader";
import { ProfileOptionDropdownMenu } from "@/features/Profile/components/ProfileOptionDropdownMenu";
import { useGetUser } from "@/hooks/useGetUser";

export const Profile = () => {
  const { data: user } = useGetUser();

  return (
    <div className="flex min-h-[360px] w-full flex-col rounded-b-[8px] border-border border-r border-b border-l bg-background text-foreground">
      <ProfileHeader user={user} />
      <div className="relative flex flex-1 flex-col justify-end p-[16px]">
        <ProfileOptionDropdownMenu>
          <IconButton size="lg" className="absolute top-[8px] right-[8px]">
            <Settings className="stroke-icon-primary" />
          </IconButton>
        </ProfileOptionDropdownMenu>
        <ProfileBody user={user} />
      </div>
    </div>
  );
};
