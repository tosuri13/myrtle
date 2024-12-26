import "@/styles/globals.css";

import type { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/Button";
import { GhostImage } from "@/components/GhostImage";
import { IconButton } from "@/components/IconButton";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { TwitterXIcon } from "@/components/icons/TwitterXIcon";
import { LogoImage } from "@/components/LogoImage";
import { QueryProvider } from "@/components/QueryProvider";
import { AuthProvider } from "@/features/Auth/components/AuthProvider";
import { LamentAppendDialog } from "@/features/Lament/components/LamentAppendDialog";

export const metadata: Metadata = {
  title: "Myrtle",
  description:
    "A single-person SNS to write down your daily feelings and complaints",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className="bg-background-secondary">
        <AuthProvider>
          <QueryProvider>
            <div className="flex h-dvh w-full overflow-y-scroll md:grid md:grid-cols-2 xl:grid-cols-3">
              <div className="hidden h-dvh bg-background-secondary md:sticky md:top-0 md:flex md:items-center md:justify-center">
                <div className="flex flex-col items-center gap-[32px] p-[40px]">
                  <LogoImage />
                  <div className="flex flex-col items-center gap-[12px]">
                    <h2 className="text-[24px] font-bold text-text-dark">
                      心の扉を開けてみよう
                    </h2>
                    <LamentAppendDialog>
                      <Button size="lg">嘆いてみる!!</Button>
                    </LamentAppendDialog>
                  </div>
                  <div className="flex flex-col items-center gap-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <p className="text-[14px] text-text-caption">
                        @2024 tosuri13
                      </p>
                      <div className="flex items-center">
                        <IconButton asChild>
                          <a href="https://x.com/tosuri13" target="_blank">
                            <TwitterXIcon />
                          </a>
                        </IconButton>
                        <IconButton asChild>
                          <a
                            href="https://github.com/tosuri13/myrtle"
                            target="_blank"
                          >
                            <GithubIcon />
                          </a>
                        </IconButton>
                      </div>
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <p className="text-[14px] text-text-caption">Powerd By</p>
                      <Image
                        src="/vercel.png"
                        alt="vercel"
                        width={54}
                        height={12}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-full min-w-[344px] justify-center bg-background-secondary">
                {children}
              </div>
              <div className="relative hidden h-dvh bg-background-secondary xl:sticky xl:top-0 xl:flex">
                <GhostImage className="absolute bottom-[40px] right-[40px] animate-float" />
              </div>
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
