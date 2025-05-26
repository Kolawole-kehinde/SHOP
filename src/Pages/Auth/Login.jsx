import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../Schema/authSchema";
import { loginLists } from "../../constant/auth";
import CustomInput from "../../Components/CustomInput";
import AuthLayout from "../../Components/layouts/AuthLayout";

const LoginPage = () => {
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

  return (
    <AuthLayout
      title={"Login to Your Account"}
      text={"Don't have an account?"}
      subtext={"Register"}
      textLink={"/auth/register"}

    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {loginLists.map(({ label, type, name, placeholder }) => (
          <div key={name} className="relative">
            <CustomInput
              label={label}
              type={type}
              name={name}
              placeholder={placeholder}
              register={register}
              error={errors[name]}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full px-4 py-3 font-semibold text-white bg-primary rounded-lg hover:bg-primary/70 focus:ring-2 focus:ring-primary focus:outline-none"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
