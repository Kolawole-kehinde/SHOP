import React, { useContext } from 'react';
import { shopContext } from './Contex/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, description, price }) => {
  const { currency } = useContext(shopContext);

  return (
    <Link 
      to={`/product/${id}`} 
      className='text-gray-700 dark:text-gray-100 cursor-pointer'
    >
      <div className='overflow-hidden bg-gray-100 dark:bg-gray-800 p-4  w-full h-[250px] flex justify-center items-center rounded-md'>
        <img 
          src={image} 
          alt={name} 
          className='w-[260px] h-[180px] object-cover rounded-md  hover:scale-110'
        />
      </div>
      <p className="mt-4 text-lg font-semibold">{description}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
