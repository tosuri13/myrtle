import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/shadcn";

const buttonVariants = cva(
  "inline-flex w-fit items-center justify-center gap-[8px] whitespace-nowrap rounded-[8px] font-bold text-text-light transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[16px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-theme-primary hover:bg-theme-primary-hovered focus-visible:ring-theme-primary",
        secondary:
          "bg-[#94A3B8] hover:bg-[#94A3B8]/80 focus-visible:ring-[#94A3B8]",
        destructive:
          "bg-accent-destructive hover:bg-accent-destructive-hovered focus-visible:ring-accent-destructive",
      },
      size: {
        default: "px-[16px] py-[6px] text-[14px]",
        lg: "px-[48px] py-[8px] text-[16px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
