const PaymentInputs = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="mt-8">
      <h4 className="text-lg font-medium text-gray-700 mb-3">
        Payment Method
      </h4>
      <div className="space-y-3 text-sm text-gray-600">
        {["credit", "paypal", "apple"].map((method) => (
          <label key={method} className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value={method}
              checked={paymentMethod === method}
              onChange={() => setPaymentMethod(method)}
              className="accent-black"
            />
            {method === "credit" && "Credit/Debit Card"}
            {method === "paypal" && "PayPal"}
            {method === "apple" && "Apple Pay"}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentInputs;
