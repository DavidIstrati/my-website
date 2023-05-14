"use client";

import React, { useEffect, useRef } from "react";

interface ParallaxCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({ className, children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const xAxisRotation = (e.clientY - rect.top - halfHeight) / halfHeight;
    const yAxisRotation = (e.clientX - rect.left - halfWidth) / halfWidth;

    if (cardRef.current)
      cardRef.current.style.transform = `perspective(1000px) rotateX(${
        -xAxisRotation / 2
      }deg) rotateY(${yAxisRotation / 2}deg)`;

    const shineX = e.clientX - rect.left;
    const shineY = e.clientY - rect.top;
    if (cardRef.current)
      cardRef.current.style.backgroundPosition = `${shineX}px ${shineY}px`;

    const angle =
      (Math.atan2(shineY - halfHeight, shineX - halfWidth) * 180) / Math.PI;
    if (cardRef.current)
      cardRef.current.style.borderImage = `linear-gradient(${angle}deg, #18181b, #71717a, #18181b) 1`;
  };

  const onMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
    if (cardRef.current) cardRef.current.style.backgroundPosition = "center";
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transform transition-transform duration-300 ease-out bg-gradient-radial from-zinc-900 to-zinc-800/50 ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default ParallaxCard;
