import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/utils/shadcn";

const iconButtonVariants = cva(
  "inline-flex h-fit w-fit items-center justify-center rounded-[8px] bg-transparent transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
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
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(iconButtonVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
IconButton.displayName = "IconButton";
