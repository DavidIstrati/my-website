"use client";

import {
  BracketText,
  HappyFace,
  HighlightCard,
} from "@/components";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Highlights = () => {
  const [showHeart, setShowHeart] = useState<boolean>(false);
  const [showPlus, setShowPlus] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-xl xl:text-3xl text-white">Highlights</h2>
      <div className="flex flex-row items-center justify-center mt-10">
        <BracketText
          text={"q"}
          type={"open"}
          className={"text-zinc-500 text-sm"}
        />
        <div className="text-emerald-500 text-sm xl:text-xl mx-5 flex flex-row">
          <FaQuoteLeft className="text-xs" />
          <span className="mx-2">{"Carpe Diem"}</span>
          <FaQuoteRight className="text-xs" />
        </div>
        <BracketText
          text={"q"}
          type={"closed"}
          className={"text-zinc-500 text-sm"}
        />
      </div>

      <div className="flex w-full items-start justify-start mt-20 text-xs text-blue-500 opacity-50">
        <span>
          {"val "}
          <span className="text-sky-500">highlights</span>
          {": Array[String] = ("}
        </span>
      </div>

      <div className="w-full mt-4 flex flex-col xl:flex-row space-y-12 xl:-space-y-0 space-x-0 xl:space-x-12 items-stretch">
        <div className="w-full xl:w-1/3">
          <HighlightCard
            index={"01"}
            title="Web Dev"
            age={"13"}
            description={
              "I started working as a freelance web developer. I created animations in javascript and static websites."
            }
          />
        </div>
        <div className="w-full xl:w-1/3 flex justify-center items-center">
          <div className="w-full h-full border border-zinc-600 p-10 flex flex-col transition duration-500 ease-in-out bg-zinc-800 hover:bg-zinc-700/50 shadow-lg hover:shadow-zinc-800/50 hover:scale-105">
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
        <div className="w-full xl:w-1/3">
          <HighlightCard
            index={"02"}
            title="Startup Founder"
            age={"15"}
            description={
              "I founded my own startup. I co-founded a SaaS startup called Measure, and worked as the CTO of the company. We eventually got into the ODF acceleretor."
            }
          />
        </div>
      </div>
      <div className="w-full mt-8 flex flex-col xl:flex-row space-y-12 xl:space-y-0 space-x-0 xl:space-x-12 items-stretch">
        <div className="w-full xl:w-1/3">
          <div className="w-full h-full border border-zinc-600 p-10 flex flex-col justify-center items-center transition duration-500 ease-in-out bg-zinc-800 hover:bg-zinc-700/50 shadow-lg hover:shadow-zinc-800/50">
            {showHeart ? (
              <HappyFace
                Coords={[
                  [70, 30],
                  [60, 20],
                  [80, 20],
                  [50, 10],
                  [90, 10],
                  [40, 10],
                  [100, 10],
                  [30, 20],
                  [110, 20],
                  [20, 30],
                  [120, 30],
                  [20, 40],
                  [120, 40],
                  [30, 50],
                  [110, 50],
                  [40, 60],
                  [100, 60],
                  [50, 70],
                  [90, 70],
                  [60, 80],
                  [80, 80],
                  [70, 90],
                ]}
              />
            ) : (
              <button
                onClick={() => setShowHeart(true)}
                className="bg-zinc-700 cursor-pointer border rounded-lg text-xl border-zinc-600 p-5 flex justify-center items-center text-white shadow-lg transition duration-500 ease-in-out shadow-zinc-900/40 hover:scale-105 hover:shadow-zinc-900/60 hover:shadow-xl"
              >
                <BsSuitHeartFill />
              </button>
            )}
          </div>
        </div>
        <div className="w-full xl:w-1/3">
          <HighlightCard
            index={"03"}
            title="ML Engineer"
            age={"17"}
            description={
              "I was #10 at Soleadify, a startup that raised $7.5M+ in funding. I worked with state-of-the-art technologies and machine learning models."
            }
          />
        </div>
        <div className="w-full xl:w-1/3">
          <div className="w-full h-full border border-zinc-600 p-10 flex flex-col justify-center items-center transition duration-500 ease-in-out bg-zinc-800 hover:bg-zinc-700/50 shadow-lg hover:shadow-zinc-800/50">
            {showPlus ? (
              <HappyFace
                Coords={[
                  [70, 40],
                  [70, 30],
                  [80, 40],
                  [70, 50],
                  [60, 40],
                  [70, 20],
                  [90, 40],
                  [70, 60],
                  [50, 40],
                ]}
              />
            ) : (
              <button
                onClick={() => setShowPlus(true)}
                className="bg-zinc-700  cursor-pointer border rounded-lg text-xl border-zinc-600 p-5 flex justify-center items-center text-white shadow-lg transition duration-500 ease-in-out shadow-zinc-900/40 hover:scale-105 hover:shadow-zinc-900/60 hover:shadow-xl"
              >
                <AiOutlinePlus />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
