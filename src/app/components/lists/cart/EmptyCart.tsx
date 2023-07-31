import { IconCircleX } from "@tabler/icons-react";
import React from "react";

function EmptyCart() {
  return (
    <div className="flex justify-center gap-3 text-zinc-500">
      <IconCircleX />
      <span>Nenhum item no carrinho</span>
    </div>
  );
}

export default EmptyCart;
