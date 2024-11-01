"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { EditIcon } from "@/components/icons/EditIcon";
import { TrashIcon } from "@/components/icons/Trash";
import { VisuallyHidden } from "@/components/VisualyHidden";
import { LamentDeleteDialog } from "@/features/Lament/components/LamentDeleteDialog";
import { LamentEditDialog } from "@/features/Lament/components/LamentEditDialog";
import { Lament as TLament } from "@/features/Lament/types/Lament";

interface LamentOptionDropdownMenuProps {
  children: React.ReactNode;
  lament: TLament;
}

export const LamentOptionDropdownMenu = ({
  children,
  lament,
}: LamentOptionDropdownMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <VisuallyHidden>
          <DropdownMenuLabel>Lament Option Menu</DropdownMenuLabel>
        </VisuallyHidden>
        <LamentEditDialog onOpenChange={setOpen} lament={lament}>
          <DropdownMenuItem
            className="text-text-dark"
            onSelect={(event) => event.preventDefault()}
          >
            <EditIcon />
            編集
          </DropdownMenuItem>
        </LamentEditDialog>
        <LamentDeleteDialog onOpenChange={setOpen}>
          <DropdownMenuItem
            className="text-accent-destructive"
            onSelect={(event) => event.preventDefault()}
          >
            <TrashIcon className="stroke-accent-destructive" />
            削除
          </DropdownMenuItem>
        </LamentDeleteDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
