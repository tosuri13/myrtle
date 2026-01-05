"use client";

import { ArrowRight, Glasses, Lock } from "lucide-react";

import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Form, FormControl, FormField, FormItem } from "@/components/Form";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { useLoginForm } from "@/features/Auth/components/LoginForm/hooks";

export const LoginForm = () => {
  const {
    form,
    isPending,
    isRedirecting,
    showPassword,
    onCheckShowPassword,
    onSubmit,
  } = useLoginForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center gap-[40px] rounded-[8px] border border-border bg-card stroke-card-foreground px-[40px] py-[64px] text-card-foreground"
      >
        <div className="flex flex-col gap-[4px]">
          <h1 className="font-bold text-[32px]">Myrtle</h1>
          <p className="text-[16px]">
            おかえりなさい!! 心ゆくまで嘆きましょう!!
          </p>
        </div>
        <div className="flex w-full max-w-[320px] flex-col items-center gap-[16px]">
          <div className="flex w-full items-center gap-[8px]">
            <Label htmlFor="userId">
              <Glasses className="size-[22px]" />
            </Label>
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="userId"
                      className="min-w-[240px]"
                      placeholder="User ID"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full items-center gap-[8px]">
            <Label htmlFor="password">
              <Lock className="size-[22px]" />
            </Label>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="password"
                      className="min-w-[240px]"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center gap-[8px] self-start">
            <Checkbox
              id="show-password"
              onCheckedChange={onCheckShowPassword}
              className="[&_svg]:stroke-foreground"
            />
            <Label htmlFor="show-password">パスワードを表示する</Label>
          </div>
        </div>
        <Button
          className="h-[40px] w-[160px]"
          size="lg"
          type="submit"
          loading={isPending || isRedirecting}
        >
          ログイン <ArrowRight />
        </Button>
      </form>
    </Form>
  );
};
