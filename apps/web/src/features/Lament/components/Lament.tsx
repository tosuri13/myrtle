import { Lament as TLament, User } from "@myrtle/types";
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
    <div className="bg-card border-border text-card-foreground relative flex gap-[8px] rounded-[8px] border p-[12px]">
      <LamentOptionDropdownMenu lament={lament}>
        <IconButton size="sm" className="absolute right-[12px] top-[8px]">
          <EllipsisIcon className="stroke-foreground" />
        </IconButton>
      </LamentOptionDropdownMenu>
      <Avatar>
        <AvatarImage src="/images/icon-tmp.png" alt="アイコン画像" />
        <AvatarFallback>{user.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-[8px]">
        <div className="flex items-center gap-[4px] font-bold">
          <p className="text-[16px]">{user.name}</p>
          <p className="text-muted-foreground text-[12px]">@{user.userId}</p>
        </div>
        <div className="w-full whitespace-pre-wrap pr-[8px] text-[16px]">
          {lament.content}
        </div>
        <div className="text-muted-foreground self-end text-[12px]">
          {lament.postTime}
        </div>
      </div>
    </div>
  );
};
