"use client";

import { Button } from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/Form";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/TextArea";
import { VisuallyHidden } from "@/components/VisualyHidden";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";

import { useProfileEditDialog } from "./hooks";
import type { User } from "@myrtle/types";

interface ProfileEditDialogProps extends PropsWithChildren {
  user: User;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export const ProfileEditDialog = ({
  children,
  user,
  setDropdownOpen,
}: ProfileEditDialogProps) => {
  const {
    open,
    setOpen,
    form,
    onSubmit,
    handleAvatarChange,
    handleProfileChange,
  } = useProfileEditDialog({ user, setDropdownOpen });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] w-[600px] max-w-[95dvw] overflow-y-auto">
        <VisuallyHidden>
          <DialogTitle>プロフィールを編集</DialogTitle>
          <DialogDescription>
            名前、自己紹介、プロフィール画像、アバター画像を編集できます
          </DialogDescription>
        </VisuallyHidden>
        <div className="font-bold text-[24px] text-foreground">
          プロフィール編集
        </div>
        <Form {...form}>
          <form
            className="flex w-full flex-col gap-[24px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-[16px]">
              <FormItem>
                <FormLabel className="text-[16px] text-foreground">
                  プロフィール画像
                </FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleProfileChange(file);
                  }}
                />
              </FormItem>

              <FormItem>
                <FormLabel className="text-[16px] text-foreground">
                  アバター画像
                </FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleAvatarChange(file);
                  }}
                />
              </FormItem>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] text-foreground">
                      名前
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="名前を入力" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] text-foreground">
                      自己紹介
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[100px]"
                        placeholder="自己紹介を入力"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex w-full items-center justify-end gap-[16px]">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                キャンセル
              </Button>
              <Button disabled={!form.formState.isValid} type="submit">
                保存する
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
