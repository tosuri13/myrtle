import Image, { ImageProps } from "next/image";

import { cn } from "@/utils/shadcn";

export interface LogoProps extends Omit<ImageProps, "src" | "alt"> {}

export const LogoImage = ({ className, ...props }: LogoProps) => {
  return (
    <div className={cn("relative h-[200px] w-[320px]", className)}>
      <Image
        src="/logo.png"
        alt="Myrtleのロゴ画像"
        fill
        sizes="60vw"
        priority
        className="object-cover"
        {...props}
      />
    </div>
  );
};
