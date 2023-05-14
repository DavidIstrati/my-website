"use client";

import React, { useEffect, useState } from 'react';

interface AnimatedSquareProps {
  delay: number;
}

const AnimatedSquare: React.FC<AnimatedSquareProps> = ({ delay }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const toggleOpacity = () => {
      setOpacity((prevOpacity) => (prevOpacity === 0 ? 1 : 0));
    };

    setTimeout(toggleOpacity, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opacity]);

  return <div className="w-10 h-10 bg-emerald-500 bg-opacity-10 border border-emerald-500/50" style={{ opacity }}></div>;
};

const AnimatedGrid: React.FC = () => {
  const grid = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () =>(Math.random()+0.5) * 3000));

  return (
    <div className="relative w-full h-full grid grid-cols-10 gap-2 items-center justify-center">
      {grid.map((row, rowIndex) =>
        row.map((delay, colIndex) => (
          <AnimatedSquare key={`${rowIndex}-${colIndex}`} delay={delay} />
        ))
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <a href="/path/to/your/resume.pdf" className="text-white">
          Download resume
        </a>
      </div>
    </div>
  );
};

export default AnimatedGrid;
