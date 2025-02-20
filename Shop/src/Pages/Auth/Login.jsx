import React from 'react'
import { loginLists } from '../../constant/auth'

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>
      <form className="space-y-4">
        {loginLists?.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-center text-gray-600">
        Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
  )
}

export default LoginPage
