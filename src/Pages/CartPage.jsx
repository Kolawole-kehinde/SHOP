import React, { useContext, useState, useEffect } from "react";
import Tittle from "../Components/Tittle";
import { ShopContext } from "../Context/ShopContext";
import { CartContext } from "../Context/CartContext";
import CartItem from "../Components/cart/CartItem";
import CartSummary from "../Components/cart/CartSummary";

const CartPage = () => {
  const { products, currency } = useContext(ShopContext);
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

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
          {cartData.map(({ id, quantity }) => {
            const product = products.find((p) => p.id.toString() === id.toString());
            if (!product) return null;

            return (
              <CartItem
                key={id}
                product={product}
                quantity={quantity}
                currency={currency}
                onIncrement={() => handleQuantityChange(id, "inc")}
                onDecrement={() => handleQuantityChange(id, "dec")}
                onRemove={() => removeFromCart(id)}
              />
            );
          })}

          <CartSummary
            currency={currency}
            subtotal={subtotal}
            shippingFee={shippingFee}
            total={total}
          />
        </>
      )}
    </section>
  );
};

export default CartPage;
