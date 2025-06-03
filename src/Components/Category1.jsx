import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import AnimatedWrapper from "./AnimatedCard";

const Category1 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* FIRST CARD */}
          <AnimatedWrapper animation="animate__zoomIn" className="">
            <div className="bg-gradient-to-br from-black/90 to-black/70 py-10 px-5 text-white rounded-3xl relative h-[400px] flex items-end">
              <div className="flex flex-col justify-between w-full">
                <div className="mb-8">
                  <p className="mb-1 text-gray-400">Enjoy</p>
                  <p className="text-2xl font-semibold mb-2">With</p>
                  <p className="text-4xl sm:text-5xl xl:text-6xl font-bold opacity-20 mb-2">Earphone</p>
                  <Link to="/shop">
                    <button className="bg-red-600 py-2 px-8 cursor-pointer hover:scale-105 duration-300 rounded-full">Browse</button>
                  </Link>
                </div>
                <img src="images/earphone.png" alt="earphone" className="w-[250px] sm:w-[320px] absolute bottom-0 sm:-translate-y-0 pointer-events-none" />
              </div>
            </div>
          </AnimatedWrapper>

          {/* SECOND CARD */}
          <AnimatedWrapper animation="animate__zoomIn">
            <div className="bg-gradient-to-br from-brandYellow to-brandYellow/90 py-10 px-5 text-white rounded-3xl relative h-[400px] flex items-end">
              <div className="flex flex-col justify-between w-full">
                <div className="mb-8">
                  <p className="mb-1 text-white">Enjoy</p>
                  <p className="text-2xl font-semibold mb-2">With</p>
                  <p className="text-4xl sm:text-5xl xl:text-6xl font-bold opacity-20 mb-2">Gadget</p>
                  <Link to="/shop">
                    <button className="bg-white text-brandYellow py-2 px-8 cursor-pointer hover:scale-105 duration-300 rounded-full">Browse</button>
                  </Link>
                </div>
                <img src="images/watch.png" alt="watch" className="w-[400px] sm:w-[320px] absolute -right-10 bottom-0 top-1/4" />
              </div>
            </div>
          </AnimatedWrapper>

          {/* THIRD CARD - Full Width (col-span-2) */}
          <AnimatedWrapper animation="animate__slideInRight" className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="bg-gradient-to-br from-primary to-primary/90 py-10 px-5 text-white rounded-3xl relative h-[400px] flex items-end">
              <div className="flex flex-col justify-between w-full">
                <div className="mb-8">
                  <p className="mb-1">Enjoy</p>
                  <p className="text-2xl font-semibold mb-2">With</p>
                  <p className="text-4xl sm:text-5xl xl:text-6xl font-bold opacity-20 mb-2">Laptop</p>
                  <Link to="/shop">
                    <button className="bg-white text-primary py-2 px-8 cursor-pointer hover:scale-105 duration-300 rounded-full">Browse</button>
                  </Link>
                </div>
                <img src="images/macbook.png" alt="macbook" className="w-[250px] sm:w-[320px] absolute right-10 bottom-20 lg:top-10" />
              </div>
            </div>
          </AnimatedWrapper>

        </div>
      </div>
    </div>
  );
};

export default Category1;
