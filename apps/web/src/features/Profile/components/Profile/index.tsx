"use client";

import { AvatarImage } from "./components/AvatarImage";
import { ProfileBody } from "./components/ProfileBody";
import { ProfileImage } from "./components/ProfileImage";
import { ProfileSettingButton } from "./components/ProfileSettingButton";
import { useProfile } from "./hooks";

export const Profile = () => {
  const { user } = useProfile();

  return (
    <div className="flex min-h-[360px] w-full flex-col rounded-b-[8px] border-border border-r border-b border-l bg-background text-foreground">
      <div className="relative">
        <ProfileImage user={user} />
        <AvatarImage user={user} className="absolute bottom-0 left-[16px]" />
      </div>
      <div className="relative flex flex-1 flex-col justify-end p-[16px]">
        <ProfileBody user={user} />
        <ProfileSettingButton
          user={user}
          className="absolute top-[8px] right-[8px]"
        />
      </div>
    </div>
  );
};
