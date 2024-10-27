"use client";

import { IconButton } from "@/components/IconButton";
import { SettingIcon } from "@/components/icons/SettingIcon";
import { Img } from "@/components/Img";
import { useGetUserProfile } from "@/features/profile/hooks/useGetUserProfile";
import { useGetUser } from "@/hooks/useGetUser";

export const Profile = () => {
  const { data: user } = useGetUser();
  const { data: profile } = useGetUserProfile(user);

  return (
    <div className="flex min-h-[360px] w-full flex-col bg-background-primary">
      <Img src="/cover-tmp.png" alt="カバー画像" className="h-[160px] w-full" />
      <div className="relative flex flex-1 flex-col justify-end p-[16px]">
        <Img
          src="/icon-tmp.jpg"
          alt="カバー画像"
          className="absolute -top-[60px] left-[12px] size-[120px] overflow-hidden rounded-full border-4 border-border"
        />
        <IconButton className="absolute right-[8px] top-[8px]">
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
