import { PlusIcon } from "lucide-react";

import { cn } from "@/utils/shadcn";

export interface AppendButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const AppendButton = ({ className, ...props }: AppendButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex h-[64px] w-[64px] items-center justify-center rounded-full bg-theme-primary transition-colors hover:bg-theme-primary-hovered focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary focus-visible:ring-offset-1",
        className,
      )}
      {...props}
    >
      <PlusIcon className="stroke-icon-secondary hover:stroke-icon-secondary-hovered h-[32px] w-[32px]" />
    </button>
  );
};
