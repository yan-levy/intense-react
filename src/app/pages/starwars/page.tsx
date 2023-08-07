"use client";

import Characters from "@/app/components/starwars/character/Characters";
import useStarWars from "@/app/data/hooks/useStarWars";
import React from "react";
import Background from "@/app/components/starwars/background/Background";
import Films from "@/app/components/starwars/films/Films";

function Page() {
  const { processing, characters, films, goBack, selectCharacter } =
    useStarWars();

  return (
    <div
      className={`
    flex flex-col gap-5 justify-center items-center h-screen relative
  `}
    >
      <Background />

      {processing ? (
        <div>Processing</div>
      ) : films.length > 0 ? (
        <Films films={films} goBack={goBack} />
      ) : characters.length > 0 ? (
        <Characters characters={characters} select={selectCharacter} />
      ) : (
        <div>No data was found</div>
      )}
    </div>
  );
}

export default Page;
