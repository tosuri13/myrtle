import * as React from "react";

import { cn } from "@/utils/shadcn";

export const LogoutIcon = ({
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
      <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" />
    </svg>
  );
};
