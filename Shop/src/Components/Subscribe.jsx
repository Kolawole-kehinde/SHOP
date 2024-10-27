import React from 'react'

const Subscribe = () => {
  const onSubmitHandler = () => {
    event.preventDefault();
  }
  return (
    <section id='subscribe'>
          <div className='container my-14 md:my-20'>
            <div className='text-center'>
            <p className=' text-2xl font-medium text-gray-800 dark:text-gray-300'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input 
                type="email"
                placeholder='Enter Your Email'
                required
                className='w-full sm:flex-1 outline-0 py-4 dark:bg-transparent'
                />

                <button 
                type='submit'
                className='bg-black text-white text-xs px-10 py-6 dark:bg-gray-300 text-black'
                >
                  SUBSCRIBE
                </button>
                
            </form>
            </div>
          </div>
    </section>
  )
}

export default Subscribe