import React from "react";
import Child from "./Child";

interface ParentProps {
  name: string;
  surname: string;
}

function Parent(props: ParentProps) {
  return (
    <div
      className={`
        flex flex-col gap-5
        bg-blue-500 text-white border border-white
        rounded-md p-5
    `}
    >
      <div className="flex justify-center gap-2 text-xl">
        <span className="font-black">Parent</span>
        <span>{props.name}</span>
        <span>{props.surname}</span>
      </div>
      <div className="flex gap-5">
        <Child name="John" surname={props.surname} />
        <Child name="Jane" surname={props.surname} />
      </div>
    </div>
  );
}

export default Parent;
