import React, { useContext, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Tittle from './Tittle';
import SkeletonCard from './SkeletonCard';
import { ShopContext } from '../Context/ShopContext';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 12));
      setIsLoading(false);
    }
  }, [products]);

  return (
    <div className='my-10'>
      <div className='container'>
        <div className='text-center py-8 text-3xl'>
          <Tittle text1={"LATEST"} text2={"COLLECTIONS"} />
          <p className='text-base md:text-2xl lg:text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : latestProducts.map((item) => (
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
    </div>
  );
};

export default LatestCollection;
