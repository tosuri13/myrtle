import { cn } from "@/utils/shadcn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-[8px] bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
