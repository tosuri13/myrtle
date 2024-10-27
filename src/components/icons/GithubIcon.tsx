import * as React from "react";

import { cn } from "@/utils/shadcn";

export const GithubIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-icon-primary h-[24px] w-[24px]", className)}
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8.00008 0.666626C7.03705 0.666626 6.08346 0.852182 5.19374 1.2127C4.30401 1.57321 3.49559 2.10163 2.81463 2.76778C1.43936 4.11313 0.666748 5.93781 0.666748 7.84042C0.666748 11.0112 2.77141 13.7014 5.68275 14.6555C6.04941 14.7129 6.16675 14.4905 6.16675 14.2968V13.0845C4.13541 13.5149 3.70275 12.1232 3.70275 12.1232C3.36541 11.291 2.88875 11.0686 2.88875 11.0686C2.22141 10.6238 2.94008 10.6382 2.94008 10.6382C3.67341 10.6884 4.06208 11.3771 4.06208 11.3771C4.70008 12.4675 5.77808 12.1447 6.19608 11.9725C6.26208 11.5062 6.45275 11.1906 6.65808 11.0112C5.03008 10.8319 3.32141 10.2149 3.32141 7.48173C3.32141 6.68543 3.60008 6.04697 4.07675 5.53763C4.00341 5.35828 3.74675 4.61221 4.15008 3.64375C4.15008 3.64375 4.76608 3.45006 6.16675 4.37547C6.74608 4.21765 7.37675 4.13874 8.00008 4.13874C8.62341 4.13874 9.25408 4.21765 9.83341 4.37547C11.2341 3.45006 11.8501 3.64375 11.8501 3.64375C12.2534 4.61221 11.9967 5.35828 11.9234 5.53763C12.4001 6.04697 12.6787 6.68543 12.6787 7.48173C12.6787 10.2221 10.9627 10.8247 9.32741 11.0041C9.59142 11.2264 9.83341 11.664 9.83341 12.3312V14.2968C9.83341 14.4905 9.95075 14.7201 10.3247 14.6555C13.2361 13.6942 15.3334 11.0112 15.3334 7.84042C15.3334 6.89834 15.1437 5.96549 14.7752 5.09512C14.4067 4.22476 13.8665 3.43393 13.1855 2.76778C12.5046 2.10163 11.6961 1.57321 10.8064 1.2127C9.91671 0.852182 8.96311 0.666626 8.00008 0.666626Z" />
    </svg>
  );
};
