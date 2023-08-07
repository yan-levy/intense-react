"use client";

import { IconCheck } from "@tabler/icons-react";

interface CharactersProps {
  characters: any[];
  select: (character: any) => void;
}

function Characters(props: CharactersProps) {
  return (
    <table className="w-3/5 text-xl opacity-70 rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-zinc-900">
          <th className="p-2 font-black">Name</th>
          <th className="p-2 font-black">Height</th>
          <th className="p-2 font-black">Mass</th>
          <th className="p-2 font-black">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.characters.map((c: any, index: number) => (
          <tr
            key={c.name}
            className={`
                text-center
                ${index % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"}
            `}
          >
            <td className="p-2">{c.name}</td>
            <td className="p-2">{c.height}</td>
            <td className="p-2">{c.mass}</td>
            <td className="p-2">
              <button className="button" onClick={() => props.select(c)}>
                <IconCheck size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Characters;
