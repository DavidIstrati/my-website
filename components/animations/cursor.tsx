"use client";

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const updateCursorPosition = (e: MouseEvent) => {
    if (typeof window === "undefined") return; // Check if the component is running on the server
    const element = document.elementFromPoint(e.clientX, e.clientY);
    setIsPointer(
      element ? element.classList.contains("cursor-pointer") : false
    );
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    api.start({
      x: cursorPosition.x,
      y: cursorPosition.y,
      config: { tension: 100, friction: 10 },
    });
  }, [api, cursorPosition]);

  useEffect(() => {
    if (typeof window === "undefined") return; // Check if the component is running on the server

    document.addEventListener("mousemove", updateCursorPosition);
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <animated.div
      style={{
        left: x.to((x) => `${x}px`),
        top: y.to((y) => `${y}px`),
      }}
      className="fixed pointer-events-none w-4 h-4 flex justify-center items-center z-40"
    >
      <div
        className={`w-4 h-4 ${
          isPointer ? "bg-white" : "bg-emerald-400"
        } blur-md absolute top-0 left-0 rounded-full`}
      ></div>

      <div
        className={`w-2 h-2 transition duration-200 ease-in-out ${
          isPointer
            ? "rotate-45 scale-150 bg-white"
            : "rounded-full bg-emerald-400"
        }`}
      ></div>
      <div
        className={`w-4 h-4 rounded-full scale-150 bg-white/20 animate-ping absolute ${
          isPointer ? "visible" : "hidden"
        }`}
      ></div>
    </animated.div>
  );
};

export default CustomCursor;
