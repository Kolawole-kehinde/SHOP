import React from 'react'
import { Link } from 'react-router-dom'

const AuthLayout = ({children, title, text, subtext, textLink}) => {
  return (
   
   
       <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
        {children}
        <p className="text-sm text-center text-gray-600">
        {text}
          <Link to={textLink} className="text-blue-500 hover:underline">
            {subtext}
          </Link>
        </p>
        
      </div>
      
    </div>
  )
}

export default AuthLayout
