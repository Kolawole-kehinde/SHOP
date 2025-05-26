import React from 'react'
import { HeroData } from '../constant/heroSectionData';
import Slider from 'react-slick';

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
         <section className='container mt-6'>
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex items-center justify-center'>
              <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                 {
                  HeroData?.map((data) => (
                    <div key={data.id}>
                      <div className='grid grid-cols-1 sm:grid-cols-2'>

                        {/* IMAGE SECTION */}
                        <div className='order-1 sm:order-2'>
                          <img src={data.image} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto shadow[-8px_4px_6px rgba(0,0,0,0.4)]'/>
                        </div>

                        {/* TEXT SECTION */}
                        <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative -z-10'>
                          <h1 className='text-2xl sm:text-6xl lg:text-7xl font-semibold'>{data.subtitle}</h1>
                          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-semibold'>{data.title}</h1>
                          <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[70px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>

                          {/* Button Section */}
                          <div className='order-3 sm:order-none'>
                            <button className='bg-red-600 py-2 px-8 text-white rounded-full cursor-pointer hover:scale-105 duration-300'>
                              Select By Category
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                 }
                 
               </Slider>
              </div>
            </div>
         </section>
  )
}

export default Hero;
