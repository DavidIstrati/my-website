"use client";

import {
  useTrail,
  useChain,
  useSprings,
  animated,
  useSpringRef,
} from "@react-spring/web";
import { useInView } from "react-spring";

const STROKE_WIDTH = 0.5;

const OFFSET = STROKE_WIDTH / 2;

const MAX_WIDTH = 150 + OFFSET * 2;
const MAX_HEIGHT = 100 + OFFSET * 2;

export default function HappyFace({
  Coords = [
    [50, 30],
    [90, 30],
    [50, 50],
    [60, 60],
    [70, 60],
    [80, 60],
    [90, 50],
  ],
}: {
  Coords: number[][];
}) {
  const [ref, inView] = useInView({ rootMargin: "-200px" });

  const gridApi = useSpringRef();

  const gridSprings = useTrail(16, {
    ref: gridApi,
    from: {
      x2: 0,
      y2: 0,
    },
    to: {
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    },
  });

  const boxApi = useSpringRef();

  const [boxSprings] = useSprings(Coords.length, (i) => ({
    ref: boxApi,
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    delay: i * 200,
    config: {
      mass: 2,
      tension: 220,
    },
  }));

  useChain(inView ? [gridApi, boxApi] : [], [0, 1], 1500);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
        <g>
          {gridSprings.map(({ x2 }, index) => (
            <animated.line
              x1={0}
              y1={index * 10 + OFFSET}
              x2={x2}
              y2={index * 10 + OFFSET}
              key={index}
              strokeWidth={STROKE_WIDTH}
              className={"stroke-zinc-700"}
            />
          ))}
          {gridSprings.map(({ y2 }, index) => (
            <animated.line
              x1={index * 10 + OFFSET}
              y1={0}
              x2={index * 10 + OFFSET}
              y2={y2}
              key={index}
              strokeWidth={STROKE_WIDTH}
              className={"stroke-zinc-700"}
            />
          ))}
        </g>
        {boxSprings.map(({ scale }, index) => (
          <animated.rect
            key={index}
            width={10}
            height={10}
            className={"fill-white"}
            style={{
              transformOrigin: `${5 + OFFSET * 2}px ${5 + OFFSET * 2}px`,
              transform: `translate(${Coords[index][0] + OFFSET}px, ${
                Coords[index][1] + OFFSET
              }px)`,
              scale,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
