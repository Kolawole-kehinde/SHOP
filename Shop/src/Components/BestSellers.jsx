import React, { useContext, useEffect, useState } from 'react';
import Tittle from './Tittle';
import { shopContext } from './Contex/ShopContext';
import ProductItem from './ProductItem';

const BestSellers = () => {
  const { products } = useContext(shopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSellers(bestProducts.slice(0, 8));
  }, [products]);

  return (
    <section id='bestSellers'>
      <div className='container my-8'>
        <div className='text-center text-3xl py-8'>
          <Tittle text1={'BEST'} text2={'SELLERS'} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-6'>
          {bestSellers.map((item) => (
            <ProductItem 
              key={item.id} 
              id={item.id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
