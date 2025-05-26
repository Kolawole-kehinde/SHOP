import React from 'react'
import { registerLists } from '../../constant/auth'
import AuthLayout from '../../Components/layouts/AuthLayout'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../Schema/authSchema';
import CustomInput from '../../Components/CustomInput';

const RegistrationPage = () => {

   const {
     register,
     handleSubmit,
     formState: { errors },
     reset,
   } = useForm({
     resolver: zodResolver(registerSchema),
   });
 
   const onSubmit = (data) => {
     console.log(data);
     reset();
   };

  return (
     <section>
    <AuthLayout
      title={"Register Here"}
      text={"Already have an account ?"}
      subtext={"Login"}
    textLink={"/auth/login"}
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
            className="w-full px-4 py-3 font-semibold text-white bg-primary rounded-lg hover:bg-primary/70 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            Register
          </button>
        </form>
    </AuthLayout>
    </section>
  )
}

export default RegistrationPage;
