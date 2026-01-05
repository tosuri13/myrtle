"use client";

import type { User } from "@myrtle/types";
import { Settings } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { IconButton } from "@/components/IconButton";
import { Skeleton } from "@/components/Skeleton";
import { ProfileSettingDropdownMenu } from "@/features/Profile/components/ProfileSettingDropdownMenu";

import { useGetUser } from "@/hooks/useGetUser";

const ProfileHeader = ({ user }: { user: User | undefined }) => {
  if (!user) {
    return (
      <div className="relative">
        <Skeleton className="h-[160px] w-full" />
        <Skeleton className="absolute bottom-0 left-[16px] h-[120px] w-[120px] translate-y-1/2 rounded-full border-[4px] border-border" />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative h-[160px] w-full bg-muted">
        {user.profileImageUrl && (
          <Image
            src={user.profileImageUrl}
            alt="カバー画像"
            fill
            sizes="60vw"
            priority
            className="object-cover"
          />
        )}
      </div>
      <Avatar className="absolute bottom-0 left-[16px] h-[120px] w-[120px] translate-y-1/2 border-[4px] border-border">
        {user.avatarImageUrl && (
          <AvatarImage src={user.avatarImageUrl} alt="アイコン画像" />
        )}
        <AvatarFallback className="text-[48px]">{user.name[0]}</AvatarFallback>
      </Avatar>
    </div>
  );
};

const ProfileBody = ({ user }: { user: User | undefined }) => {
  if (!user) {
    return (
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <Skeleton className="h-[24px] w-[200px]" />
          <Skeleton className="h-[16px] w-[120px]" />
        </div>
        <Skeleton className="h-[24px] w-full" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[24px] text-foreground">
      <div className="flex flex-col">
        <div className="font-bold text-[24px]">{user.name}</div>
        <div className="font-bold text-[16px] text-muted-foreground">
          @{user.userId}
        </div>
      </div>
      <div className="w-full whitespace-nowrap text-[16px]">{user.bio}</div>
    </div>
  );
};

const ProfileSettingIconButton = ({ user }: { user: User | undefined }) => {
  if (!user) {
    return (
      <Skeleton className="absolute top-[8px] right-[8px] size-[40px] rounded-[8px]" />
    );
  }

  return (
    <ProfileSettingDropdownMenu user={user}>
      <IconButton size="lg" className="absolute top-[8px] right-[8px]">
        <Settings className="stroke-icon-primary" />
      </IconButton>
    </ProfileSettingDropdownMenu>
  );
};

export const Profile = () => {
  const { data: user } = useGetUser();

  return (
    <div className="flex min-h-[360px] w-full flex-col rounded-b-[8px] border-border border-r border-b border-l bg-background text-foreground">
      <ProfileHeader user={user} />
      <div className="relative flex flex-1 flex-col justify-end p-[16px]">
        <ProfileBody user={user} />
        <ProfileSettingIconButton user={user} />
      </div>
    </div>
  );
};
