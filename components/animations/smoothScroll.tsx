"use client";

import React, { useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
}: SmoothScrollProps) => {
  const [scrollSpring, setScrollSpring] = useSpring(() => ({ y: 0 }));
  const [dragging, setDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScroll, setStartScroll] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    setDragging(true);
    setStartY(event.clientY);
    setStartScroll(scrollSpring.y.get());
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (dragging) {
      const my = event.clientY - startY;
      const newY = startScroll + my;

      if (newY < 0 || newY > document.body.clientHeight - window.innerHeight) {
        return;
      }

      setScrollSpring({ y: newY });
    }
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

  return (
    <animated.div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        overflow: "hidden",
        transform: scrollSpring.y.to((y) => `translate3d(0, ${-y}px, 0)`),
      }}
    >
      {children}
    </animated.div>
  );
};

export default SmoothScroll;
