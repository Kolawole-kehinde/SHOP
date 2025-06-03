import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";
import CustomInput from "../Components/CustomInput";
import { passwordInputs } from "../constant/changePassword";


// Zod Schema for password validation
const schema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage({ type: "", text: "" });

    const { error } = await supabase.auth.updateUser({ password: data.password });

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({ type: "success", text: "Password updated successfully." });
      reset();

      // Redirect to settings page after 2 seconds
      setTimeout(() => {
        navigate("/settings");
      }, 2000);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <div className="flex items-center gap-2 mb-6 text-gray-700">
          <FaLock className="text-primary" />
          <h1 className="text-xl font-semibold">Change Password</h1>
        </div>

       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
  {passwordInputs?.map(({ label, type, name, placeholder }) => (
    <CustomInput
      key={name}
      label={label}
      type={type}
      name={name}
      placeholder={placeholder}
      register={register}    // pass registered input props here
      error={errors[name]}
    />
  ))}

  <button
    type="submit"
    disabled={loading}
    className={`w-full py-2 px-4 text-white rounded-md ${
      loading ? "bg-primary cursor-not-allowed" : "bg-primary hover:bg-orange-600"
    }`}
  >
    {loading ? "Updating..." : "Update Password"}
  </button>
</form>

      </div>
    </div>
  );
};

export default ChangePassword;
