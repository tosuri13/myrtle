"use client";

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <VisuallyHidden>
          <DropdownMenuLabel>Lament Option Menu</DropdownMenuLabel>
        </VisuallyHidden>
        <LamentAppendDialog>
          <DropdownMenuItem
            className="text-text-dark"
            onSelect={(event) => event.preventDefault()}
          >
            <EditIcon />
            編集
          </DropdownMenuItem>
        </LamentAppendDialog>

        <LamentDeleteDialog>
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
