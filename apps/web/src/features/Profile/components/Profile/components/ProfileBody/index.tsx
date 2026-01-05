import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils/shadcn";
import type { User } from "@myrtle/types";

export type ProfileBodyProps = {
  user?: User;
  className?: string;
};

export const ProfileBody = ({ user, className }: ProfileBodyProps) => {
  if (!user) {
    return (
      <div className={cn("flex flex-col gap-[24px]", className)}>
        <div className="flex flex-col gap-[8px]">
          <Skeleton className="h-[24px] w-[200px]" />
          <Skeleton className="h-[16px] w-[120px]" />
        </div>
        <Skeleton className="h-[24px] w-full" />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-[24px] text-foreground", className)}>
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
