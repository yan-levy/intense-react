import Box from "@/app/components/basics/Box";
import Circle from "@/app/components/basics/Circle";
import React from "react";

function page() {
  return (
    <div className="flex">
      <div>
        <Box>#1</Box>
        <Box>#2</Box>
        <Box>#3</Box>
      </div>

      <div className=" flex-column bg-red-600 p-4">
        <Circle almostPerfect text="Circle #1 Almost Perfect" />
        <Circle text="Circle #2" />
        <Circle text="Circle #3" />
      </div>
    </div>
  );
}

export default page;
