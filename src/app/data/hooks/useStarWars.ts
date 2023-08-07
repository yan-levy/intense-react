import { useCallback, useEffect, useState } from "react";
import useProcessing from "./useProcessing";

export default function useStarWars() {
  const { processing, startProcessing, endProcessing } = useProcessing();
  const [characters, setCharacters] = useState<any>([]);
  const [character, setCharacter] = useState<any>([]);
  const [films, setFilms] = useState<any>([]);

  const getFilms = useCallback(
    async function (character: any) {
      if (!character?.films?.length) return;
      try {
        startProcessing();
        const reqs = character.films.map(async (film: string) => {
          const resp = await fetch(film);
          return resp.json();
        });

        const films = await Promise.all(reqs);
        setFilms(films);
      } finally {
        endProcessing();
      }
    },
    [startProcessing, endProcessing]
  );

  const getCharacters = useCallback(
    async function () {
      try {
        startProcessing();
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        setCharacters(data.results);
      } finally {
        endProcessing();
      }
    },
    [startProcessing, endProcessing]
  );

  function selectCharacter(character: any) {
    setCharacter(character);
  }

  function goBack() {
    setCharacter(null);
    setFilms([]);
  }

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  useEffect(() => {
    getFilms(character);
  }, [character, getFilms]);

  return {
    characters,
    films,
    processing,
    selectCharacter,
    goBack,
  };
}
