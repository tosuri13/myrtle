"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/utils/hono";
import { getAuthToken } from "@/features/Auth/utils/getAuthToken";
import type { User } from "@myrtle/types";

const formSchema = z.object({
  name: z.string().min(1).max(50),
  bio: z.string().max(160),
});

interface UseProfileEditDialogProps {
  user: User;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export const useProfileEditDialog = ({
  user,
  setDropdownOpen,
}: UseProfileEditDialogProps) => {
  const [open, setOpen] = useState(false);

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [profileFile, setProfileFile] = useState<File | null>(null);

  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
      bio: user.bio,
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const token = await getAuthToken();

      await client.api.users[":userId"].$put(
        {
          param: { userId: user.userId },
          json: {
            name: values.name,
            bio: values.bio,
          },
        },
        { headers: { Authorization: token } },
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", user.userId] });
    },
  });

  const uploadImageMutation = useMutation({
    mutationFn: async ({
      file,
      imageType,
    }: {
      file: File;
      imageType: "avatar" | "profile";
    }) => {
      const token = await getAuthToken();

      const uploadUrlResponse = await client.api.users[":userId"][
        "upload-url"
      ].$post(
        {
          param: { userId: user.userId },
          json: {
            imageType,
            contentType: file.type,
          },
        },
        { headers: { Authorization: token } },
      );

      const { uploadUrl } = await uploadUrlResponse.json();

      await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (avatarFile) {
      await uploadImageMutation.mutateAsync({
        file: avatarFile,
        imageType: "avatar",
      });
    }

    if (profileFile) {
      await uploadImageMutation.mutateAsync({
        file: profileFile,
        imageType: "profile",
      });
    }

    await updateUserMutation.mutateAsync(values);

    setOpen(false);
    setDropdownOpen(false);
    setAvatarFile(null);
    setProfileFile(null);
  };

  const handleAvatarChange = (file: File | null) => {
    setAvatarFile(file);
  };

  const handleProfileChange = (file: File | null) => {
    setProfileFile(file);
  };

  return {
    open,
    setOpen,
    form,
    onSubmit,
    handleAvatarChange,
    handleProfileChange,
  };
};
