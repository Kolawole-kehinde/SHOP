import React, { useState } from 'react';
import { registerLists } from '../../constant/auth';
import AuthLayout from '../../Components/layouts/AuthLayout';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../Schema/authSchema';
import CustomInput from '../../Components/CustomInput';
import { useAuth } from '../../hooks/useAuth';
import { signUpApi } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const defaultValues = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};


const RegistrationPage = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
   const payload = {
  name: data.name,
  email: data.email,
  password: data.password,
};

    setLoading(true);
    try {
      const response = await signUpApi(payload);
      toast.success('User registered successfully!');
      setUser(response);
      reset();
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <AuthLayout
        title="Register Here"
        text="Already have an account?"
        subtext="Login"
        textLink="/auth/login"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {registerLists?.map(({ label, type, name, placeholder }) => (
            <CustomInput
              key={name}
              type={type}
              name={name}
              label={label}
              placeholder={placeholder}
              register={register}
              error={errors[name]}
            />
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-3 font-semibold text-white bg-primary rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/70'
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </AuthLayout>
    </section>
  );
};

export default RegistrationPage;
