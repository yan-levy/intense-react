"use client";

import Characters from "@/app/components/starwars/character/Characters";
import useStarWars from "@/app/data/hooks/useStarWars";
import React from "react";
import Background from "@/app/components/starwars/background/Background";

function Page() {
  const { processing, characters, getCharacters } = useStarWars();

  return (
    <div
      className={`
    flex flex-col gap-5 justify-center items-center h-screen
  `}
    >
      <Background />

      <button onClick={getCharacters} className="bg-blue-500 p-2">
        Get
      </button>
      {processing ? (
        <div>Processing</div>
      ) : characters.length > 0 ? (
        <Characters characters={characters} />
      ) : (
        <div>No character was found</div>
      )}
    </div>
  );
}

export default Page;
