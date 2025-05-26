import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const CustomInput = ({ label, type, name, register, error, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={showPassword && type === "password" ? "text" : type}
          {...register(name)}
          placeholder={placeholder}
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
        />
        {type === "password" && (
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
            onClick={togglePassword}
          >
            {showPassword ? <FaRegEye /> : <FaEyeSlash />}
          </div>
        )}
      </div>
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default CustomInput;
