import ProgrammingLanguages from "@/app/components/lists/ProgrammingLanguages";
import React from "react";
import { IconBrandJavascript } from "@tabler/icons-react";

const programmingLanguages = [
  "Javascript",
  "Python",
  "Java",
  "C/C++",
  "C#",
  "PHP",
  "Kotlin",
  "Swift",
  "Go",
  "R",
];

function page() {
  return (
    <div
      className={`
        flex flex-col justify-center items-center h-screen
    `}
    >
      <h1
        className={`
        flex items-center gap-2
      text-2xl font-black 
      `}
      >
        <IconBrandJavascript size={50} stroke={1} className="text-amber-200" />
        Top 10 Programming Languages 2023
      </h1>
      <ProgrammingLanguages languages={programmingLanguages} />
    </div>
  );
}

export default page;
