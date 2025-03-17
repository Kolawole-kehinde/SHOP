import React, { useContext } from 'react';
import { shopContext } from './Context/ShopContext';
import { Link } from 'react-router-dom';

export const ProductItem = ({ id, image, description, price,name, }) => {
  // console.log('Rendering ProductItem with id:', id);
  const { currency } = useContext(shopContext);

  return (
    <div>
      <div className='overflow-hidden relative group bg-gray-100 dark:bg-gray-800 p-4 w-full h-[250px] flex justify-center items-center rounded-md'>
        <img 
          src={image} 
          alt={name} 
          className='w-[260px] h-[180px] object-cover rounded-md hover:scale-110'
        />
        {/* button hover */}
        <div className='hidden group-hover:flex absolute inset-0 justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm duration-200'>
          <Link to={`/product/${id}`}>
            <button className='bg-primary text-white py-2 px-4 rounded-full text-base sm:py-4 sm:px-12 sm:text-lg'>
              View Product
            </button>
          </Link>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold">{name}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{currency}{price}</p>
    </div>
  );
};

export default ProductItem;
