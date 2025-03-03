import React from 'react';
import headphone from '../assets/headphone.png';

const Banner = () => {
  return (
    <section id='banner'>
      <div className='min-h-[550px] flex justify-center items-center py-12'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-primary text-center md:text-left'>
            {/* Column 1 */}
            <div className='flex flex-col items-center md:items-start p-6 sm:p-8'>
              <p className='text-sm'>30%</p>
              <h1 className='text-4xl uppercase lg:text-7xl font-bold'>Fine Smile</h1>
              <p>10 Jan to 28 Jan</p>
            </div>

            {/* Column 2 */}
            <div className='h-auto flex justify-center'>
              <img 
                src={headphone} 
                alt="headphone"
                className='w-[250px] md:w-[340px] sm:scale-125 md:scale-150 mx-auto drop-shadow-xl object-cover'
              />
            </div>

            {/* Column 3 */}
            <div className='flex flex-col items-center md:items-start justify-center gap-6 p-6 sm:p-8'>
              <p className='font-bold text-xl'>Air Solo Base</p>
              <p className='text-3xl sm:text-5xl font-bold'>Winter Sales</p>
              <p className='text-sm tracking-wide leading-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div>
                <button className='bg-white py-2 px-4 rounded-full text-primary'>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
