import React from "react";
import { FaStar } from "react-icons/fa";

const HeroCard = ({ product }) => {
  return (
    <div
      className="relative mt-5 border rounded-lg shadow-md p-4 flex flex-col items-center 
                 transition-all duration-200 hover:shadow-xl hover:-translate-y-2"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-32 object-contain mb-4 "
      />
      <h3 className="text-sm font-semibold text-center line-clamp-2">
        {product.name}
      </h3>
      <p className="text-red-600 font-bold mt-2">₹{product.price}</p>
      <div className="flex mt-2 text-yellow-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
     
    </div>
  );
};

export default HeroCard;
