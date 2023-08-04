import { useState } from "react";

export default function useProcessing() {
  const [processing, setProcessing] = useState<boolean>(false);

  function startProcess() {
    setProcessing(true);
  }

  function endProcess() {
    setProcessing(false);
  }

  return {
    processing,
    startProcess,
    endProcess,
  };
}
