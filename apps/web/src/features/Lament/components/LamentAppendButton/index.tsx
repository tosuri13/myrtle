"use client";

import { Feather } from "lucide-react";

import { cn } from "@/utils/shadcn";
import { LamentAppendDialog } from "@/features/Lament/components/LamentAppendDialog";

import { useLamentAppendButton } from "./hooks";

export type LamentAppendDialogProps = React.HTMLAttributes<HTMLButtonElement>;

export const LamentAppendButton = ({
  className,
  ...props
}: LamentAppendDialogProps) => {
  const { userId } = useLamentAppendButton();

  if (!userId) return null;

  return (
    <LamentAppendDialog userId={userId}>
      <button
        className={cn(
          "inline-flex h-[64px] w-[64px] items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring",
          className,
        )}
        {...props}
      >
        <Feather className="h-[32px] w-[32px] stroke-[1.5px] stroke-primary-foreground" />
      </button>
    </LamentAppendDialog>
  );
};
