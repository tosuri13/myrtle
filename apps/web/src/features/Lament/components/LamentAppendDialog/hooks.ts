"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCallback, useState } from "react";

import { useAddLament } from "@/features/Lament/hooks/useAddLament";

export const MAX_CONTENT_LENGTH = 200;

const formSchema = z.object({
  content: z.string().max(MAX_CONTENT_LENGTH).min(1),
});

export const useLamentAppendDialog = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const content = form.watch("content");
  const remaining = Math.max(MAX_CONTENT_LENGTH - content.length, 0);

  const { mutate } = useAddLament();

  const onSubmit = useCallback(
    (values: z.infer<typeof formSchema>) => {
      mutate({ content: values.content });
      form.reset();

      setOpen(false);
    },
    [form, mutate],
  );

  return { open, setOpen, form, onSubmit, remaining };
};
