import React from "react";

interface CircleProps {
  text: string;
  almostPerfect?: boolean;
}

function Circle(props: CircleProps) {
  return (
    <div
      className={`
        flex justify-center items-center
        h-64 w-64 bg-cyan-500 
        text-black font-black text-3xl
        ${props.almostPerfect ? "rounded-md" : "rounded-full"}
        rounded-full
    `}
    >
      {props.text}
    </div>
  );
}

export default Circle;
