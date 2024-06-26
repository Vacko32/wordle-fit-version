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
  const newGuessValue: string[] = guessValue;

  const handleGuess = (word: string) => {
    setI(i + 1);
    newGuessValue[i] = word;
    setGuessValue(newGuessValue);
    if (guessValue[i].toUpperCase() === solution.toUpperCase()) {
      setIsCorrect(true);

      setDisabled(false);
    }
    if (i === 5) {
      setDisabled(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const newDate = new Date();
      newDate.setHours(newDate.getHours() + 2);
      const todaysDate = newDate.toISOString().split("T")[0];
      console.log(todaysDate);
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
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center mt-40 text-5xl">
          FitWordle
        </div>
        <div> (diakritika enabled)</div>
      </div>
      <div>
        <Map solution={solution} guessValue={guessValue} canLoad={wordLoaded} />

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
