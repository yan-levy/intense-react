import React from "react";

interface ChildProps {
  name: string;
  surname: string;
}

function Child(props: ChildProps) {
  return (
    <div
      className={`
        flex justify-center items-center bg-green-500   rounded-md p-5 border border-white`}
    >
      <div className="flex justify-center gap-2 text-xl">
        <span className="font-black">Child</span>
        <span>{props.name}</span>
        <span>{props.surname}</span>
      </div>
    </div>
  );
}

export default Child;
