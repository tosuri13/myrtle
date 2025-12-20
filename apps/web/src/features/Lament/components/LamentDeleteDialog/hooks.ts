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

export const useLamentDeleteDialog = ({
  lament,
  setDropdownOpen,
}: { lament: Lament; setDropdownOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [open, setOpen] = useState(false);

  const form = useForm();
  const { mutate } = useDeleteLament();

  const onSubmit = useCallback(() => {
    mutate({ lament: lament });
    setOpen(false);
    setDropdownOpen(false);
  }, [lament, mutate, setDropdownOpen]);

  return { open, setOpen, form, onSubmit };
};
