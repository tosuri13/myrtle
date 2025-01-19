"use client";

import { ArrowRight, Glasses, LoaderCircle, Lock } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Form, FormControl, FormField, FormItem } from "@/components/Form";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { useLoginForm } from "@/features/Auth/hooks/useLoginForm";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { form, onSubmit, isPending, isRedirecting } = useLoginForm();

  const LoginButton = () => {
    if (isPending || isRedirecting) {
      return (
        <div className="flex h-[40px] w-[160px] items-center justify-center rounded-[6px] bg-primary">
          <LoaderCircle className="size-[24px] animate-spin" />
        </div>
      );
    }

    return (
      <Button className="h-[40px] w-[160px]" size="lg" type="submit">
        ログイン <ArrowRight />
      </Button>
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center gap-[40px] rounded-[8px] border border-border bg-card stroke-card-foreground px-[40px] py-[64px] text-card-foreground"
      >
        <div className="flex flex-col gap-[4px]">
          <h1 className="font-bold text-[32px]">Myrtle</h1>
          <p className="text-[14px]">
            おかえりなさい!! 心ゆくまで嘆きましょう!!
          </p>
        </div>
        <div className="flex w-full max-w-[320px] flex-col items-center gap-[16px]">
          <div className="flex w-full items-center gap-[8px]">
            <Label htmlFor="userId">
              <Glasses className="size-[20px]" />
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
              <Lock className="size-[20px]" />
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
              onCheckedChange={(check) => setShowPassword(!!check)}
              className="[&_svg]:stroke-card-foreground"
            />
            <Label htmlFor="show-password">パスワードを表示する</Label>
          </div>
        </div>
        <LoginButton />
      </form>
    </Form>
  );
};
