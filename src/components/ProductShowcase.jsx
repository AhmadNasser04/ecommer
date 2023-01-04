import React from "react";

function ProductShowcase({ image, sizes, name, color }) {
  return (
    <div className="pb-5 space-y-5">
      <div className="group relative flex">
        <img
          src={image}
          alt="product"
          className="w-[300px] h-[300px] object-cover relative"
        />
        <div
          className={`w-full h-full absolute bg-blue-300 z-0 opacity-0 group-hover:opacity-70 transition ease-linear ${
            sizes.length === 0 && "cursor-pointer"
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full h-full space-y-3">
            <h1 className="text-white font-bold">
              {sizes.length !== 0 && "Select size:"}
            </h1>
            <div className="space-x-5">
              {sizes.map((value, index) => (
                <button
                  key={index}
                  className="w-24 h-12 border border-white text-white text-lg font-bold hover:bg-white hover:text-blue-500 transition"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-cyan-800 text-xl font-normal">{name}</h1>
        <h1 className="font-bold text-xl text-cyan-800">{color}</h1>
      </div>
    </div>
  );
}

export default ProductShowcase;
