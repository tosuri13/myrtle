import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils/shadcn";
import type { User } from "@myrtle/types";
import { ProfileSettingDropdownMenu } from "../../../ProfileSettingDropdownMenu";
import { IconButton } from "@/components/IconButton";
import { Settings } from "lucide-react";

export type ProfileSettingButtonProps = {
  user?: User;
  className?: string;
};

export const ProfileSettingButton = ({
  user,
  className,
}: ProfileSettingButtonProps) => {
  if (!user) {
    return <Skeleton className={cn("size-[40px] rounded-[8px]", className)} />;
  }

  return (
    <ProfileSettingDropdownMenu user={user}>
      <IconButton size="lg" className={className}>
        <Settings className="stroke-icon-primary" />
      </IconButton>
    </ProfileSettingDropdownMenu>
  );
};
