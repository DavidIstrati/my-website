"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FadingTextProps = {
  items: string[];
  duration?: number;
};

const FadingText: React.FC<FadingTextProps> = ({ items, duration = 3000 }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, duration);

    return () => clearInterval(interval);
  }, [items, duration]);

  return (
    <span className="w-full relative ml-6">
      <AnimatePresence>
        <motion.span
          key={currentItemIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: duration / 3000 }}
          className="absolute transition-opacity"
        >
          {items[currentItemIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default FadingText;
