import { Feather } from "lucide-react";

import { cn } from "@/utils/shadcn";

export interface AppendButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const LamentAppendButton = ({
  className,
  ...props
}: AppendButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex h-[64px] w-[64px] items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring",
        className,
      )}
      {...props}
    >
      <Feather className="h-[32px] w-[32px] stroke-[1.5px] stroke-primary-foreground" />
    </button>
  );
};
