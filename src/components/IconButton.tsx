import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/utils/shadcn";

const iconButtonVariants = cva(
  "flex h-fit w-fit items-center justify-center rounded-[8px] bg-transparent hover:bg-background-secondary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        lg: "p-[8px] [&_svg]:h-[24px] [&_svg]:w-[24px]",
        default: "p-[4px] [&_svg]:h-[20px] [&_svg]:w-[20px]",
        sm: "p-[4px] [&_svg]:h-[16px] [&_svg]:w-[16px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

export const IconButton = ({ className, size, ...props }: IconButtonProps) => {
  return (
    <button
      className={cn(iconButtonVariants({ size, className }))}
      {...props}
    />
  );
};
