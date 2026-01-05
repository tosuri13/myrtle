import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils/shadcn";
import type { User } from "@myrtle/types";
import Image from "next/image";

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
      <Image
        src={user.profileImageUrl ?? "/images/conver-tmp.png"}
        alt="カバー画像"
        fill
        sizes="60vw"
        priority
        className="object-cover"
      />
    </div>
  );
};
