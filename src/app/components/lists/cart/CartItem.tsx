import CartItem from "@/app/model/CartItem";
import Coin from "@/app/utils/Coin";
import React from "react";

function CartItem(props: CartItem) {
  return (
    <div
      className={`
        flex items-center rounded-full bg-blue-500 gap-2
    `}
    >
      <span
        className={`
        flex justify-center items-center
        w-7 h-7 rounded-full p-2 bg-blue-700
      `}
      >
        {props.quantity}
      </span>
      <span>{props.product.name}</span>
      <span className="mr-2">
        {Coin.format(props.product.price * props.quantity)}
      </span>
    </div>
  );
}

export default CartItem;
