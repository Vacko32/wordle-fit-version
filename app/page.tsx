'use client';
import Image from "next/image";
import * as React from "react";
import { useState, useCallback } from "react";
import Map from "./components/Map";


export default function Home() {

  return (
    <div>
      <div className="flex justify-center items-center mt-40 text-5xl">
      Wordle
      </div>
      <div>
        <Map />
      </div>
    </div>
    
    
  );
}

