"use client";
import ProductList from "@/app/components/lists/products/ProductList";
import products from "@/app/constants/products";
import CartItem from "@/app/model/CartItem";
import React, { useState } from "react";
import page from "../../page";
import Product from "@/app/model/Product";
import Cart from "@/app/components/lists/cart/Cart";

function Page() {
  const [items, setItems] = useState<CartItem[]>([]);

  function addProduct(product: Product) {
    const currentItem = items.find(
      (item) => item.product.id === product.id
    ) ?? { quantity: 0, product };
    const newItem = { ...currentItem, quantity: currentItem.quantity + 1 };
    const otherItems = items.filter((item) => item.product.id !== product.id);
    setItems([...otherItems, newItem]);
  }

  return (
    <div
      className={`
        flex flex-col gap-10 justify-center items-center
    `}
    >
      <Cart items={items} />
      <div className={`flex justify-center items-center`}>
        <ProductList products={products} addItem={addProduct} />
      </div>
    </div>
  );
}

export default Page;
