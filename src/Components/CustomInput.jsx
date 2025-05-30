import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const CustomInput = ({ label, type, name, register, error, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          type={inputType}
          {...register(name)}
          placeholder={placeholder}
          className={`w-full p-3 mt-1 border rounded-lg pr-10 focus:ring-2 focus:outline-none ${
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {isPassword && (
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEye /> : <FaEyeSlash />}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
