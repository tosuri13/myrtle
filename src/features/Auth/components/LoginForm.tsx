"use client";

import { LoaderCircleIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { useLoginForm } from "@/features/Auth/hooks/useLoginForm";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { form, onSubmit, isPending, isRedirecting } = useLoginForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-[32px] rounded-[8px] bg-background-primary px-[64px] py-[48px]"
      >
        <div className="flex w-full flex-col gap-[4px]">
          <h1 className="text-[32px] font-bold text-theme-primary">
            Welcome!!
          </h1>
          <p className="text-[14px] text-text-caption">
            おかえりなさい!! 心ゆくまで嘆きましょう!!
          </p>
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザID</FormLabel>
                <FormControl>
                  <Input
                    className="w-[264px]"
                    placeholder="ユーザIDを入れてね!!"
                    autoComplete="username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-[16px]">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>パスワード</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="w-[264px]"
                      placeholder="パスワードを入れてね!!"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-[4px]">
              <Checkbox
                id="show-password"
                onCheckedChange={(check) => setShowPassword(!!check)}
              />
              <Label htmlFor="show-password">パスワードを表示する</Label>
            </div>
          </div>
        </div>
        <Button className="mt-[8px] w-[160px]" size="lg" type="submit">
          {isPending || isRedirecting ? (
            <LoaderCircleIcon className="stroke-icon-secondary animate-spin" />
          ) : (
            "ログイン"
          )}
        </Button>
      </form>
    </Form>
  );
};
