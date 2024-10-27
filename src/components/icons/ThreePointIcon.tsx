import * as React from "react";

import { cn } from "@/utils/shadcn";

export const ThreePointIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[24px] w-[24px] fill-icon-primary", className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="3" cy="12" r="3" />
      <path d="M24 12C24 13.6569 22.6569 15 21 15C19.3431 15 18 13.6569 18 12C18 10.3432 19.3431 9.00001 21 9.00001C22.6569 9.00001 24 10.3432 24 12Z" />
      <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" />
    </svg>
  );
};
