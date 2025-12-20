"use client";

import { SquarePenIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { VisuallyHidden } from "@/components/VisualyHidden";
import { LamentDeleteDialog } from "@/features/Lament/components/LamentDeleteDialog";
import { LamentEditDialog } from "@/features/Lament/components/LamentEditDialog";
import type { Lament } from "@myrtle/types";

interface LamentOptionDropdownMenuProps {
  children: React.ReactNode;
  lament: Lament;
}

export const LamentOptionDropdownMenu = ({
  children,
  lament,
}: LamentOptionDropdownMenuProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <VisuallyHidden>
          <DropdownMenuLabel>Lament Option Menu</DropdownMenuLabel>
        </VisuallyHidden>
        <LamentEditDialog setDropdownOpen={setDropdownOpen} lament={lament}>
          <DropdownMenuItem
            className="text-foreground"
            onSelect={(event) => event.preventDefault()}
          >
            <SquarePenIcon className="stroke-foreground" />
            編集
          </DropdownMenuItem>
        </LamentEditDialog>
        <LamentDeleteDialog setDropdownOpen={setDropdownOpen} lament={lament}>
          <DropdownMenuItem
            className="text-destructive"
            onSelect={(event) => event.preventDefault()}
          >
            <Trash2Icon className="stroke-destructive" />
            削除
          </DropdownMenuItem>
        </LamentDeleteDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
