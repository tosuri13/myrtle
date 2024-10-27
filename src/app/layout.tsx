import "@/styles/globals.css";

import type { Metadata } from "next";
import Image from "next/image";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { TwitterXIcon } from "@/components/icons/TwitterXIcon";
import { Logo } from "@/components/Logo";

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
      <body>
        <div className="bg-background-primary h-dvh w-full md:grid md:grid-cols-3">
          <div className="flex h-full items-center justify-center">
            <div className="hidden flex-col items-center gap-[32px] p-[80px] md:flex">
              <Logo />
              <h2 className="text-[24px] font-bold">心の扉を開けてみよう</h2>
              <div className="flex flex-col items-center gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <p className="text-text-caption text-[14px]">
                    @2024 tosuri13
                  </p>
                  <div className="flex gap-[4px]">
                    <TwitterXIcon className="h-[18px] w-[18px] cursor-pointer" />
                    <GithubIcon className="h-[18px] w-[18px] cursor-pointer" />
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <p className="text-text-caption text-[14px]">Powerd By</p>
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
          <div className="h-full">{children}</div>
          <div className="hidden h-full md:flex" />
        </div>
      </body>
    </html>
  );
}
