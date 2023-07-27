import GrandParent from "@/app/components/communication/direct/GrandParent";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-5xl mb-10 font-black">Direct Communication</h1>
      <GrandParent name="Richard" surname="Doe" />
      <GrandParent name="Sean" surname="Roe" />
    </div>
  );
}

export default page;
