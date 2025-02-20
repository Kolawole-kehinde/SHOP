import React from "react";

const CustomInput = ({ label, type, name, register, error, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      {/* ✅ Display Validation Errors */}
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default CustomInput;
