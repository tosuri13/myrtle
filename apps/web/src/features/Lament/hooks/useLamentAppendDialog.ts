"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAddLament } from "@/features/Lament/hooks/useAddLament";
import { useCallback, useState } from "react";

export const MAX_CONTENT_LENGTH = 200;

const formSchema = z.object({
  content: z.string().max(MAX_CONTENT_LENGTH),
});

export const useLamentAppnedDialog = () => {
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
    async (values: z.infer<typeof formSchema>) => {
      mutate({ content: values.content });
      setOpen(false);
    },
    [mutate],
  );

  return { open, setOpen, form, onSubmit, remaining };
};
