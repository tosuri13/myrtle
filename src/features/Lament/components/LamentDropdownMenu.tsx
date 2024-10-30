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

interface LamentDropdownProps {
  children: React.ReactNode;
}

export const LamentDropdownMenu = ({ children }: LamentDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <VisuallyHidden>
          <DropdownMenuLabel>Lament Option Menu</DropdownMenuLabel>
        </VisuallyHidden>
        <DropdownMenuItem className="text-text-dark">
          <EditIcon />
          編集
        </DropdownMenuItem>
        <DropdownMenuItem className="text-accent-destructive">
          <TrashIcon className="stroke-accent-destructive" />
          削除
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
