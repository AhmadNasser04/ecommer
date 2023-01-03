import React from "react";
import ProductShowcase from "../../components/ProductShowcase";
import { products } from "./Products";

function Trending() {
  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      <h1 className="font-bold text-5xl text-slate-700">Trending Now</h1>
      <div className="border-4 border-rose-500 w-24" />
      <div className="flex flex-col lg:space-x-5 lg:flex-row">
        {products
          .filter((product) => product.category === "Trending")
          .map((product, index) => (
            <ProductShowcase
              key={index}
              image={product.image}
              sizes={product.sizes}
              name={product.name}
              color={product.color}
            />
          ))}
      </div>
    </div>
  );
}

export default Trending;
