"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from "react";
import { useUpdateLament } from "@/features/Lament/hooks/useUpdateLament";
import type { Lament } from "@myrtle/types";

export const MAX_CONTENT_LENGTH = 200;

const formSchema = z.object({
  content: z.string().max(MAX_CONTENT_LENGTH).min(1),
});

export const useLamentEditDialog = ({
  lament,
  setDropdownOpen,
}: { lament: Lament; setDropdownOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: lament.content,
    },
  });

  const content = form.watch("content");
  const remaining = Math.max(MAX_CONTENT_LENGTH - content.length, 0);

  const { mutate } = useUpdateLament();

  const onSubmit = useCallback(
    (values: z.infer<typeof formSchema>) => {
      mutate({ lament: { ...lament, content: values.content } });
      setOpen(false);
      setDropdownOpen(false);
    },
    [lament, mutate, setDropdownOpen],
  );

  return { open, setOpen, form, onSubmit, remaining };
};
