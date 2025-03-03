import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../utils/Schema/authSchema";
import { loginLists } from "../../constant/auth";
import CustomInput from "../../Components/CustomInput";
import AuthLayout from "../../Components/layouts/AuthLayout";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <AuthLayout
      title={"Login to Your Account"}
      text={"Don't have an account?"}
      subtext={"Register"}
      textLink={"auth/Registration"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {loginLists.map(({ label, type, name, placeholder }) => (
          <div key={name} className="relative">
            <CustomInput
              label={label}
              type={showPassword && type === "password" ? "text" : type}
              name={name}
              placeholder={placeholder}
              register={register}
              error={errors[name]}
            />
            {type === "password" && (
              <div className="absolute top-1/2 right-3 flex items-center">
                {showPassword ? (
                  <FaEye
                    onClick={togglePassword}
                    className="cursor-pointer text-gray-600"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={togglePassword}
                    className="cursor-pointer text-gray-600"
                  />
                )}
              </div>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
