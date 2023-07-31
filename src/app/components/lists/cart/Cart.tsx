import ICartItem from "@/app/model/CartItem";
import React from "react";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Coin from "@/app/utils/Coin";
import { IconShoppingCartFilled } from "@tabler/icons-react";

interface CartProps {
  items: ICartItem[];
}

function Cart(props: CartProps) {
  const total = props.items.reduce((sum, item) => {
    return sum + item.quantity * item.product.price;
  }, 0);

  return (
    <div
      className={`flex flex-col border border-white rounded-md overflow-hidden w-4/5 mt-5`}
    >
      <div className="flex justify-between items-center bg-zinc-800 text-3xl p-3">
        <span className="flex justify-center items-center gap-5">
          <IconShoppingCartFilled />
          Cartinho
        </span>
        <span>{Coin.format(total)}</span>
      </div>
      <div className={`flex flex-wrap gap-5 p-5`}>
        {props.items.length === 0 ? (
          <EmptyCart />
        ) : (
          props.items.map((item, i) => {
            return <CartItem key={i} {...item} />;
          })
        )}
      </div>
    </div>
  );
}

export default Cart;
