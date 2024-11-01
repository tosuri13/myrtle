import * as React from "react";

import { cn } from "@/utils/shadcn";

export const CheckIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "h-[24px] w-[24px] fill-none stroke-icon-primary",
        className,
      )}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M20 6L9 17L4 12"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
