import "@/styles/globals.css";

import type { Metadata } from "next";
import Image from "next/image";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { TwitterXIcon } from "@/components/icons/TwitterXIcon";
import { Img } from "@/components/Img";

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
        <div className="flex h-dvh w-full bg-background-secondary md:grid md:grid-cols-3">
          <div className="hidden h-full items-center justify-center md:flex">
            <div className="flex flex-col items-center gap-[32px] p-[80px]">
              <Img
                src="/logo.png"
                alt="ロゴ画像"
                className="h-[200px] w-[320px]"
              />
              <h2 className="text-[24px] font-bold text-text-dark">
                心の扉を開けてみよう
              </h2>
              <div className="flex flex-col items-center gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <p className="text-[14px] text-text-caption">
                    @2024 tosuri13
                  </p>
                  <div className="flex gap-[4px]">
                    <TwitterXIcon className="h-[18px] w-[18px] cursor-pointer" />
                    <GithubIcon className="h-[18px] w-[18px] cursor-pointer" />
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
          <div className="flex h-full w-full justify-center">{children}</div>
          {/* TODO: そのうち何か表示したい */}
          <div className="hidden h-full md:flex" />
        </div>
      </body>
    </html>
  );
}
