import React from "react";

interface DisplayProps {
  value: number;
}

function Display(props: DisplayProps) {
  return (
    <div
      className={`
        flex justify-center items-center flex-1
         bg-zinc-800 text-5xl p-5 
          rounded-md font-black`}
    >
      {props.value}
    </div>
  );
}

export default Display;
