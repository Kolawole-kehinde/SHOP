import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shippingSchema } from "../../Schema/shippingSchema";

const ShippingForm = ({ billingSameAsShipping, setBillingSameAsShipping }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shippingSchema),
  });

  const onSubmit = (data) => {
    console.log("Valid data:", data);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-700">Shipping Details</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-5 text-sm">
        <div>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Full Name"
            className="input"
          />
          {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="input"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div>
          <input
            {...register("phone")}
            type="text"
            placeholder="Phone Number"
            className="input"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <input
            {...register("streetAddress")}
            type="text"
            placeholder="Street Address"
            className="input"
          />
          {errors.streetAddress && (
            <p className="text-red-500 text-xs">{errors.streetAddress.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("city")}
            type="text"
            placeholder="City"
            className="input"
          />
          {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}
        </div>

        <div>
          <input
            {...register("postalCode")}
            type="text"
            placeholder="Postal Code"
            className="input"
          />
          {errors.postalCode && (
            <p className="text-red-500 text-xs">{errors.postalCode.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <textarea
            {...register("deliveryNotes")}
            placeholder="Delivery Notes (optional)"
            className="input h-24 resize-none"
          />
        </div>
      </form>

      <label className="inline-flex items-center space-x-2 text-sm text-gray-600 mt-6">
        <input
          type="checkbox"
          checked={billingSameAsShipping}
          onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
          className="accent-black"
        />
        <span>Billing address same as shipping</span>
      </label>
    </div>
  );
};

export default ShippingForm;
