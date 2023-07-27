"use client";

import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

function Counter() {
  const [num, setNum] = useState<number>(0);

  function increment(valor: number) {
    setNum(num + valor);
  }

  function decrement(valor: number) {
    setNum(num - valor);
  }

  return (
    <div
      className={` 
      flex flex-col first-letter p-2 w-72 h-72
      border border-x-zinc-400 rounded-lg`}
    >
      <Display value={num} />
      <Buttons inc={increment} dec={decrement} />
    </div>
  );
}

export default Counter;
