const ShippingForm = ({
  billingSameAsShipping,
  setBillingSameAsShipping,
  register,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-700">Shipping Details</h3>
      <form className="grid sm:grid-cols-2 gap-5 text-sm">
        <input
          {...register("fullName")}
          name="fullName"
          type="text"
          placeholder="Full Name"
          className="input h-12"
        />
        <input
          {...register("email")}
          name="email"
          type="email"
          placeholder="Email Address"
          className="input h-12"
        />
        <input
          {...register("phone")}
          name="phone"
          type="text"
          placeholder="Phone Number"
          className="input h-12"
        />
        <input
          {...register("streetAddress")}
          name="streetAddress"
          type="text"
          placeholder="Street Address"
          className="input sm:col-span-2 h-12"
        />
        <input
          {...register("city")}
          name="city"
          type="text"
          placeholder="City"
          className="input h-12"
        />
        <input
          {...register("postalCode")}
          name="postalCode"
          type="text"
          placeholder="Postal Code"
          className="input h-12"
        />
        <textarea
          {...register("deliveryNotes")}
          name="deliveryNotes"
          placeholder="Delivery Notes (optional)"
          className="input sm:col-span-2 h-24 resize-none"
        />
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
