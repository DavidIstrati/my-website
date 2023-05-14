"use client";

import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BracketText } from "../primitives";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProjectText = ({
  text,
  title,
  demo,
}: {
  text: string;
  title: string;
  demo?: string;
}) => {
  return (
    <div
      className={`w-full text-white flex flex-col justify-center items-start ${SpaceGrotesk.className}`}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <span className="mt-4">{text}</span>
      {demo && (
        <a
          target="_blank"
          href={demo}
          className="mt-4 cursor-pointer appearance-none px-12 py-2 rounded-md bg-zinc-700/50 text-zinc-400 border border-zinc-400 transition duration-500 ease-in-out shadow-lg shadow-transparent hover:bg-emerald-500/20 hover:border-emerald-500 hover:text-emerald-500 hover:shadow-emerald-500/20"
        >
          <BracketText
            text={"Demo"}
            type={"default"}
            animated={false}
            clickable={true}
          />
        </a>
      )}
    </div>
  );
};

const ProjectCard = ({
  image,
  title,
  text,
  orientation,
  demo,
}: {
  image: string;
  title: string;
  text: string;
  orientation: "left" | "right";
  demo?: string;
}) => {
  return (
    <div className="w-full flex flex-row my-40 space-x-6">
      {orientation == "left" && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className={"w-1/4 flex justify-center items-center"}
        >
          <ProjectText {...{ text, title, demo }} />
        </motion.div>
      )}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.4,
          x: orientation == "right" ? -500 : 500,
        }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-3/4 p-6 bg-gradient-to-tr from-zinc-600/30 to-zinc-700/30 backdrop-blur-sm rounded-md border border-zinc-500"
      >
        <img
          src={image}
          className=" w-full rounded-md border border-zinc-500 shadow-xl"
        />
      </motion.div>
      {orientation == "right" && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className={"w-1/4 flex justify-center items-center"}
        >
          <ProjectText {...{ text, title, demo }} />
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
