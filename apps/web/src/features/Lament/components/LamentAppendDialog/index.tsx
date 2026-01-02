"use client";

import { Button } from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/Form";
import { Textarea } from "@/components/TextArea";
import { VisuallyHidden } from "@/components/VisualyHidden";

import { MAX_CONTENT_LENGTH, useLamentAppendDialog } from "./hooks";

interface LamentAppendDialogProps {
  children: React.ReactNode;
}

export const LamentAppendDialog = ({ children }: LamentAppendDialogProps) => {
  const { open, setOpen, form, onSubmit, remainContentLength } =
    useLamentAppendDialog();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[280px] w-[400px]">
        <VisuallyHidden>
          <DialogTitle>嘆いてみよう!!</DialogTitle>
          <DialogDescription>
            タイムラインにあなたの嘆きを追加してみましょう!!
          </DialogDescription>
        </VisuallyHidden>
        <Form {...form}>
          <form
            className="mt-[24px] flex w-full flex-col gap-[16px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Textarea
                      className="field-sizing-fixed h-full"
                      placeholder="心ゆくまで嘆いてみよう!!"
                      maxLength={MAX_CONTENT_LENGTH}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex w-full items-center justify-end gap-[16px]">
              <p className="text-[16px] text-muted-foreground">
                {remainContentLength}
              </p>
              <Button disabled={!form.formState.isValid} type="submit">
                嘆いちゃう!!
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
