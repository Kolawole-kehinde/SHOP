import React from "react";

const ShippingForm = ({ form, billingSameAsShipping, setBillingSameAsShipping }) => {
  const { register, formState: { errors } } = form;

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h3>
      <form className="grid sm:grid-cols-2 gap-5 text-sm">
        <input {...register("fullName")} placeholder="Full Name" className="input" />
        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}

        <input {...register("email")} placeholder="Email Address" className="input" />
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

        <input {...register("phone")} placeholder="Phone Number" className="input" />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}

        <input {...register("streetAddress")} placeholder="Street Address" className="input sm:col-span-2" />
        {errors.streetAddress && <p className="text-red-500 text-xs">{errors.streetAddress.message}</p>}

        <input {...register("city")} placeholder="City" className="input" />
        {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}

        <input {...register("postalCode")} placeholder="Postal Code" className="input" />
        {errors.postalCode && <p className="text-red-500 text-xs">{errors.postalCode.message}</p>}

        <textarea {...register("deliveryNotes")} placeholder="Delivery Notes (optional)" className="input sm:col-span-2 h-24 resize-none" />
      </form>
    </div>
  );
};

export default ShippingForm;
