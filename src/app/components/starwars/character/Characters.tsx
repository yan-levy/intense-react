"use client";

interface CharactersProps {
  characters: any[];
}

function Characters(props: CharactersProps) {
  function renderCharacters() {
    return (
      <ul>
        {props.characters.map((c: any) => (
          <li key={c.name}>{c.name}</li>
        ))}
      </ul>
    );
  }

  return <div>{renderCharacters()}</div>;
}

export default Characters;
