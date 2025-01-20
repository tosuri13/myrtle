import "@/styles/globals.css";

import type { Metadata } from "next";

import { IconButton } from "@/components/IconButton";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { TwitterXIcon } from "@/components/icons/TwitterXIcon";
import { GhostLogo } from "@/components/logos/GhostLogo";
import { MyrtleLogo } from "@/components/logos/MyrtleLogo";
import { VercelLogo } from "@/components/logos/VercelLogo";
import { QueryProvider } from "@/components/QueryProvider";
import { AuthProvider } from "@/features/Auth/components/AuthProvider";

export const metadata: Metadata = {
  title: "Myrtle",
  description:
    "A single-person SNS to write down your daily feelings and complaints",
  icons: { icon: "/images/ghost.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="dark bg-background">
        <AuthProvider>
          <QueryProvider>
            <div className="flex h-dvh w-full overflow-y-scroll md:grid md:grid-cols-2 xl:grid-cols-3">
              <div className="hidden h-dvh text-foreground md:sticky md:top-0 md:flex md:items-center md:justify-center">
                <div className="flex flex-col items-center gap-[32px] p-[40px]">
                  <MyrtleLogo />
                  <div className="flex flex-col items-center gap-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <p className="text-[14px]">@2024 tosuri13</p>
                      <div className="flex items-center">
                        <IconButton asChild>
                          <a
                            href="https://x.com/tosuri13"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <TwitterXIcon className="fill-foreground" />
                          </a>
                        </IconButton>
                        <IconButton asChild>
                          <a
                            href="https://github.com/tosuri13/myrtle"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GithubIcon className="fill-foreground" />
                          </a>
                        </IconButton>
                      </div>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <p className="text-[14px]">Powerd By</p>
                      <VercelLogo className="h-[16px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-full min-w-[344px] justify-center">
                {children}
              </div>
              <div className="relative hidden h-dvh xl:sticky xl:top-0 xl:flex">
                <GhostLogo className="absolute right-[40px] bottom-[40px] animate-float" />
              </div>
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
