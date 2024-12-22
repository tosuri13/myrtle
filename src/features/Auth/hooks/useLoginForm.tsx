import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
  userId: z
    .string()
    .min(1, {
      message: "ユーザIDを入力してください!!",
    })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "英数字以外の文字列が含まれています!!",
    }),
  password: z.string().min(1, {
    message: "パスワードを入力してください!!",
  }),
});

export const useLoginForm = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  }, []);

  return { form, onSubmit };
};
