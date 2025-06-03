import React, { useContext, useEffect, useState } from "react";
import Tittle from "./Tittle";
import ProductItem from "./ProductItem";
import { ShopContext } from "../Context/ShopContext";
import SkeletonCard from "./SkeletonCard";

const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSellers(bestProducts.slice(0, 8));
  }, [products]);

  return (
    <section id="bestSellers">
      <div className="container my-8">
        <div className="text-center text-3xl py-8">
          <Tittle text1={"BEST"} text2={"SELLERS"} />
          <p className="text-base md:text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : bestSellers.map((item) => (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  images={item.images}
                  name={item.name}
                  price={item.price}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
