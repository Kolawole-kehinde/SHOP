import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaRegEye } from "react-icons/fa";

const CustomInput = ({ label, type, name, register, error, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={showPassword && type === "password" ? "text" : type}
        {...register(name)}
        placeholder={placeholder}
        className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
       {type === "password" && (
              <div
                className="absolute top-1/2 right-3 flex items-center cursor-pointer text-gray-500"
                onClick={togglePassword}
              >
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </div>
            )}
      {/* ✅ Display Validation Errors */}
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default CustomInput;
