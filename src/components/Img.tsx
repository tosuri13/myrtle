import Image, { ImageProps } from "next/image";

import { cn } from "@/utils/shadcn";

export interface LogoProps extends ImageProps {}

// TODO: HeightとWidthを指定する前提で利用する必要がある
export const Img = ({ src, alt, className, ...props }: LogoProps) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="60vw"
        priority
        className="object-cover"
        {...props}
      />
    </div>
  );
};
