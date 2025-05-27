// src/Pages/CheckoutPage.js
import React, { useContext } from "react";
import { shopContext } from "../Context/ShopContext";

const CheckoutPage = () => {
  const { cartItems, products, currency, delivery_fee } = useContext(shopContext);

  const cartProductList = Object.entries(cartItems).map(([id, quantity]) => {
    const product = products.find((p) => p.id === parseInt(id));
    return { ...product, quantity };
  });

  const subtotal = cartProductList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + delivery_fee;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">Checkout</h2>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-medium mb-4">Order Summary</h3>

        {cartProductList.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartProductList.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      Array.isArray(item.image) ? item.image[0] : item.image
                    }
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-semibold">
                  {currency}
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            {/* Totals */}
            <div className="pt-6 border-t text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>
                  {currency}
                  {subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>
                  {currency}
                  {delivery_fee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>
                  {currency}
                  {total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Payment Button */}
            <div className="pt-6">
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delivery Info */}
      <div className="bg-gray-50 rounded-lg p-6 mt-8 shadow-sm">
        <h3 className="text-xl font-medium mb-4">Delivery Information</h3>
        <form className="grid sm:grid-cols-2 gap-4 text-sm">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Street Address"
            className="border p-3 rounded col-span-2"
          />
          <input
            type="text"
            placeholder="City"
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="border p-3 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
