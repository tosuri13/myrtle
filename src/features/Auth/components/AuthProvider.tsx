"use client";

import { Amplify } from "aws-amplify";
import * as React from "react";

import { authConfig } from "@/features/Auth/configs/authConfig";

Amplify.configure(authConfig, { ssr: true });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return children;
};
