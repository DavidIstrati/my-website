"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  strings: string[];
};

const Typewriter: React.FC<TypewriterProps> = ({ strings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText(currentText.slice(0, -1));
          if (currentText.length === 1) {
            setIsDeleting(false);
            setCurrentIndex((currentIndex + 1) % strings.length);
          }
        } else {
          setCurrentText(
            strings[currentIndex].slice(0, currentText.length + 1)
          );
          if (currentText.length === strings[currentIndex].length) {
            const timerShow = setTimeout(() => setIsDeleting(true), 1000);
          }
        }
      },
      isDeleting ? 1000 / currentText.length : 100
    );

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, strings]);

  return <span>{currentText}</span>;
};

export default Typewriter;
