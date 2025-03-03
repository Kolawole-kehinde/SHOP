import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <h1 className='flex items-center gap-4'>
          <NavLink to="/" className='text-2xl sm:text-3xl text-red-600 -tracking-widest'>EShop</NavLink>
     </h1>
  )
}

export default Logo
