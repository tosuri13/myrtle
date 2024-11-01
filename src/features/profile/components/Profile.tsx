"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { IconButton } from "@/components/IconButton";
import { SettingIcon } from "@/components/icons/SettingIcon";
import { CoverImage } from "@/features/Profile/components/CoverImage";
import { useGetUserProfile } from "@/features/Profile/hooks/useGetUserProfile";
import { useGetUser } from "@/hooks/useGetUser";

export const Profile = () => {
  const { data: user } = useGetUser();
  const { data: profile } = useGetUserProfile(user);

  return (
    <div className="flex min-h-[360px] w-full flex-col rounded-b-[8px] bg-background-primary">
      <CoverImage src="/cover-tmp.png" />
      <div className="relative flex flex-1 flex-col justify-end p-[16px]">
        <Avatar className="absolute -top-[60px] left-[12px] h-[120px] w-[120px] border-4 border-border">
          <AvatarImage src="/icon-tmp.jpg" alt="アイコン画像" />
          <AvatarFallback className="text-[48px]">
            {user.name[0]}
          </AvatarFallback>
        </Avatar>
        <IconButton size="lg" className="absolute right-[8px] top-[8px]">
          <SettingIcon />
        </IconButton>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col">
            <div className="text-[24px] font-bold text-text-dark">
              {user.name}
            </div>
            <div className="text-[16px] font-bold text-text-caption">
              @{user.id}
            </div>
          </div>
          <div className="w-full whitespace-nowrap text-[16px] text-text-dark">
            {profile.bio}
          </div>
        </div>
      </div>
    </div>
  );
};
