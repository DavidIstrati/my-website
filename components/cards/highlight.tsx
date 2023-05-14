"use client";

import { RefObject, useEffect, useRef, useState } from "react";

const handleCountLines = (
  contentRef: RefObject<HTMLParagraphElement>
): number => {
  if (contentRef.current) {
    const divHeight = contentRef.current.offsetHeight;
    const style = window.getComputedStyle(contentRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const lines = divHeight / lineHeight;
    return lines;
  } else {
    return 0;
  }
};

const HighlightCard = ({
  index,
  title,
  age,
  description,
}: {
  index: string;
  title: string;
  age: string;
  description: string;
}) => {
  const [lineNumber, setLineNumber] = useState(0);
  const [windowSize, setWindowSize] = useState<string>("");

  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setLineNumber(Math.round(handleCountLines(contentRef)));
  }, [contentRef, windowSize]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth + "x" + window.innerHeight);
      // Your code to handle the resize or refresh event
    };

    // Attach event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full border border-zinc-600 p-10 flex flex-col transition duration-500 ease-in-out bg-zinc-800 hover:bg-zinc-700/50 shadow-lg hover:shadow-zinc-800/50 hover:scale-105">
      <span className="text-zinc-600 text-xs">{`\\\\ ${index}`}</span>
      <h4 className="text-white text-lg my-4">{title}</h4>
      <div className="flex flex-row">
        <div className="w-10 flex flex-col items-start justify-center text-zinc-700 text-sm">
          {lineNumber > 0 &&
            Array.from(Array(lineNumber).keys()).map((lineNum) => (
              <>
                {lineNum} <br />
              </>
            ))}
        </div>
        <div className="w-full">
          <p className="text-zinc-400 text-sm" ref={contentRef}>
            <span className="text-emerald-500">{`At ${age} years old`}</span>{" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
