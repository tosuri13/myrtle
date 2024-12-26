import * as React from "react";

import { cn } from "@/utils/shadcn";

export const TwitterXIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-icon-primary h-[24px] w-[24px]", className)}
      viewBox="0 0 20 18"
      {...props}
    >
      <path d="M15.6871 0.0629883L10.6911 5.77399L6.37106 0.0629883H0.112061L7.58906 9.83899L0.503061 17.938H3.53706L9.00606 11.688L13.7861 17.938H19.8881L12.0941 7.63399L18.7191 0.0629883H15.6871ZM14.6231 16.123L3.65406 1.78199H5.45706L16.3031 16.122L14.6231 16.123Z" />
    </svg>
  );
};
