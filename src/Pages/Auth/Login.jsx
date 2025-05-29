import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginLists } from "../../constant/auth";
import CustomInput from "../../Components/CustomInput";
import AuthLayout from "../../Components/layouts/AuthLayout";
import { loginSchema } from "../../Schema/authSchema";
import { useAuth } from "../../hooks/useAuth";
import { signInApi } from "../../services/auth";

const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
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

  const mutation = useMutation({
    mutationFn: async (data) => {
      const payload = {
        email: data.email,
        password: data.password,
      };
      return await signInApi(payload);
    },
    onSuccess: (response) => {
      toast.success("User logged in successfully!");
      setUser(response);
      reset();
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error?.message || "Login failed. Please try again.");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
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
          disabled={mutation.isLoading}
          className={`w-full px-4 py-3 font-semibold text-white bg-primary rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
            mutation.isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/70"
          }`}
        >
          {mutation.isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
