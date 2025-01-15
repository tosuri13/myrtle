import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useSignIn } from "@/features/Auth/hooks/useSignIn";

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

export const useSignInForm = () => {
  const { mutateAsync: signIn, isPending } = useSignIn();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const onSubmit = useCallback(
    async (values: z.infer<typeof loginFormSchema>) => {
      await signIn({ userId: values.userId, password: values.password });
      setIsRedirecting(true);
      router.push("/");
    },
    [signIn, router],
  );

  return { form, onSubmit, isPending, isRedirecting };
};
