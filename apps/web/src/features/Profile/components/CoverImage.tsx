import Image, { type ImageProps } from "next/image";

import { cn } from "@/utils/shadcn";

export interface LogoProps extends Omit<ImageProps, "alt"> {}

export const CoverImage = ({ src, className, ...props }: LogoProps) => {
  return (
    <div className={cn("relative h-[160px] w-full", className)}>
      <Image
        src={src}
        alt="カバー画像"
        fill
        sizes="60vw"
        priority
        className="object-cover"
        {...props}
      />
    </div>
  );
};
