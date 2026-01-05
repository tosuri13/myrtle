import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useSignIn } from "@/features/Auth/hooks/useSignIn";
import type { CheckedState } from "@radix-ui/react-checkbox";

const formSchema = z.object({
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
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync: signIn, isPending } = useSignIn();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const onCheckShowPassword = useCallback((checked: CheckedState) => {
    setShowPassword(!!checked);
  }, []);

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      await signIn({
        userId: values.userId,
        password: values.password,
      });

      setIsRedirecting(true);
      router.push("/");
    },
    [router, signIn],
  );

  return {
    form,
    isPending,
    isRedirecting,
    showPassword,
    onCheckShowPassword,
    onSubmit,
  };
};
