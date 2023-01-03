import React from "react";
import { Rating } from "@mui/material";

function Ratings() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Rating name="read-only" value={5} size="large" readOnly />
      <h1 className="text-slate-700 font-semibold text-xl">
        Based on 6670 reviews
      </h1>
      <h1 className="text-gray-500 underline cursor-pointer">
        See all Reviews
      </h1>
      <div className="border-b border-gray-300 w-screen pt-8" />
    </div>
  );
}

export default Ratings;
