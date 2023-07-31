import Product from "@/app/model/Product";
import Image from "next/image";
import React from "react";
import { IconShoppingCart } from "@tabler/icons-react";

interface ProductItemProps {
  product: Product;
  addItem: (product: Product) => void;
}

function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <div
      className={`
        flex flex-col rounded-md
        border border-zinc-600
        p-1
    `}
    >
      <Image
        src={product.image}
        width={300}
        height={200}
        alt="Image of the Product"
        className="rounded-md"
      />
      <div className={`flex flex-col p-3 gap-3`}>
        <div className="flex justify-between items-center">
          <div className={`text-2xl font-black`}>{product.name}</div>
          <div className={`text-green-500`}>R$ {product.price}</div>
        </div>
        <div>
          <button
            className="button flex justify-center gap-2 w-full"
            onClick={() => props.addItem(product)}
          >
            <IconShoppingCart /> Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
