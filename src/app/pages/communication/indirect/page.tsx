import Count from "@/app/components/communication/indirect/Counter";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-5xl mb-10 font-black">Indirect Communication</h1>
      <div className="flex gap-5">
        <Count />
        <Count />
        <Count />
      </div>
    </div>
  );
}

export default page;
