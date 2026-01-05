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
import type { Lament } from "@myrtle/types";

import { usePutLament } from "@/features/Lament/hooks/usePutLament";

export const MAX_CONTENT_LENGTH = 200;

const formSchema = z.object({
  content: z.string().max(MAX_CONTENT_LENGTH).min(1),
});

type UseEditDialogProps = {
  userId: string;
  lament: Lament;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

export const useLamentEditDialog = ({
  userId,
  lament,
  setDropdownOpen,
}: UseEditDialogProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: lament.content,
    },
  });

  const content = form.watch("content");
  const remainContentLength = Math.max(MAX_CONTENT_LENGTH - content.length, 0);

  const { mutate } = usePutLament();

  const onSubmit = useCallback(
    (values: z.infer<typeof formSchema>) => {
      mutate({
        userId,
        lamentId: lament.lamentId,
        data: {
          content: values.content,
          postTime: lament.postTime,
        },
      });
      form.reset();

      setOpen(false);
      setDropdownOpen(false);
    },
    [form, userId, lament, mutate, setDropdownOpen],
  );

  return { open, setOpen, form, onSubmit, remainContentLength };
};
