"use client";

import { Lobster } from "next/font/google";
import { HandwritingAnimation } from "../animations";

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

const Motto = () => {
  return (
    <div className="w-full my-20 flex flex-col justify-center items-center">
      <div className="w-full xl:w-96 flex justify-start">
        <span className={`text-3xl text-white`}>Adding </span>
      </div>
      <div className="w-full xl:w-96 flex justify-center my-8 xl:my-4">
        <HandwritingAnimation />
      </div>
      <div className="w-full xl:w-96 flex justify-end">
        <span className={`text-3xl text-white text-end`}>to every pixel</span>
      </div>
    </div>
  );
};

export default Motto;
