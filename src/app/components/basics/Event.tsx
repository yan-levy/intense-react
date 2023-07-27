"use client";

import React, { useState } from "react";

function Event() {
  const [count, setCount] = useState(0);

  return (
    <button
      className={`
      flex justify-center items-center
        h-60 w-60 bg-green-700 text-4xl
  `}
      onClick={() => setCount(count + 1)}
    >
      Event {count}
    </button>
  );
}

export default Event;
