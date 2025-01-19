import type { SVGProps } from "react";

import { cn } from "@/utils/shadcn";

export interface LogoProps extends SVGProps<SVGSVGElement> {}

export const MyrtleLogo = ({ className, ...props }: LogoProps) => {
  return (
    <svg
      className={cn("h-[200px] w-[320px] fill-foreground", className)}
      viewBox="0 0 320 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Myrtle Logo</title>
      <path d="M37.3523 173H27.0842V112.505H43.043L61.2286 150.485L79.5379 112.505H95.3729V173H85.2286V125.742L64.0739 167.68H58.3832L37.3523 125.742V173ZM105.111 186.732L109.564 178.938C111.626 180.835 113.729 181.784 115.874 181.784C117.936 181.784 119.668 181 121.07 179.433C122.472 177.948 123.173 176.258 123.173 174.361C123.173 173.619 116.946 157.825 104.492 126.979H114.884L128.74 160.876L142.472 126.979H152.863L130.472 181.66C129.152 184.629 127.255 186.979 124.781 188.711C122.307 190.443 119.585 191.309 116.616 191.309C112.327 191.309 108.492 189.784 105.111 186.732ZM170.139 153.206V173H160.489V126.979H170.139V136.134C171.706 133.247 173.809 130.897 176.448 129.082C179.169 127.268 182.015 126.32 184.984 126.237L185.108 136.01H184.613C179.912 136.01 176.324 137.536 173.85 140.588C171.376 143.639 170.139 147.845 170.139 153.206ZM206.701 134.773V158.155C206.701 160.381 207.279 162.155 208.433 163.474C209.67 164.711 211.32 165.33 213.382 165.33C215.279 165.33 217.258 164.299 219.32 162.237L223.279 169.165C219.815 172.216 216.062 173.742 212.021 173.742C207.815 173.742 204.268 172.299 201.382 169.412C198.495 166.443 197.052 162.608 197.052 157.907V134.773H191.237V126.979H197.052V112.505H206.701V126.979H218.825V134.773H206.701ZM240.685 173H231.036V108.794H240.685V173ZM297.629 154.196H261.505C261.753 157.495 263.279 160.175 266.083 162.237C268.887 164.299 272.145 165.33 275.856 165.33C281.712 165.33 286.083 163.515 288.969 159.887L294.536 165.948C289.588 171.144 283.114 173.742 275.114 173.742C268.516 173.742 262.99 171.557 258.536 167.186C254.083 162.814 251.856 157.041 251.856 149.866C251.856 142.856 254.124 137.165 258.66 132.794C263.196 128.423 268.681 126.237 275.114 126.237C281.547 126.237 286.907 128.175 291.196 132.052C295.485 135.928 297.629 141.082 297.629 147.515V154.196ZM287.98 146.526C287.98 142.814 286.784 139.887 284.392 137.742C282.083 135.598 279.072 134.526 275.361 134.526C271.65 134.526 268.392 135.639 265.588 137.866C262.866 140.093 261.505 142.979 261.505 146.526H287.98Z" />
      <path
        d="M84.0002 43.9577C84.0002 26.3079 98.3082 12 115.958 12C130.86 12 143.38 22.2003 146.917 36H172.083C175.62 22.2003 188.14 12 203.042 12C220.692 12 235 26.308 235 43.9577C235 61.6074 220.692 75.9154 203.042 75.9154C185.406 75.9154 171.107 61.6303 171.084 44H147.916C147.893 61.6303 133.594 75.9154 115.958 75.9154C98.3082 75.9154 84.0002 61.6074 84.0002 43.9577ZM115.958 20C102.726 20 92.0002 30.7262 92.0002 43.9577C92.0002 57.1892 102.726 67.9154 115.958 67.9154C129.189 67.9154 139.916 57.1892 139.916 43.9577C139.916 30.7262 129.189 20 115.958 20ZM203.042 20C189.811 20 179.084 30.7262 179.084 43.9577C179.084 57.1892 189.811 67.9154 203.042 67.9154C216.274 67.9154 227 57.1892 227 43.9577C227 30.7262 216.274 20 203.042 20Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M216.739 75.6718L203.042 51.9471L189.342 75.6757C187.895 78.0793 187.063 80.8949 187.063 83.9048C187.063 92.7296 194.217 99.8836 203.042 99.8836C211.867 99.8836 219.021 92.7296 219.021 83.9048C219.021 80.8932 218.188 78.0763 216.739 75.6718Z"
        fill="#6393A6"
      />
    </svg>
  );
};
