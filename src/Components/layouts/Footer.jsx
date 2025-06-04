import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-14 text-base font-[Outfit]'>

        {/* First column */}
        <div>
          <a href="/" className='text-3xl sm:text-4xl text-red-600 tracking-wide'>EShop</a>
          <p className='w-full md:w-2/3 text-gray-600 pt-5 text-xl'>
            Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          </p>
        </div>

        {/* Second column */}
        <div>
          <p className='text-xl  mb-5 uppercase font-bold text-gray-600'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600 text-xl'>
            <Link to="/">
              <li className='cursor-pointer text-gray-600'>Home</li>
            </Link>
            <Link to="/about">
              <li className='cursor-pointer text-gray-600'>About Us</li>
            </Link>
            <Link to="/contact">
              <li className='cursor-pointer text-gray-600'>Contact</li>
            </Link>
            <Link to="/shop">
              <li className='cursor-pointer text-gray-600'>Shop</li>
            </Link>
          </ul>
        </div>

        {/* Third column */}
        <div>
          <p className='text-2xl  mb-5 uppercase font-bold text-gray-600'>Get in touch</p>
          <ul className='flex flex-col gap-2 text-gray-600 text-xl'>
            <li>+234 703-736-1571</li>
            <li>support@eshop.com</li>
            {/* <li className='cursor-pointer'>Instagram</li> */}
          </ul>
        </div>

        {/* Footer Line */}
        <div className='col-span-full'>
          <hr className=' border-gray-300' />
          <p className='py-5 text-center text-xl text-gray-600'>Copyright 2024@Eshop - All Right Reserved.</p>
        </div>

      </div>
    </section>
  )
}

export default Footer;
