import React from "react";
import Parent from "./Parent";

interface GrandParentProps {
  name: string;
  surname: string;
}

function GrandParent(props: GrandParentProps) {
  return (
    <div
      className={` 
    flex flex-col gap-5 p-5 rounded-md
    bg-purple-500 text-white border border-white`}
    >
      <div className="flex justify-center gap-2 text-2xl">
        <span className="font-black">GrandParent</span>
        <span>{props.name}</span>
        <span>{props.surname}</span>
      </div>
      <div className="flex gap-5">
        <Parent name="Kennen" surname={props.surname} />
        <Parent name="Juniper" surname={props.surname} />
        <Parent name="Clemence" surname={props.surname} />
      </div>
    </div>
  );
}

export default GrandParent;
