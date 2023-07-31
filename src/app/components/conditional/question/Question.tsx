"use client";

import { IconEyeClosed, IconEye } from "@tabler/icons-react";
import React from "react";

interface QuestionProps {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  changeVisibility: (index: number) => void;
}

function Question(props: QuestionProps) {
  return (
    <div
      className={`
        border border-zinc-600 rounded-md overflow-hidden cursor-pointer select-none
        w-[90%] md:w-3/5 
      `}
      onClick={() => {
        props.changeVisibility(props.index);
      }}
    >
      <div
        className={`
      bg-zinc-800 p-5 flex justify-between hover:bg-zinc-700`}
      >
        <span>{props.question}</span>
        {props.open ? <IconEye /> : <IconEyeClosed />}
      </div>
      {props.open && (
        <div
          className={`
        p-5 cursor-pointer select-none
        `}
        >
          {props.answer}
        </div>
      )}
    </div>
  );
}

export default Question;
