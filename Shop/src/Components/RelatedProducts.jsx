import React, { useState, useEffect, useContext } from 'react';
import Tittle from './Tittle';
import ProductItem from './ProductItem';
import { shopContext } from './Contex/ShopContext';

const RelatedProducts = ({ category, subCategory }) => {
  const [related, setRelated] = useState([]);
  const { products } = useContext(shopContext);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      
      setRelated(filteredProducts.slice(0, 4));
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Tittle text1='RELATED ' text2='PRODUCTS' />
      </div>

      {related.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {related.map((item) => (
            <ProductItem 
              key={item._id} 
              id={item._id} 
              name={item.name} 
              price={item.price} 
              image={item.image} 
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No related products found.</p>
      )}
    </div>
  );
};

export default RelatedProducts;
