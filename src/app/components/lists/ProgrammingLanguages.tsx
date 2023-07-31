import React from "react";

interface ProgrammingLanguagesProps {
  languages: string[];
}

function ProgrammingLanguages(props: ProgrammingLanguagesProps) {
  const itens = props.languages.map((language, i) => {
    return (
      <li
        key={language}
        className={`text-2xl list-decimal ${
          i % 2 === 0 ? "text-yellow-300" : "text-zinc-300"
        }`}
      >
        {language}
      </li>
    );
  });
  return <ol>{itens}</ol>;
}

export default ProgrammingLanguages;
