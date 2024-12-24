import { format } from "date-fns";
import { EllipsisIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { IconButton } from "@/components/IconButton";
import { LamentOptionDropdownMenu } from "@/features/Lament/components/LamentOptionDropdownMenu";
import { Lament as TLament } from "@/features/Lament/types/Lament";
import { User } from "@/types/User";

export type LamentProps = {
  user: User;
  lament: TLament;
};

export const Lament = ({ user, lament }: LamentProps) => {
  return (
    <div className="relative flex gap-[8px] rounded-[8px] bg-background-primary p-[12px]">
      <LamentOptionDropdownMenu lament={lament}>
        <IconButton size="sm" className="absolute right-[12px] top-[8px]">
          <EllipsisIcon className="stroke-icon-primary" />
        </IconButton>
      </LamentOptionDropdownMenu>
      <Avatar>
        <AvatarImage src="/icon-tmp.jpg" alt="アイコン画像" />
        <AvatarFallback>{user.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-[8px]">
        <div className="flex items-center gap-[4px]">
          <p className="text-[16px] font-bold text-text-dark">{user.name}</p>
          <p className="text-[12px] font-bold text-text-caption">@{user.id}</p>
        </div>
        <div className="w-full whitespace-pre-wrap pr-[8px] text-[16px] text-text-dark">
          {lament.content}
        </div>
        <div className="self-end text-[12px] text-text-caption">
          {format(lament.postTime, "yyyy/MM/dd HH:mm:ss")}
        </div>
      </div>
    </div>
  );
};
