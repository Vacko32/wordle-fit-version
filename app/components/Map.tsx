'use client';
import React from "react";



interface SquareProps {
    letter?: string;
    }



const Square: React.FC<SquareProps> = ({ letter }) => {
    return (
        <div className="w-16 h-16 border-2 border-white ml-2">
            {letter}
        </div>
    );
    }



const Map = () => {
    const lines: JSX.Element[] = [];
    const squares: JSX.Element[] = [];
    const generatedWord = "hello";
    const generateLine = () => {
        for (let i = 0; i < generatedWord.length; i++) {
            squares.push(<Square key={i} />);
        }
}

generateLine();
console.log(generatedWord.length);


const GenerateMap = () => {
    for (let i = 0; i < 6; i++) {
        lines.push(<div className="flex ">{squares}</div>);
    }
}
GenerateMap();

    return (
        <div className="flex justify-center items-center mt-10">
            {lines}
        </div>
    );
    };

export default Map;