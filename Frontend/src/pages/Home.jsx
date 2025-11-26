import React from "react";
import HeroCard from "../components/HeroCard";

import { mockdata } from "../components/Mockdata";
import advImage from "../images/Adv.png";


const Home = () => {
  return (
    <div>
   <div className="w-full bg-gray-200 px-4 md:px-16 lg:px-24 py-8">
  <div className="flex flex-row lg:flex-row justify-between items-center">
    
   
    <div className="lg:w-2/3 p-4 lg:p-9">
      <h1 className="text-xl md:text-5xl lg:text-6xl font-semibold mb-6">
        Your{" "}
        <span className="text-blue-700 font-tinos">One-Stop</span> Shop for
        Everything You{" "}
        <span className="text-blue-700 font-tinos">Need!</span>
      </h1>
      <p className=" md:text-xl text-gray-900 font-semibold">
        Fast shipping, friendly customer service, and secure transactions guaranteed!
      </p>
    </div>

    <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
      <img
        className="w-full h-[15rem] lg:h-[40rem] object-cover "
        src={advImage}
        alt="Advertisement"
      />
    </div>
  </div>
</div>


      <div className="mt-2 px-4 md:px-16 lg:px-24 py-4">
        <div className="container mx-auto py-12">
          <h2 className="mb-10 text-2xl font-bold text-center">Top Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
            {mockdata.slice(0, 10).map((product) => (
              <HeroCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
