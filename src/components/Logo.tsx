import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image, { ImageProps } from "next/image";

import { cn } from "@/utils/shadcn";

export interface LogoProps extends Omit<ImageProps, "src" | "alt"> {}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={cn("h-[200px] w-[320px]", className)}>
      <AspectRatio.Root ratio={320 / 200}>
        <Image
          src="/logo.png"
          alt="Myrtleのロゴ画像"
          fill
          sizes="60vw"
          priority
          className="h-full w-full object-cover"
          {...props}
        />
      </AspectRatio.Root>
    </div>
  );
};
