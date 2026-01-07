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
import { Pencil } from "lucide-react";

type ProfileEditDialogProps = {
  user: User;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

export const ProfileEditDialog = ({
  children,
  user,
  setDropdownOpen,
}: PropsWithChildren<ProfileEditDialogProps>) => {
  const {
    open,
    setOpen,
    form,
    onSubmit,
    handleAvatarChange,
    handleProfileChange,
    avatarPreviewUrl,
    profilePreviewUrl,
  } = useProfileEditDialog({ user, setDropdownOpen });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] w-[600px] max-w-[95dvw] overflow-y-auto">
        <DialogTitle className="flex items-center gap-[4px]">
          <Pencil className="size-[20px]" />
          プロフィールを編集
        </DialogTitle>
        <VisuallyHidden>
          <DialogDescription>
            名前、自己紹介、プロフィール画像、アバター画像を編集できます
          </DialogDescription>
        </VisuallyHidden>
        <Form {...form}>
          <form
            className="mt-[16px] flex w-full flex-col gap-[24px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-[16px]">
              <FormItem>
                <FormLabel className="text-[16px] text-foreground">
                  アバター画像
                </FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
                {avatarPreviewUrl && (
                  <div className="mt-[8px] flex w-full items-center justify-center">
                    <img
                      src={avatarPreviewUrl}
                      alt="アバター画像のプレビュー"
                      className="h-[128px] w-[128px] rounded-full border-[4px] border-border object-cover"
                    />
                  </div>
                )}
              </FormItem>
              <FormItem>
                <FormLabel className="text-[16px] text-foreground">
                  プロフィール画像
                </FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileChange}
                />
                {profilePreviewUrl && (
                  <div className="mt-[8px] h-[160px] w-full">
                    <img
                      src={profilePreviewUrl}
                      alt="プロフィール画像のプレビュー"
                      className=" h-full w-full rounded-[8px] object-cover"
                    />
                  </div>
                )}
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
                variant="secondary"
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
