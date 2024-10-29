import React from 'react'
import shipping from '../assets/shipping.png'
import moneyback from '../assets/moneyback.png'
import payment from '../assets/payment.png'
import support from '../assets/support.png'


const OurPolicy = () => {
  return (
    <section id='OurPolicy'>
      <div className='container my-14 md:my-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>

          {/* col 1 */}
          <div className='flex flex-col items-center sm:flex-row gap-4'>
           <img 
           src={shipping} 
           alt="shipping--img"
           className='w-20 h-20 object-cover'
           />
           <div>
              <h1 className='lg:text-xl font-bold'>Free Shipping</h1>
              <h1 className='text-sm text-gray-400'>Free Shipping On All Order</h1>
           </div>
          </div>
             {/* col 2 */}
             <div className='flex flex-col items-center sm:flex-row gap-4'>
           <img 
           src={moneyback} 
           alt="moneyback--img"
           className='w-20 h-20 object-cover'
           />
           <div>
              <h1 className='lg:text-xl font-bold'>Safe Money</h1>
              <h1 className='text-sm text-gray-400'>30 Days Money Back</h1>
           </div>
          </div>

          {/* col 3 */}
          <div className='flex flex-col items-center sm:flex-row gap-4'>
           <img 
           src={payment} 
           alt="payment--img"
           className='w-20 h-20 object-cover'
           />
           <div>
              <h1 className='lg:text-xl font-bold'>Secure Payment</h1>
              <h1 className='text-sm text-gray-400'>All Payment Secure</h1>
           </div>
          </div>

          {/* col 4 */}
          <div className='flex flex-col items-center sm:flex-row gap-4'>
           <img 
           src={support} 
           alt="support--img"
           className='w-14 h-14 object-cover'
           />

           <div>
              <h1 className='lg:text-xl font-bold'>Online Supoort 24/7</h1>
              <h1 className='text-sm text-gray-400'>Technical Support 24/7</h1>
           </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default OurPolicy