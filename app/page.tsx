'use client';
import Image from "next/image";
import * as React from "react";
import { useState, useCallback } from "react";
import Map from "./components/Map";
import Keyboard from "./components/Keyboard";






export default function Home() {
   const [solution, setSolution] = useState("Kotes");
   const [guessValue, setGuessValue] = useState<string[]>(Array(6).fill(''));
   const [i, setI] = useState(0);



const newGuessValue: string[] = guessValue;

   const handleGuess = (word: string) => {
    
    
    setI(i + 1);
    newGuessValue[i] = word;
    setGuessValue(newGuessValue);
    if (guessValue[i] === solution) {
      alert("You guessed the correct word");
    }
};


  return (
    <div>
      <div className="flex justify-center items-center mt-40 text-5xl">
      FitWordle
      </div>
      <div>
        <Map solution={solution} guessValue={guessValue}/>
        <Keyboard solution={solution} onGuess={handleGuess}/>
      </div>
    </div>
    
    
  );
}

