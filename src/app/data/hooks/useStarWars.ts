import { useState } from "react";
import useProcessing from "./useProcessing";

export default function useStarWars() {
  const [characters, setCharacters] = useState<any>([]);
  const { processing, startProcess, endProcess } = useProcessing();

  async function getCharacters() {
    try {
      startProcess();
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      setCharacters(data.results);
    } finally {
      endProcess();
    }
  }

  return {
    characters,
    getCharacters,
    processing,
  };
}
