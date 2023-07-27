import Event from "@/app/components/basics/Event";
import React from "react";

function page() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-5 h-screen">
      <Event />
      <Event />
      <Event />
    </div>
  );
}

export default page;
