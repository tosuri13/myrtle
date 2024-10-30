import * as React from "react";

import { cn } from "@/utils/shadcn";

export const TrashIcon = ({
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
        d="M3 6H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11V17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11V17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
