import React, { useState, useEffect, useContext } from 'react';
import Tittle from './Tittle';
import ProductItem from './ProductItem';
import { ShopContext } from '../Context/ShopContext';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setRelated(products.filter((item) => item.category === category && item.subCategory === subCategory).slice(0, 4));
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Tittle text1='RELATED ' text2='PRODUCTS' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6'>
        {related?.map((item, index) => (
          <ProductItem 
            key={item.id || `related-${index}`} 
            id={item.id} 
            name={item.name} 
            price={item.price}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
