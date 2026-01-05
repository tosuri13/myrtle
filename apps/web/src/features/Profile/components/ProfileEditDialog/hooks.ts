"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import type { User } from "@myrtle/types";
import { usePutUser } from "@/features/Profile/hooks/userPutUser";
import { useGenerateUplaodUrl } from "../../hooks/useGenerateUploadUrl";

const formSchema = z.object({
  name: z.string().min(1).max(20),
  bio: z.string().max(100),
  avatarFile: z.custom<File>().optional(),
  profileFile: z.custom<File>().optional(),
});

type UseProfileEditDialogProps = {
  user: User;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

export const useProfileEditDialog = ({
  user,
  setDropdownOpen,
}: UseProfileEditDialogProps) => {
  const [open, setOpen] = useState(false);
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState<string | null>(null);
  const [profilePreviewUrl, setProfilePreviewUrl] = useState<string | null>(
    null,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
      bio: user.bio,
    },
  });

  const { mutate } = usePutUser();
  const { mutateAsync: generateUploadUrl } = useGenerateUplaodUrl();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.avatarFile) {
      const { uploadUrl } = await generateUploadUrl({
        userId: user.userId,
        data: {
          mediaType: "AVATAR",
          contentType: values.avatarFile.type,
        },
      });

      await fetch(uploadUrl, {
        method: "PUT",
        body: values.avatarFile,
        headers: {
          "Content-Type": values.avatarFile.type,
          "Cache-Control": "immutable, max-age=31536000",
        },
      });
    }

    if (values.profileFile) {
      const { uploadUrl } = await generateUploadUrl({
        userId: user.userId,
        data: {
          mediaType: "PROFILE",
          contentType: values.profileFile.type,
        },
      });

      await fetch(uploadUrl, {
        method: "PUT",
        body: values.profileFile,
        headers: {
          "Content-Type": values.profileFile.type,
          "Cache-Control": "immutable, max-age=31536000",
        },
      });
    }

    mutate({
      userId: user.userId,
      data: { name: values.name, bio: values.bio },
    });
    form.reset();

    if (avatarPreviewUrl) URL.revokeObjectURL(avatarPreviewUrl);
    if (profilePreviewUrl) URL.revokeObjectURL(profilePreviewUrl);

    setOpen(false);
    setDropdownOpen(false);
    setAvatarPreviewUrl(null);
    setProfilePreviewUrl(null);
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("avatarFile", file);

      if (avatarPreviewUrl) URL.revokeObjectURL(avatarPreviewUrl);
      setAvatarPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("profileFile", file);

      if (profilePreviewUrl) URL.revokeObjectURL(profilePreviewUrl);
      setProfilePreviewUrl(URL.createObjectURL(file));
    }
  };

  return {
    open,
    setOpen,
    form,
    onSubmit,
    handleAvatarChange,
    handleProfileChange,
    avatarPreviewUrl,
    profilePreviewUrl,
  };
};
