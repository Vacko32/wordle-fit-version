// Map.tsx
import React, { use, useEffect } from "react";
import internal from "stream";
import { useState } from "react";
interface MapProps {
  solution: string;
  guessValue: string[];
  canLoad: boolean;
}

const Square: React.FC<{ letter?: string; colour?: number }> = ({
  letter,
  colour,
}) => {
  if (colour === 1) {
    return (
      <div className="w-16 h-16 border-2 border-white ml-2 mt-4 bg-red-500 text-2xl">
        <div className="w-full h-full flex justify-center items-center">
          {letter}
        </div>
      </div>
    );
  }
  if (colour === 2) {
    return (
      <div className="w-16 h-16 border-2 border-white ml-2 mt-4 bg-green-500 text-2xl">
        <div className="w-full h-full flex justify-center items-center">
          {letter}
        </div>
      </div>
    );
  }
  if (colour === 3) {
    return (
      <div className="w-16 h-16 border-2 border-white ml-2 mt-4 bg-yellow-500 text-2xl">
        <div className="w-full h-full flex justify-center items-center">
          {letter}
        </div>
      </div>
    );
  }
  return (
    <div className="w-16 h-16 border-2 border-white ml-2 mt-4 bg-black text-xl">
      <div className="w-full h-full flex justify-center items-center">
        {letter}
      </div>
    </div>
  );
};

const Map: React.FC<MapProps> = ({ solution, guessValue, canLoad }) => {
  const lines: JSX.Element[] = [];

  const generateLine = (word: string) => {
    const squares: JSX.Element[] = [];

    for (let i = 0; i < solution.length; i++) {
      word.toUpperCase();
      solution.toUpperCase();

      let color = 0;
      if (word[i] !== solution[i]) {
        color = 1;
      }
      if (word === "") {
        color = 0;
      }
      if (solution.includes(word[i])) {
        color = 3;
      }
      if (word[i] === solution[i]) {
        color = 2;
      }

      squares.push(<Square key={i} letter={word[i]} colour={color} />);
    }
    return squares;
  };

  const [pismeno, setpismeno] = useState("");
  useEffect(() => {
    if (solution.length === 1) {
      setpismeno("písmeno");
    } else if (
      solution.length === 2 ||
      solution.length === 3 ||
      solution.length === 4
    ) {
      setpismeno("písmena");
    } else {
      setpismeno("písmen");
    }
  }, [solution]);

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
  if (!canLoad) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl mt-14">Načítám slovo...</div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      {lines}
      <div className="text-2xl mt-14">
        Dnešní slovo má {solution.length} {pismeno}
      </div>
    </div>
  );
};

export default Map;
