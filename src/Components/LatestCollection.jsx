import React, { useContext, useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import Tittle from './Tittle';
import { shopContext } from '../Context/ShopContext';

const LatestCollection = () => {
  const { products } = useContext(shopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 12));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='container'>
        <div className='text-center py-8 text-3xl'>
          <Tittle text1={"LATEST"} text2={"COLLECTIONS"} />
          <p className='text-base md:text-2xl lg:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Rendering products */}
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {latestProducts.map((item) => (
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
