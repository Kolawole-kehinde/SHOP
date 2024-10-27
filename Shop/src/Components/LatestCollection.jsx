import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from './Contex/ShopContext';
import ProductItem from './ProductItem';
import Tittle from './Tittle';

const LatestCollection = () => {

  const { products } = useContext(shopContext);
  const [latestProducts, setLatestProducts] = useState([]);


  useEffect(() =>{
    setLatestProducts(products.slice(0,12))
  },[products])

  console.log(products);

  return (
    <div className='my-10'>
       <div className='container'>
      <div className='text-center py-8 text-3xl'>
        <Tittle text1={"LATEST"} text2={"COLLECTIONS"}/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
 
      </div>

   
    {/* Rendering products */}
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
     {
       latestProducts.map((item, index) =>(
           <ProductItem key={index} id={item._id} image={item.image} description={item.description} price={item.price}/>
          ))
     }
 
    </div>
    </div>
    </div>

  );
};

export default LatestCollection;
