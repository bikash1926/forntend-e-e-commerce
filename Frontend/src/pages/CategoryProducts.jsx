import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Categories from "./Categories";

const CategoryProducts = () => {
  const { category } = useParams(); // ex: "women"
 const products = useSelector((state) => state.productReducer.products);

  // map frontend category name → backend category name
  const categoryMap = {
    men: "men's clothing",
    women: "women's clothing",
    electronics: "electronics",
    accessories: "jewelery",
    sale: "electronics", // example
  };

  const filtered = products.filter(
    (p) => p.category.toLowerCase() === categoryMap[category]?.toLowerCase()
  );

  return (
    <div className="p-6 flex sm:flex-row flex-col">
      <div className="lg:w-1/4 mr-6 ">
          <Categories />
      </div>
      <div className="flex-1">
      <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-3"
              />
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-green-800 font-semibold">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
