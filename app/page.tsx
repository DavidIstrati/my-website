"use client";

import { Header, IntroHome, Highlights, Motto, TechStack } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="p-20 h-full flex justify-center items-center">
        <IntroHome />
      </div>

      <div className="p-20 mt-20 xl:mt-0">
        <Highlights />
      </div>

      <div className="p-20">
        <Motto />
      </div>

      <div className="bg-blueprint">
        <div className="px-10 xl:px-40 py-40 bg-gradient-radial from-transparent via-zinc-900/95 to-zinc-900 bg-opacity-50">
          <TechStack />
        </div>
      </div>
    </main>
  );
}
