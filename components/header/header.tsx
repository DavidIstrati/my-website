"use client";

import { motion } from "framer-motion";
import { RiDropLine } from "react-icons/ri";
import { BinaryNumbers } from "../animations";
import NavButton from "./navButton";

const Header = () => {
  return (
    <div className="w-screen xl:h-40 flex flex-col xl:flex-row justify-center items-center bg-transparent px-20">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full xl:w-1/3 h-full px-12 py-10 flex flex-col items-center justify-center"
      >
        <NavButton
          link={"/"}
          index={"01"}
          title={"Home"}
          orientation={"left"}
        />
        <NavButton
          link={"/work"}
          index={"02"}
          title={"Work"}
          orientation={"left"}
        />
      </motion.div>
      <motion.div
        className="w-full xl:w-1/3 h-full px-12 py-10 flex flex-col text-white text-5xl 2xl:text-7xl justify-center items-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="transition duration-500 ease-in-out hover:text-emerald-500 z-40 text-5xl"
        >
          DI
        </motion.h1>
        <BinaryNumbers />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full xl:w-1/3 h-full px-12 py-10 flex flex-col  items-center justify-center"
      >
        <NavButton
          link={"/resume.pdf"}
          index={"03"}
          title={"Resume"}
          orientation={"right"}
        />
        <NavButton
          link={"/comingSoon"}
          index={"04"}
          title={"Contact"}
          orientation={"right"}
        />
      </motion.div>
      {/* <div className="w-10 h-10 absolute bottom-5 right-5 rounded-md bg-zinc-800 border border-zinc-700 flex justify-center items-center text-zinc-400">
        <RiDropLine />
      </div> */}
    </div>
  );
};

export default Header;
