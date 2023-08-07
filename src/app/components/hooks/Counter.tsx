"use client";

import React, { useCallback, useEffect, useState } from "react";

function Counter() {
  const [delta, setDelta] = useState(1);
  const [value, setValue] = useState(0);
  const [multi10, setMulti10] = useState(0);

  const calculateValueMulti10 = useCallback((value: number) => {
    return value * 10;
  }, []);

  useEffect(() => {
    console.log("executing useEffect");
    const multi10 = calculateValueMulti10(value);
    setMulti10(multi10);
  }, [value, calculateValueMulti10]);

  return (
    <div className="flex flex-col items-center gap-5">
      <span className="text-5xl">{value}</span>
      <span className="text-xl text-zinc-500">{multi10}</span>
      <span className="text-sm text-zinc-500">{delta}</span>
      <div className="flex gap-5">
        <button className="button" onClick={() => setValue(value - delta)}>
          -{delta}
        </button>
        <button
          className="button"
          onClick={() => setValue((currentValue) => currentValue + delta)}
        >
          +{delta}
        </button>
      </div>
      <input
        type="number"
        value={delta}
        onChange={(e) => setDelta(+e.target.value)}
        className="bg-zinc-900 px-2"
      />
    </div>
  );
}

export default Counter;
