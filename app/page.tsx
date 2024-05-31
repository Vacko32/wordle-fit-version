"use client";
import Image from "next/image";
import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import Map from "./components/Map";
import Keyboard from "./components/Keyboard";
import { supabase } from "./supabaseClient";
export default function Home() {
  const [solution, setSolution] = useState("DCERKA");
  const [guessValue, setGuessValue] = useState<string[]>(Array(6).fill(""));
  const [i, setI] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wordLoaded, setWordLoaded] = useState(false);
  const mongoDataApi =
    "iOlw27EtYKOnse9PsgVskxpBPROvjNBu4tKbn9wHUpfFfqCbLxYqulWzTVqcODID";
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

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const todaysDate = new Date().toISOString().split("T")[0];
      const { data, error } = await supabase
        .from("slovicka")
        .select("title")
        .eq("date", todaysDate)
        .limit(1);
      if (data != null) {
        setSolution(data[0].title);
        setWordLoaded(true);
      }
    } catch (error) {
      console.error("Chyba pri nacitani dat", error);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center mt-40 text-5xl">
        FitWordle
      </div>
      <div>
        <Map solution={solution} guessValue={guessValue} canLoad={wordLoaded}/>

        <Keyboard
          solution={solution}
          onGuess={handleGuess}
          disabled={disabled}
          correct={isCorrect}
        />
      </div>
    </div>
  );
}
