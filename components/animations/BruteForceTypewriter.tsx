"use client";

import React, { useState, useEffect } from "react";

export interface BruteForceTypewriterProps {
  text: string;
  typingSpeed?: number;
  pauseDuration?: number;
  delay?: number;
  clickable?: boolean;
  className?: string;
}

const BruteForceTypewriter: React.FC<BruteForceTypewriterProps> = ({
  text,
  typingSpeed = 50,
  pauseDuration = 200,
  delay = 500,
  clickable = false,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [randomChar, setRandomChar] = useState("");

  useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let currentText = "";

    const typeNextCharacter = async (index: number) => {
      if (index < text.length) {
        let start = Date.now();
        while (Date.now() - start < pauseDuration) {
          const randomChar =
            characters[Math.floor(Math.random() * characters.length)];
          setRandomChar(randomChar);
          await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        }
        currentText += text[index];
        setDisplayedText(currentText);
        setTimeout(() => typeNextCharacter(index + 1), pauseDuration);
      } else {
        setRandomChar("");
      }
    };

    setTimeout(() => typeNextCharacter(0), delay);
  }, [text, typingSpeed, pauseDuration]);

  return (
    <span className={`${className} ${clickable ? "cursor-pointer" : ""}`}>
      {displayedText}
      <span className="opacity-40">{randomChar}</span>
    </span>
  );
};

export default BruteForceTypewriter;
