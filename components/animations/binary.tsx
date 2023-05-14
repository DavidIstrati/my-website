"use client";

import { useEffect, useState } from "react";

function shuffleArray(array: number[]): number[] {
  const result: number[] = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    if (i !== j) {
      result[i] = result[j];
    }
    result[j] = array[i];
  }

  return result;
}

const wait = async (ms: number) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};

const BinaryNumbers: React.FC = () => {
  const sampleArray = [
    1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1,
    0, 1,
  ];
  const rows: number = 10;
  const interval: number = 1000;

  const [binaryNumbers, setBinaryNumbers] = useState<number[][]>(
    Array(5).fill(sampleArray)
  );

  useEffect(() => {
    setTimeout(
      () =>
        setBinaryNumbers(
          binaryNumbers.map((numArray) => shuffleArray(numArray))
        ),
      500
    );
  }, [binaryNumbers]);

  return (
    <>
      <div className="absolute top-0 left-0 flex space-y-2 flex-col w-full h-full justify-center items-center -z-20 overflow-hidden">
        {binaryNumbers.map((numArray, index) => (
          <div
            className="flex flex-row justify-center items-center space-x-2 text-xs"
            key={index}
          >
            {numArray.map((num, subIndex) => (
              <span
                className="mx-0.5 transition duration-500 ease-in text-zinc-500 text-opacity-50"
                key={index + " " + subIndex}
              >
                {num}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-radial from-transparent via-zinc-900 to-zinc-900"></div>
    </>
  );
};

export default BinaryNumbers;
