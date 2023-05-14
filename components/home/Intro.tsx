"use client";

import { BracketText, BruteForceTypewriter } from "@/components";
import { motion } from "framer-motion";

import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";

import { AiOutlineArrowDown } from "react-icons/ai";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const IntroHome = () => {
  const [skew, setSkew] = useState(0);

  const handleScroll = () => {
    if (window.innerWidth >= 1280) {
      const scrollPosition = window.scrollY;
      const maxT = -500; // -skew-y-12 corresponds to a skew of 12 degrees
      const skewAngle = Math.max(
        (scrollPosition / window.innerHeight) * maxT,
        maxT
      );
      setSkew(skewAngle);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col xl:flex-row items-center xl:p-20">
        <div
          className="w-full xl:w-full h-full"
          style={{
            transform: `translate(${skew}px, 0px)`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="w-full h-full flex flex-col items-start justify-center transition duration-300 ease-in-out"
          >
            <div className="flex flex-row items-start justify-center">
              <BracketText
                text={"p"}
                type={"open"}
                className={"text-zinc-500 text-xs xl:text-sm 2xl:text-md"}
              />
              <p
                className={`text-emerald-500 text-xs xl:text-md font-bold mx-2 ${SpaceGrotesk.className}`}
              >
                <BruteForceTypewriter
                  text={"This is"}
                  typingSpeed={40}
                  pauseDuration={10}
                  delay={2500}
                />
              </p>
              <BracketText
                text={"p"}
                type={"closed"}
                className={"text-zinc-500 text-xs xl:text-sm 2xl:text-md"}
              />
            </div>
            <div className="h-5 w-full bg-transparent opacity-0"></div>
            <BracketText
              text={"h1"}
              type={"open"}
              className={"ml-10 text-zinc-500 text-xs xl:text-sm 2xl:text-md"}
              animated={true}
            />
            <h1
              className={`text-3xl xl:text-5xl 2xl:text-7xl text-white font-bold ${SpaceGrotesk.className} my-5 ml-20`}
            >
              <BruteForceTypewriter
                text={"David Istrati"}
                className={"text-3xl xl:text-9xl 2xl:text-9xl"}
                typingSpeed={50}
                pauseDuration={30}
                delay={2500}
              />
            </h1>
            <BracketText
              text={"h1"}
              type={"closed"}
              className={"ml-10 text-zinc-500 text-xs xl:text-sm 2xl:text-md"}
              animated={true}
            />

            <BracketText
              text={"button"}
              type={"open"}
              className={"ml-10 text-zinc-500 text-xs xl:text-sm 2xl:text-md"}
            />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="my-5 ml-20 xl:mr-10 rounded-md flex flex-row justify-center items-center px-10 xl:px-16 py-4 text-sm xl:text-md 2xl:text-xl appearance-none cursor-pointer bg-emerald-800/50 border border-emerald-600 text-emerald-600 transition duration-500 ease-in-out hover:text-emerald-400 hover:bg-emerald-600/50 hover:border-emerald-400 shadow-xl hover:shadow-emerald-400/20"
            >
              {"->"}
              <span className="mx-4 cursor-pointer">
                <BruteForceTypewriter
                  text={"résumé.view()"}
                  typingSpeed={70}
                  pauseDuration={60}
                  delay={5000}
                  clickable={true}
                />
              </span>{" "}
              {"<-"}
            </a>
            <BracketText
              text={"button "}
              type={"closed"}
              className={"ml-10 text-zinc-500 text-xs xl:text-sm 2xl:text-md"}
            />
            <div className="flex flex-row items-start justify-center mt-4">
              <BracketText
                text={"p"}
                type={"open"}
                className={"text-zinc-500 text-xs xl:text-sm 2xl:text-md"}
              />
              <p
                className={`text-emerald-500 text-xs xl:text-sm 2xl:text-md font-bold mx-2 ${SpaceGrotesk.className}`}
              >
                <BruteForceTypewriter
                  text={"Building disruptive companies and code"}
                  typingSpeed={20}
                  pauseDuration={10}
                  delay={2500}
                />{" "}
              </p>
              <BracketText
                text={"p"}
                type={"closed"}
                className={"text-zinc-500 text-xs xl:text-sm 2xl:text-md"}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full h-10 hidden xl:visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.5, duration: 1 }}
          className="w-full h-10 animate-bounce  text-emerald-700 text-3xl flex flex-col justify-center items-center"
        >
          <span className="text-sm">scroll</span>
          <div className="relative flex">
            <span>
              <AiOutlineArrowDown />
            </span>
            <span className="absolute top-0 left-0 animate-ping">
              <AiOutlineArrowDown />
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroHome;
