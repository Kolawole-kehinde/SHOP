import React from "react";

const OrderSummary = ({
  subtotal = 0,
  total = 0,
  currency = "$",
  quantity = 0,
  onPlaceOrder,
  isProcessing = false,
  delivery_fee = 0,
}) => {
  return (
    <section className="w-full mt-6 h-[400px]">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h3>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-lg">Quantity:</span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-lg">Subtotal:</span>
            <span>
              {currency}
              {Number(subtotal).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-lg">Delivery Fee:</span>
            <span>
              {currency}
              {Number(delivery_fee).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-lg">Discount:</span>
            <span>$00.00</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-4">
            <span>Total</span>
            <span>
              {currency}
              {Number(total).toFixed(2)}
            </span>
          </div>
        </div>

        <button
          onClick={onPlaceOrder}
          disabled={isProcessing}
          className={`mt-6 w-full text-sm py-3 rounded-xl font-medium text-white ${
            isProcessing
              ? "bg-primary cursor-not-allowed"
              : "bg-primary hover:bg-primary/90 transition duration-300"
          }`}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Processing Order...
            </div>
          ) : (
            "Place Order Now →"
          )}
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
