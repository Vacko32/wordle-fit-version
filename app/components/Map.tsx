// Map.tsx
import React, { use, useEffect } from "react";
import internal from "stream";
import { useState } from "react";
interface MapProps {
  solution: string;
  guessValue: string[];
}

const Square: React.FC<{ letter?: string }> = ({ letter }) => {
    return (
        <div className="w-16 h-16 border-2 border-white ml-2 mt-4">
          <div className="w-full h-full flex justify-center items-center">
            {letter}
          </div>
        </div>
      );
    };

const Map: React.FC<MapProps> = ({ solution, guessValue }) => {
  const lines: JSX.Element[] = [];

  const generateLine = (word: string) => {
    const squares: JSX.Element[] = [];
    for (let i = 0; i < solution.length; i++) {
      squares.push(<Square key={i} letter={word[i]} />);
    }
    return squares;
  };

  const generateMap = () => {
    for (let i = 0; i < 6; i++) {
      lines.push(
        <div key={i} className="flex justify-center items-center">
          {generateLine(guessValue[i])}
        </div>
      );
    }
  };
  generateMap();

  return <div>{lines}</div>;
};

export default Map;
