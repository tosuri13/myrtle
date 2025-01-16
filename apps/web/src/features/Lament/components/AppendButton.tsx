import { PenTool } from "lucide-react";

import { cn } from "@/utils/shadcn";

export interface AppendButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const AppendButton = ({ className, ...props }: AppendButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex h-[64px] w-[64px] items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className,
      )}
      {...props}
    >
      <PenTool className="h-[32px] w-[32px] stroke-foreground stroke-[1.5px] hover:stroke-foreground/90" />
    </button>
  );
};
