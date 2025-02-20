import React, { useState, useEffect, useContext } from 'react';
import Tittle from './Tittle';
import ProductItem from './ProductItem';
import { shopContext } from './Contex/ShopContext';


const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(shopContext);
  const [related, setRelated] = useState([]);
  

  // useEffect(() => {
  //   if (products.length > 0) {
  //     let productCopy = products.slice(); 
  //     productCopy = productCopy.filter((item) => category === item.category);
  //     productCopy = productCopy.filter((item) => subCategory  === item.subCategory)
      
  //     setRelated(productCopy.slice(0, 4));
  //     // console.log(productCopy.slice(0, 4));
      
  //   }
  // }, [products]);
useEffect(() => {
  if (products.length > 0) {
    setRelated(products.filter((item) => item.category === category && item.subCategory === subCategory).slice(0, 4));
  }
},[products, category, subCategory])
  

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Tittle text1='RELATED ' text2='PRODUCTS' />
      </div>

     
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {related?.map((item) => (
            <ProductItem 
              key={item._id} 
              id={item._id} 
              name={item.name} 
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
     
    </div>
  );
};

export default RelatedProducts;
