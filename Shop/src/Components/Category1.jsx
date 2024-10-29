import React from 'react';
import image1 from '../assets/earphone.png';
import image2 from '../assets/watch.png';
import image3 from '../assets/macbook.png';

const Category1 = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        {/* Use grid layout for larger screens, switch to a single column on mobile */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* FIRST COLUMN */}
          <div className='bg-gradient-to-br from-black/90 to-black/70 py-10 px-5 text-white rounded-3xl relative h-[400px] flex items-end'>
            <div className='flex flex-col justify-between w-full'>
              {/* Text and Button on the Left */}
              <div className='mb-8'>
                <p className='mb-1 text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-4xl sm:text-5xl xl:text-6xl font-bold opacity-20 mb-2'>Earphone</p>
                <button className='bg-red-600 py-2 px-8 cursor-pointer hover:scale-105 duration-300 rounded-full'>
                  Browse
                </button>
              </div>
              {/* Image on the Right */}
              <img 
                src={image1} 
                alt="" 
                className='w-[250px] sm:w-[320px] absolute bottom-0 sm:-translate-y-0'
              />
            </div>
          </div>

          {/* SECOND COLUMN */}
          <div className='bg-gradient-to-br from-brandYellow to-brandYellow/90 py-10 px-5 text-white rounded-3xl relative h-[400px] flex items-end'>
            <div className='flex flex-col justify-between w-full'>
              {/* Text and Button on the Left */}
              <div className='mb-8'>
                <p className='mb-1 text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-4xl sm:text-5xl xl:text-6xl font-bold opacity-20 mb-2'>Gadget</p>
                <button className='bg-white text-brandYellow py-2 px-8 cursor-pointer hover:scale-105 duration-300 rounded-full'>
                  Browse
                </button>
              </div>
              {/* Image on the Right */}
              <img 
                src={image2} 
                alt="" 
                className='w-[400px] sm:w-[320px] absolute -right-10 bottom-0 top-1/4'
              />
            </div>
          </div>

          {/* THIRD COLUMN */}
          <div className='col-span-1 sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-primary/90 py-10 px-5 text-white rounded-3xl relative h-[400px] flex items-end'>
            <div className='flex flex-col justify-between w-full'>
              {/* Text and Button on the Left */}
              <div className='mb-8'>
                <p className='mb-1 text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-4xl sm:text-5xl xl:text-6xl font-bold opacity-20 mb-2'>Laptop</p>
                <button className='bg-white text-primary py-2 px-8 cursor-pointer hover:scale-105 duration-300 rounded-full'>
                  Browse
                </button>
              </div>
              {/* Image on the Right */}
              <img 
                src={image3} 
                alt="" 
                className='w-[250px] sm:w-[320px] absolute right-10 bottom-20 lg:top-10 '
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Category1;
