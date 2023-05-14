"use client";

import { HappyFace, Header } from "@/components";

export default function Home() {
  return (
    <main className="">
      <div className="w-screen h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white">Coming Soon</h1>
        <div className="w-1/2 xl:w-1/3 mt-20">
          <HappyFace
            Coords={[
              [50, 30],
              [90, 30],
              [50, 50],
              [60, 60],
              [70, 60],
              [80, 60],
              [90, 50],
            ]}
          />
        </div>
      </div>
    </main>
  );
}
