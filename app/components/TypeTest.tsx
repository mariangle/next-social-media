"use client"

import { useEffect, useState } from "react";

import { useTypeTestContext } from "../context/TypeTestContext";
import { getShuffledArray } from "../actions/getShuffledArray";

import useTypeText from "../hooks/useTypeTest";
import englishWords from "../words/englishWords";

import Words from "./Words";
import Timer from "./Timer";
import Result from "./Result";
import WordInput from "./WordInput";

const TypeTest = () => {
  
  const { resetGame } = useTypeText();
  const [words, setWords] = useState<string[]>([]);
  const { isPlaying, isReady} = useTypeTestContext();

  useEffect(() => {
    setWords(getShuffledArray(englishWords));
  }, []);

  const handleResetGame = () => {
    setWords(getShuffledArray(englishWords));
    resetGame();
  }

  return (
    <div>
      {isReady && <Words words={words} />}
      <div className="flex gap-2">
        <WordInput words={words} />
        <Timer />
        {isPlaying || !isReady ? <button onClick={handleResetGame}>RESET</button> : null}
      </div>
      {!isPlaying && !isReady && <Result />}
    </div>
  );
};

export default TypeTest;