"use client";

import { Glasses, LoaderCircleIcon, Lock } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Form, FormControl, FormField, FormItem } from "@/components/Form";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { useSignInForm } from "@/features/Auth/hooks/useSignInForm";

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { form, onSubmit, isPending, isRedirecting } = useSignInForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-card-foreground stroke-card-foreground bg-card border-border flex flex-col items-center justify-center gap-[40px] rounded-[8px] border px-[64px] py-[48px]"
      >
        <div className="flex w-full flex-col gap-[4px]">
          <h1 className="text-[32px] font-bold">Sign in</h1>
          <p className="text-[14px]">
            おかえりなさい!! 心ゆくまで嘆きましょう!!
          </p>
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <div className="flex items-center gap-[8px]">
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
                      className="w-[264px]"
                      placeholder="User ID"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center gap-[8px]">
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
                      type={showPassword ? "text" : "password"}
                      className="w-[264px]"
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
        <Button
          className="w-[160px] [&_svg]:size-[24px]"
          size="lg"
          type="submit"
        >
          {isPending || isRedirecting ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </Form>
  );
};
