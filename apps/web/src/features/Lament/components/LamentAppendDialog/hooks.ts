"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCallback, useState } from "react";

import { usePostLament } from "@/features/Lament/hooks/usePostLament";

export const MAX_CONTENT_LENGTH = 200;

const formSchema = z.object({
  content: z.string().max(MAX_CONTENT_LENGTH).min(1),
});

type UseLamentAppendDialogProps = {
  userId: string;
};

export const useLamentAppendDialog = ({
  userId,
}: UseLamentAppendDialogProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const content = form.watch("content");
  const remainContentLength = Math.max(MAX_CONTENT_LENGTH - content.length, 0);

  const { mutate } = usePostLament();

  const onSubmit = useCallback(
    (values: z.infer<typeof formSchema>) => {
      mutate({ userId, data: { content: values.content } });
      form.reset();

      setOpen(false);
    },
    [form, userId, mutate],
  );

  return { open, setOpen, form, onSubmit, remainContentLength };
};
