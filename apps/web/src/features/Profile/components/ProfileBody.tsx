import { User } from "@myrtle/types";

import { Skeleton } from "@/components/Skelton";

export const ProfileBody = ({ user }: { user: User | undefined }) => {
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
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col">
        <div className="text-[24px] font-bold text-text-dark">{user.name}</div>
        <div className="text-[16px] font-bold text-text-caption">
          @{user.userId}
        </div>
      </div>
      <div className="w-full whitespace-nowrap text-[16px] text-text-dark">
        {user.profile.bio}
      </div>
    </div>
  );
};
