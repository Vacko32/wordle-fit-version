'use client';
import Image from "next/image";
import * as React from "react";
import { useState, useCallback } from "react";
import Map from "./components/Map";
import Keyboard from "./components/Keyboard";






export default function Home() {
  const [solution, setSolution] = useState("DCERKA");
  const [guessValue, setGuessValue] = useState<string[]>(Array(6).fill(''));
  const [i, setI] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);

  const newGuessValue: string[] = guessValue;

  const handleGuess = (word: string) => {


    setI(i + 1);
    newGuessValue[i] = word;
    setGuessValue(newGuessValue);
    if (guessValue[i].toUpperCase() === solution.toUpperCase()) {
      setIsCorrect(true);
      alert("You guessed the correct word");
      setDisabled(false);
    }
    if (i === 5) {
      setDisabled(false);
      alert("Uz jsou vsechny pokusy spotrebovany");
      
    }
  };


  return (
    <div>
      <div className="flex justify-center items-center mt-40 text-5xl">
        FitWordle
      </div>
      <div>
        <Map solution={solution} guessValue={guessValue} />

        <Keyboard solution={solution} onGuess={handleGuess} disabled={disabled} correct={isCorrect}/>
        
      </div> 
    </div>


  );
}

