import React from 'react'
import { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const MobileMenu = () => {
    const [visible, SetVisible] = useState(false);
  return (
    <div className={`fixed top-0 right-0 bottom-0 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out z-50 ${visible ? 'w-full' : 'w-0 overflow-hidden'}`}>
        <div className='flex flex-col text-gray-600 dark:text-white'>
          <div onClick={() => SetVisible(false)} className='flex items-center gap-3 p-3 cursor-pointer'>
            <IoMdArrowDropright className='text-2xl h-4 rotate-180' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => SetVisible(false)} className="py-2 pl-6 border-b" to="/">HOME</NavLink>
          <NavLink onClick={() => SetVisible(false)} className="py-2 pl-6 border-b" to="/shop">SHOP</NavLink>
          <NavLink onClick={() => SetVisible(false)} className="py-2 pl-6 border-b" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => SetVisible(false)} className="py-2 pl-6 border-b" to="/contact">CONTACT</NavLink>
        </div>
      </div>
  )
}

export default MobileMenu
