import { Lament as TLament } from "@myrtle/types";

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

interface LamentUpdateDialogProps {
  children: React.ReactNode;
  lament: TLament;
  onOpenChange?: (open: boolean) => void;
}

export const LamentEditDialog = ({
  children,
  lament,
  onOpenChange,
}: LamentUpdateDialogProps) => {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[240px] w-[360px]">
        <VisuallyHidden>
          <DialogTitle>嘆きを編集しよう!!</DialogTitle>
          <DialogDescription>
            過去の嘆きが気に入りませんか?編集しちゃいましょう!!
          </DialogDescription>
        </VisuallyHidden>
        <form className="flex h-full w-full flex-col gap-[8px]">
          <span className="h-[12px] w-full" />
          <Textarea
            className="flex-1"
            placeholder="心ゆくまで嘆いてみよう!!"
            defaultValue={lament.content}
          />
          <div className="flex w-full items-center justify-end gap-[16px]">
            <p className="text-[16px] text-text-caption">
              {200 - lament.content.length}
            </p>
            <Button type="submit">嘆き直す!!</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
