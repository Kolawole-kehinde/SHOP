import React from 'react'
import watch from '../assets/banner2--img.png'


const Banner2 = () => {
  return (
    <section id='banner'>
         <div className='min-h-[550x] justify-center items-center py-12'>
            <div className='container'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-brandGreen'>
                 <div className='p-6 sm:p-8'>
                      <p className='text-sm'>30%</p>
                      <h1 className='text-4xl uppercase lg:text-7xl font-bold '>Happy Hours</h1>
                      <p>10 Jan to 28 Jan</p>
                 </div>

                 <div className='h-full flex items-center'>
                  <img src={watch} alt="headphone"
                  className='w-[250px] md:w-[340px] scale-125 max-auto drop-shadow-lg object-cover'
                  />
                 </div>

                 <div className='flex flex-col justify-center gap-6 p-6 sm:p-8'>
                  <p className='font-bold text-xl'>Air Solo Base</p>
                  <p className='text-3xl sm:text-5xl font-bold'>Winter Sales</p>
                  <p className='text-sm tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit.</p>
                   <div>
                      <button className='bg-white py-2 px-4 rounded-full text-brandGreen'>
                        Shop Now
                      </button>
                   </div>

                 </div>
              </div>

            </div>

         </div>
    </section>
  )
}

export default Banner2;