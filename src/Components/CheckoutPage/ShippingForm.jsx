const ShippingForm = ({ 
  billingSameAsShipping, 
  setBillingSameAsShipping, 
  formData, 
  setFormData 
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-700">Shipping Details</h3>
      <form className="grid sm:grid-cols-2 gap-5 text-sm" onSubmit={e => e.preventDefault()}>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          className="input"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="input"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          className="input"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          name="streetAddress"
          type="text"
          placeholder="Street Address"
          className="input sm:col-span-2"
          value={formData.streetAddress}
          onChange={handleChange}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          className="input"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          name="postalCode"
          type="text"
          placeholder="Postal Code"
          className="input"
          value={formData.postalCode}
          onChange={handleChange}
        />
        <textarea
          name="deliveryNotes"
          placeholder="Delivery Notes (optional)"
          className="input sm:col-span-2 h-24 resize-none"
          value={formData.deliveryNotes}
          onChange={handleChange}
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
