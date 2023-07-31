import Product from "@/app/model/Product";
import React from "react";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
  addItem: (product: Product) => void;
}

function ProductList(props: ProductListProps) {
  const { products } = props;

  return (
    <div className="flex flex-wrap gap-3">
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            addItem={props.addItem}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
