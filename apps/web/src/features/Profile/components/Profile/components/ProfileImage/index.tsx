import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils/shadcn";
import type { User } from "@myrtle/types";

export type ProfileImageProps = {
  user?: User;
  className?: string;
};

export const ProfileImage = ({ user, className }: ProfileImageProps) => {
  if (!user) {
    return <Skeleton className={cn("h-[160px] w-full", className)} />;
  }

  return (
    <div className="relative h-[160px] w-full bg-muted">
      <img
        src={user.profileImageUrl ?? "/images/conver-tmp.png"}
        alt="プロフィール画像"
        className="h-full w-full object-cover"
      />
    </div>
  );
};
