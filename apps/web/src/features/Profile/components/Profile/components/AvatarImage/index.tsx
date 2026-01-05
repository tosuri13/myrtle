import {
  Avatar,
  AvatarImage as PrimitiveAvatarImage,
  AvatarFallback,
} from "@/components/Avatar";
import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils/shadcn";
import type { User } from "@myrtle/types";

export type AvatarImageProps = {
  user?: User;
  className?: string;
};

export const AvatarImage = ({ user, className }: AvatarImageProps) => {
  if (!user) {
    return (
      <Skeleton
        className={cn(
          "h-[120px] w-[120px] translate-y-1/2 rounded-full border-[4px] border-border",
          className,
        )}
      />
    );
  }

  return (
    <Avatar
      className={cn(
        "h-[120px] w-[120px] translate-y-1/2 border-[4px] border-border",
        className,
      )}
    >
      {user.avatarImageUrl && (
        <PrimitiveAvatarImage src={user.avatarImageUrl} alt="アイコン画像" />
      )}
      <AvatarFallback className="text-[48px]">{user.name[0]}</AvatarFallback>
    </Avatar>
  );
};
