"use client";

import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import type { Lament } from "@myrtle/types";

import { useDeleteLament } from "@/features/Lament/hooks/useDeleteLament";

type UseDeleteLamentDialogProps = {
  userId: string;
  lament: Lament;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

export const useLamentDeleteDialog = ({
  userId,
  lament,
  setDropdownOpen,
}: UseDeleteLamentDialogProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm();
  const { mutate } = useDeleteLament();

  const onSubmit = useCallback(() => {
    mutate({
      userId,
      lamentId: lament.lamentId,
    });

    setOpen(false);
    setDropdownOpen(false);
  }, [userId, lament, mutate, setDropdownOpen]);

  return { open, setOpen, form, onSubmit };
};
