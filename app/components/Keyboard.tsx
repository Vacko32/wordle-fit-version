import React, { useState } from "react";

interface MapProps {
  solution: string;
  onGuess: (word: string) => void;
}

const Keyboard: React.FC<MapProps> = ({ solution, onGuess }) => {
  const [guessValue, setGuessValue] = useState("");

  const handleGuess = () => {
    onGuess(guessValue);
    setGuessValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuessValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <input
        type="text"
        value={guessValue}
        onChange={handleInputChange}
        placeholder="Zadejte slovo"
        className="mt-4 mb-2 p-2 bg-black text-white border border-white"
        style={{ borderRadius: "5px" }}
      ></input>

      <button onClick={handleGuess} className="ml-10">Potvrdit slovo</button>
    </div>
  );
};

export default Keyboard;
