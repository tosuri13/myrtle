import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/AlertDialog";
import type { Lament } from "@myrtle/types";
import type { Dispatch, SetStateAction } from "react";
import { useLamentDeleteDialog } from "../hooks/useLamentDeleteDialog";
import { Form } from "@/components/Form";

interface LamentDeleteDialogProps {
  children: React.ReactNode;
  lament: Lament;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export const LamentDeleteDialog = ({
  children,
  lament,
  setDropdownOpen,
}: LamentDeleteDialogProps) => {
  const { open, setOpen, form, onSubmit } = useLamentDeleteDialog({
    lament,
    setDropdownOpen,
  });

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>本当に嘆きを削除しますか?</AlertDialogTitle>
          <AlertDialogDescription>
            一度削除した嘆きは二度と戻ってきません!!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <AlertDialogFooter>
              <AlertDialogCancel>キャンセル</AlertDialogCancel>
              <AlertDialogAction type="submit">削除する!!</AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
