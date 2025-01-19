"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAddLament } from "@/features/Lament/hooks/useAddLament";
import { useCallback, useState } from "react";

const formSchema = z.object({
  content: z.string(),
});

export const useLamentAppnedDialog = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const { mutateAsync, isPending } = useAddLament();

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      await mutateAsync({ content: values.content });
      setOpen(false);
    },
    [mutateAsync, setOpen],
  );

  return { open, setOpen, form, onSubmit, isPending };
};
