"use client";

import React, { useState } from "react";
import Question from "../question/Question";

function Quiz() {
  const [active, setActive] = useState<number>(0);

  function changeVisibility(index: number) {
    if (index === active) {
      setActive(-1);
    } else {
      setActive(index);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <Question
        index={0}
        open={active === 0}
        question="What is regex?"
        answer="A regular expression (also called regex or regexp) is a way to describe a pattern. It is used to locate or validate specific strings or patterns of text in a sentence, document, or any other character input."
        changeVisibility={changeVisibility}
      />
      <Question
        index={1}
        open={active === 1}
        question="What is k8s?"
        answer="~~lazy answer: just an abbreviation of Kubernetes"
        changeVisibility={changeVisibility}
      />
      <Question
        index={2}
        open={active === 2}
        question="I ran out of creativity, so, no more questions for you"
        answer="An answer for an nonexistent question"
        changeVisibility={changeVisibility}
      />
    </div>
  );
}

export default Quiz;
