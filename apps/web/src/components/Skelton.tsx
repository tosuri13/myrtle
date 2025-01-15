import { cn } from "@/utils/shadcn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-accent/10 animate-pulse rounded-[8px]", className)}
      {...props}
    />
  );
}

export { Skeleton };
