import { User } from "@myrtle/types";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { Skeleton } from "@/components/Skelton";
import { CoverImage } from "@/features/Profile/components/CoverImage";

export const ProfileHeader = ({ user }: { user: User | undefined }) => {
  if (!user) {
    return (
      <div className="relative">
        <Skeleton className="h-[160px] w-full" />
        <Skeleton className="absolute bottom-0 left-[16px] h-[120px] w-[120px] translate-y-1/2 rounded-full border-4 border-border-light" />
      </div>
    );
  }

  return (
    <div className="relative">
      <CoverImage src="/images/cover-tmp.jpg" />
      <Avatar className="absolute bottom-0 left-[16px] h-[120px] w-[120px] translate-y-1/2 border-4 border-border-light">
        <AvatarImage src="/images/icon-tmp.png" alt="アイコン画像" />
        <AvatarFallback className="text-[48px]">{user.name[0]}</AvatarFallback>
      </Avatar>
    </div>
  );
};
