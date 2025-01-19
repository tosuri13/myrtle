"use client";

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
import { useLamentAppnedDialog } from "@/features/Lament/hooks/useLamentAppendDialog";
import { Form, FormControl, FormField, FormItem } from "@/components/Form";
import { LoaderCircle } from "lucide-react";

interface LamentAppendDialogProps {
  children: React.ReactNode;
}

export const LamentAppendDialog = ({ children }: LamentAppendDialogProps) => {
  const { open, setOpen, form, onSubmit, isPending } = useLamentAppnedDialog();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[240px] w-[360px]">
        <VisuallyHidden>
          <DialogTitle>嘆いてみよう!!</DialogTitle>
          <DialogDescription>
            タイムラインにあなたの嘆きを追加してみましょう!!
          </DialogDescription>
        </VisuallyHidden>
        <Form {...form}>
          <form
            className="flex w-full flex-col gap-[8px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <span className="h-[12px] w-full" />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Textarea
                      className="h-full"
                      placeholder="心ゆくまで嘆いてみよう!!"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex w-full items-center justify-end gap-[16px]">
              <p className="text-[16px] text-muted-foreground">200</p>
              <Button type="submit">
                {isPending ? <LoaderCircle /> : "嘆いちゃう!!"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
