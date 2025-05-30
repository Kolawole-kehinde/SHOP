import React from 'react'
import { Link } from 'react-router-dom'

const CustomButton = ({ children, onClick, type, className, ...rest }) => {
  return (
    <Link to='/auth/register'>
      <button
        type={type || "submit"}
        {...rest}
        className={`bg-primary px-10 py-3 rounded-md text-white font-semibold hidden lg:block hover:bg-primary/90 duration-300 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  )
}

export default CustomButton