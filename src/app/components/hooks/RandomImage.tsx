"use client";

import Image from "next/image";
import React, { useState } from "react";

function RandomImage() {
  const [search, setSearch] = useState("abstract");
  const [size, setSize] = useState(300);

  const url = "https://source.unsplash.com/featured/";

  function renderButton(value: string) {
    return (
      <button
        className={`
        bg-blue-500 px-4 py-2 rounded-md
    `}
        onClick={() => {
          setSearch(value);
        }}
      >
        {value}
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
      <div className="flex justify-center gap-7 mb-5">
        <span>{search}</span>
        <span>
          {size}x{size}
        </span>
      </div>
      <Image
        src={`${url}${size}x${size}?${search}`}
        height={300}
        width={300}
        alt="Image"
        className="rounded-md"
      />
      <div className="flex gap-5">
        {renderButton("abstract")}
        {renderButton("city")}
        {renderButton("person")}
      </div>
      <div>
        <input
          type="number"
          value={size}
          className="bg-zinc-800 p-2 rounded-md outline-none w-full"
          onChange={(e) => {
            setSize(+e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default RandomImage;
