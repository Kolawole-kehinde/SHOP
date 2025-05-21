import React from 'react'
import { registerLists } from '../../constant/auth'
import AuthLayout from '../../Components/layouts/AuthLayout'

const RegisrationPage = () => {
  return (
    <AuthLayout title={"Register Here"} text={ "Already have an account ?"}subtext={"Login"} textLink={"auth/Login"}>
       <form className="space-y-4">
          {registerLists?.map((field) => (
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
            Register
          </button>
        </form>
    </AuthLayout>
  )
}

export default RegisrationPage
