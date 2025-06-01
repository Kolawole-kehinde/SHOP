import React, { useContext, useState, useEffect } from "react";
import Tittle from "../Components/Tittle";
import { shopContext } from "../Context/ShopContext";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const {
    products,
    currency,
    cartItems,
    removeFromCart,
    updateCartItemQuantity,
  } = useContext(shopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        tempData.push({
          id: itemId,
          quantity: quantity,
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleQuantityChange = (productId, type) => {
    const currentQty = cartItems[productId];
    if (type === "inc") {
      updateCartItemQuantity(productId, currentQty + 1);
    } else if (type === "dec" && currentQty > 1) {
      updateCartItemQuantity(productId, currentQty - 1);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const subtotal = cartData.reduce((acc, item) => {
    const product = products.find((p) => p.id.toString() === item.id.toString());
    return acc + (product ? product.price * item.quantity : 0);
  }, 0);

  const shippingFee = 10;
  const total = subtotal + shippingFee;

  return (
    <section className="container mx-auto border-t pt-14 px-4">
      <div className="text-2xl mb-6">
        <Tittle text1="YOUR" text2="CART" />
      </div>

      {cartData.length === 0 ? (
        <p className="text-center text-gray-500 py-8">Your cart is empty.</p>
      ) : (
        <>
          {cartData.map((item, index) => {
            const product = products.find((p) => p.id.toString() === item.id.toString());
            if (!product) return null;

            return (
              <div
                key={index}
                className="py-4 border-b flex justify-between items-center text-gray-700"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={Array.isArray(product.images) ? product.images[0] : product.images}
                    alt={product.name}
                    className="w-16 sm:w-20 object-cover"
                  />
                  <div>
                    <p className="text-sm sm:text-base font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      {currency}
                      {product.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Size: {product.size || "S"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(item.id, "dec")}
                    className="w-8 h-8 text-lg border rounded hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "inc")}
                    className="w-8 h-8 text-lg border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            );
          })}

          {/* Cart Summary */}
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

            {/* ✅ Proceed to Checkout Button */}
            <button
              onClick={() => alert("Redirect to checkout page")}
              className="w-full bg-black text-white py-4 rounded hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
