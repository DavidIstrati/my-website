"use client";

import { useRouter } from "next/navigation";
import { BracketText } from "../primitives";

const NavButton = ({
  index,
  title,
  orientation,
  link,
}: {
  index: string;
  title: string;
  orientation: "left" | "right";
  link: string;
}) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-row text-zinc-200 hover:text-emerald-500 text-lg xl:text-md 2xl:text-lg p-4 hover:bg-emerald-500/10 border border-zinc-900 hover:border-emerald-500 ${
        orientation == "left" ? "xl:hover:-skew-y-6" : "xl:hover:skew-y-6"
      } transition duration-300 ease-in-out cursor-pointer hover:translate-x-10`}
      onClick={() => router.replace(link)}
    >
      <a className="cursor-pointer w-20">{`\\\\ ${index}`}</a>
      <a className="ml-6 cursor-pointer">
        <BracketText
          text={title}
          animated={true}
          clickable={true}
          delay={1500}
        />
      </a>
    </div>
  );
};

export default NavButton;
