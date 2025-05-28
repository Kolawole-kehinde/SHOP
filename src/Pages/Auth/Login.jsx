import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginLists } from "../../constant/auth";
import CustomInput from "../../Components/CustomInput";
import AuthLayout from "../../Components/layouts/AuthLayout";
import { loginSchema } from "../../Schema/authSchema";
import { useAuth } from "../../hooks/useAuth";
import { signInApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    setLoading(true);
    try {
      const response = await signInApi(payload);
      toast.success("User logged in successfully!");
      setUser(response);
      reset();
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Login to Your Account"
      text="Don't have an account?"
      subtext="Register"
      textLink="/auth/register"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {loginLists.map(({ label, type, name, placeholder }) => (
          <CustomInput
            key={name}
            label={label}
            type={type}
            name={name}
            placeholder={placeholder}
            register={register}
            error={errors[name]}
          />
        ))}

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-3 font-semibold text-white bg-primary rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/70"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
