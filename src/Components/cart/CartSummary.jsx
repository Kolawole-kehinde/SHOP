import React from "react";
import { useNavigate } from "react-router";

const CartSummary = ({ currency, subtotal, shippingFee, total }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 max-w-sm ml-auto border space-y-6 p-4 rounded-md shadow-sm">
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">CART TOTALS</h3>
      <div className="flex justify-between mb-2 text-sm">
        <span>Subtotal</span>
        <span>
          {currency}
          {subtotal.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between mb-2 text-sm">
        <span>Shipping Fee</span>
        <span>
          {currency}
          {shippingFee.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between font-bold text-base mb-4">
        <span>Total</span>
        <span>
          {currency}
          {total.toFixed(2)}
        </span>
      </div>

      <button
        onClick={() => navigate("/checkout")}
        className="w-full bg-black text-white py-4 rounded hover:bg-gray-800 transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
