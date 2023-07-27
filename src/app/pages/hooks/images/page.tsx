import RandomImage from "@/app/components/hooks/RandomImage";
import React from "react";

function page() {
  return (
    <div
      className={`
        flex justify-center items-center h-screen
        gap-5
    `}
    >
      <RandomImage />
      <RandomImage />
      <RandomImage />
    </div>
  );
}

export default page;
