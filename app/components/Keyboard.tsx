import React, { useEffect, useState } from "react";
interface MapProps {
  solution: string;
  onGuess: (word: string) => void;
  disabled?: boolean;
  correct?: boolean;
}

const Keyboard: React.FC<MapProps> = ({
  solution,
  onGuess,
  disabled,
  correct,
}) => {
  const [guessValue, setGuessValue] = useState("");

  const handleGuess = () => {
    if (guessValue.length === solution.length) {
      onGuess(guessValue.toUpperCase());
      setGuessValue("");
    } else {
      alert("Slovo musí mít stejný počet písmen jako řešení");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toUpperCase();

    if (inputValue.length <= solution.length) {
      setGuessValue(inputValue);
    }
  };

  if (!disabled) {
    if (correct) {
      return (
        <div className="flex flex-col items-center justify-center mt-32 text-2xl">
          Dobrá práce kocourku! Tady máš odměnu!
          <div className="mt-8 pb-20">
            <img src="/images/ima.gif" alt="Animated GIF" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center mt-32 text-2xl">
          Jéjé, to je ale pech! Přístě to určitě vyjde!
        </div>
      );
    }
  }
  if (disabled) {
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

        <button
          onClick={handleGuess}
          className="ml-10 border text-white rounded-2xl p-2 transition ease-in-out delay-50 hover:bg-slate-50 hover:text-black"
        >
          Potvrdit slovo
        </button>
      </div>
    );
  }
};
export default Keyboard;
