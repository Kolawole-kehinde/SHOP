import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { registerLists } from '../../constant/auth';
import AuthLayout from '../../Components/layouts/AuthLayout';
import CustomInput from '../../Components/CustomInput';
import { registerSchema } from '../../Schema/authSchema';
import { useAuth } from '../../hooks/useAuth';
import { signUpApi } from '../../services/auth';

const defaultValues = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const RegistrationPage = () => {
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

  const mutation = useMutation({
    mutationFn: async (data) => {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      return await signUpApi(payload);
    },
    onSuccess: (response) => {
      toast.success('User registered successfully!');
      setUser(response);
      reset();
      navigate('/');
    },
    onError: (error) => {
      toast.error(error?.message || 'Registration failed');
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
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
          {registerLists.map(({ label, type, name, placeholder }) => (
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
            disabled={mutation.isLoading}
            className={`w-full px-4 py-3 font-semibold text-white bg-primary rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
              mutation.isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/70'
            }`}
          >
            {mutation.isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </AuthLayout>
    </section>
  );
};

export default RegistrationPage;
