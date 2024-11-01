"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const loginFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string(),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  };

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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザ名</FormLabel>
                <FormControl>
                  <Input
                    className="w-[264px]"
                    placeholder="ユーザ名を入れてね"
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
                      placeholder="パスワードを入れてね"
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
        <Button className="mt-[8px]" size="lg" type="submit">
          ログインする!!
        </Button>
      </form>
    </Form>
  );
};
