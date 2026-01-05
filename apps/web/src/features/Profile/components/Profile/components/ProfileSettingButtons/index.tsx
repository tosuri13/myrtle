import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils/shadcn";
import type { User } from "@myrtle/types";
import { ProfileSettingDropdownMenu } from "../../../ProfileSettingDropdownMenu";
import { IconButton } from "@/components/IconButton";
import { Moon, Settings, Sun, SunMoon } from "lucide-react";
import { useProfileSettingButtons } from "./hooks";

export type ProfileSettingButtonProps = {
  user?: User;
  className?: string;
};

export const ProfileSettingButtons = ({
  user,
  className,
}: ProfileSettingButtonProps) => {
  const { theme, onClickSwitchTheme } = useProfileSettingButtons();

  if (!user) {
    return (
      <div className={cn("flex gap-[8px]", className)}>
        <Skeleton className="size-[40px] rounded-[8px]" />
        <Skeleton className="size-[40px] rounded-[8px]" />
      </div>
    );
  }

  return (
    <div className={cn("flex gap-[8px]", className)}>
      <IconButton size="lg" onClick={onClickSwitchTheme}>
        {theme === "light" && <Moon className="stroke-icon-primary" />}
        {theme === "dark" && <Sun className="stroke-icon-primary" />}
      </IconButton>
      <ProfileSettingDropdownMenu user={user}>
        <IconButton size="lg">
          <Settings className="stroke-icon-primary" />
        </IconButton>
      </ProfileSettingDropdownMenu>
    </div>
  );
};
