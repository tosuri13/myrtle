import React from "react";

import { cn } from "@/utils/shadcn";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const IconButton = ({ className, ...props }: IconButtonProps) => {
  return (
    <button
      className={cn(
        "flex h-fit w-fit items-center justify-center rounded-[8px] bg-transparent p-[8px] hover:bg-background-secondary disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
};
