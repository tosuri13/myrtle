import * as React from "react";

import { cn } from "@/utils/shadcn";

export const AppendIcon = ({
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
      <rect y="10" width="24" height="4" />
      <rect x="10" y="24" width="24" height="4" transform="rotate(-90 10 24)" />
    </svg>
  );
};
