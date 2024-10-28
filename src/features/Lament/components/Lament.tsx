import { format } from "date-fns";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { IconButton } from "@/components/IconButton";
import { ThreePointIcon } from "@/components/icons/ThreePointIcon";
import { Lament as TLament } from "@/features/Lament/types/Lament";
import { User } from "@/types/User";

export type LamentProps = {
  user: User;
  lament: TLament;
};

export const Lament = ({ user, lament }: LamentProps) => {
  return (
    <div className="relative flex gap-[8px] rounded-[8px] bg-background-primary p-[8px]">
      <IconButton className="absolute right-[4px] top-[4px] p-[4px]">
        <ThreePointIcon className="h-[16px] w-[16px]" />
      </IconButton>
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