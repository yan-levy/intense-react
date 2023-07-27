import React from "react";

interface ButtonsProps {
  inc: (value: number) => void;
  dec: (value: number) => void;
}

function Buttons(props: ButtonsProps) {
  return (
    <div className="flex justify-between pt-2 gap-2">
      <button className="button flex-1" onClick={() => props.dec(5)}>
        -5
      </button>
      <button className="button flex-1" onClick={() => props.inc(10)}>
        +10
      </button>
    </div>
  );
}

export default Buttons;
