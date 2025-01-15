import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image, { ImageProps } from "next/image";

import { cn } from "@/utils/shadcn";

export interface LogoProps extends Omit<ImageProps, "src" | "alt"> {}

export const GhostImage = ({ className, ...props }: LogoProps) => {
  return (
    <div className={cn("h-full max-h-[240px] w-full max-w-[240px]", className)}>
      <AspectRatio.Root ratio={1 / 1}>
        <Image
          src="/images/ghost.png"
          alt="ゴーストのロゴ画像"
          fill
          sizes="60vw"
          priority
          className="object-cover"
          {...props}
        />
      </AspectRatio.Root>
    </div>
  );
};
