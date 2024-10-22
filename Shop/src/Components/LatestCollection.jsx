import React, { useContext } from 'react';
import { shopContext } from './Contex/ShopContext';

const LatestCollection = () => {

  const { products } = useContext(shopContext);

  console.log(products);

  return (
    <div>
     
 
    </div>
  );
};

export default LatestCollection;
