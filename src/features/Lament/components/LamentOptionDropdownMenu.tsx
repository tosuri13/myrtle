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
import { LamentAppendDialog } from "@/features/Lament/components/LamentAppendDialog";
import { LamentDeleteDialog } from "@/features/Lament/components/LamentDeleteDialog";

interface LamentOptionDropdownMenuProps {
  children: React.ReactNode;
}

export const LamentOptionDropdownMenu = ({
  children,
}: LamentOptionDropdownMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <VisuallyHidden>
          <DropdownMenuLabel>Lament Option Menu</DropdownMenuLabel>
        </VisuallyHidden>
        <LamentAppendDialog onOpenChange={setOpen}>
          <DropdownMenuItem
            className="text-text-dark"
            onSelect={(event) => event.preventDefault()}
          >
            <EditIcon />
            編集
          </DropdownMenuItem>
        </LamentAppendDialog>
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
