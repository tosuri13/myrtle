import type { Lament as TLament, User } from "@myrtle/types";
import { EllipsisIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { IconButton } from "@/components/IconButton";
import { LamentOptionDropdownMenu } from "@/features/Lament/components/LamentOptionDropdownMenu";

export type LamentProps = {
  user: User;
  lament: TLament;
};

export const Lament = ({ user, lament }: LamentProps) => {
  return (
    <div className="relative flex gap-[8px] rounded-[8px] border border-border bg-card p-[12px] text-card-foreground">
      <LamentOptionDropdownMenu userId={user.userId} lament={lament}>
        <IconButton size="sm" className="absolute top-[8px] right-[12px]">
          <EllipsisIcon className="stroke-foreground" />
        </IconButton>
      </LamentOptionDropdownMenu>
      <Avatar>
        <AvatarImage src={user.avatarImageUrl} alt="アイコン画像" />
        <AvatarFallback>{user.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-[8px]">
        <div className="flex items-center gap-[4px] font-bold">
          <p className="text-[16px]">{user.name}</p>
          <p className="text-[14px] text-muted-foreground">@{user.userId}</p>
        </div>
        <div className="w-full whitespace-pre-wrap pr-[8px] text-[16px]">
          {lament.content}
        </div>
        <div className="self-end text-[14px] text-muted-foreground">
          {lament.postTime}
        </div>
      </div>
    </div>
  );
};
