import { Button } from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { Textarea } from "@/components/TextArea";
import { VisuallyHidden } from "@/components/VisualyHidden";

interface LamentDialogProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export const LamentAppendDialog = ({
  children,
  onOpenChange,
}: LamentDialogProps) => {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[240px] w-[360px]">
        <VisuallyHidden>
          <DialogTitle>Lament</DialogTitle>
          <DialogDescription>
            Add a new Lament to the timeline.
          </DialogDescription>
        </VisuallyHidden>
        <form className="flex h-full w-full flex-col gap-[8px]">
          <span className="h-[12px] w-full" />
          <Textarea className="flex-1" placeholder="心ゆくまで嘆いてみよう!!" />
          <div className="flex w-full items-center justify-end gap-[16px]">
            <p className="text-[16px] text-text-caption">200</p>
            <Button type="submit">嘆いちゃう!!</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
