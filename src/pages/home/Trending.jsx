import React from "react";
import ProductShowcase from "../../components/ProductShowcase";

function Trending() {
  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      <h1 className="font-bold text-5xl text-slate-700">Trending Now</h1>
      <div className="border-4 border-rose-500 w-24" />
      <div className="flex flex-col lg:space-x-5 lg:flex-row">
        <ProductShowcase
          image="https://images.unsplash.com/photo-1441984443719-15c73b016ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          sizes={[42, 44]}
          name="Nice fany boot"
          color="Black"
        />
        <ProductShowcase
          image="https://images.unsplash.com/photo-1441984443719-15c73b016ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          sizes={[42, 44]}
          name="Nice fany boot"
          color="Black"
        />
        <ProductShowcase
          image="https://images.unsplash.com/photo-1441984443719-15c73b016ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          sizes={[42, 44]}
          name="Nice fany boot"
          color="Black"
        />
      </div>
    </div>
  );
}

export default Trending;
