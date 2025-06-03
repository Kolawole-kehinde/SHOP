import React from 'react';
import { Link } from 'react-router-dom';


const Category2 = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        {/* Use grid layout for larger screens, switch to a single column on mobile */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* FIRST COLUMN - span 2 columns on large screens */}
          <div className='col-span-1 lg:col-span-2 bg-gradient-to-br from-gray-300/90 to-gray-100 py-10 pl-5 text-white rounded-3xl relative h-[400px] flex items-end'>
            <div className=''>
              <div className='mb-4'>
                <p className='mb-1 text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-5xl xl:text-6xl font-bold opacity-20 mb-2'>Laptop</p>
              <Link to="/shop">
                   <button className='bg-white text-primary py-2 px-8 cursor-pointer hover:scale-105 duration-300 rounded-full relative z-10'>
                  Browse
                </button>
              </Link>
              </div>
            </div>
            <img src="images/gaming.png" alt="gaming" className='w-[300px] absolute top-1/2 -translate-y-1/2 right-0' />
          </div>

          {/* SECOND COLUMN */}
          <div className='bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 py-10 pl-5 text-white rounded-3xl relative h-[400px] flex items-end'>
            <div className=''>
              <div className='mb-4'>
                <p className='mb-1 text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-5xl xl:text-6xl font-bold opacity-20 mb-2'>Gadget</p>
                <Link to="/shop">
                  <button className='bg-white text-brandGreen py-2 px-8 cursor-pointer hover:scale-105 duration-300 rounded-full relative z-10'>
                    Browse
                  </button>
                </Link>
              </div>
            </div>
            <img src="images/vr.png" alt="vr" className='w-[320px] absolute bottom-0 sm:right-1' />
          </div>

          {/* THIRD COLUMN */}
          <div className='col-span-1 sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-brandBlue/90 to-brandBlue/90 py-10 pl-5 text-white rounded-3xl relative h-[400px] flex items-end'>
            <div className=''>
              <div className='mb-4'>
                <p className='mb-1 text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-5xl xl:text-6xl font-bold opacity-20 mb-2'>Speaker</p>
                <Link to="/shop">
                  <button className='bg-red-600 py-2 px-8 cursor-pointer hover:scale-105 duration-300 rounded-full relative z-10'>
                    Browse
                  </button>
                </Link>
              </div>
            </div>
            <img src="images/speaker.png" alt="speaker" className='w-[250px] sm:w-[250px] bottom-0 right-0 absolute' />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Category2;
