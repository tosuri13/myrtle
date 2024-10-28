import { AppendIcon } from "@/components/icons/AppendIcon";
import { cn } from "@/utils/shadcn";

export interface AppendButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const AppendButton = ({ className, ...props }: AppendButtonProps) => {
  return (
    <button
      className={cn(
        "flex h-[64px] w-[64px] items-center justify-center rounded-full bg-theme-primary hover:bg-theme-primary-hovered",
        className,
      )}
      {...props}
    >
      <AppendIcon className="fill-background-primary hover:fill-background-secondary" />
    </button>
  );
};
