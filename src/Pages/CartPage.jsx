import React, { useContext, useState, useEffect } from "react";
import Tittle from "../Components/Tittle";
import { shopContext } from "../Context/ShopContext";

const CartPage = () => {
  const { products, currency, cartItems } = useContext(shopContext);
  const [cartData, setCartData] = useState([]);

  // Extract cart item IDs and quantities
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        tempData.push({
          id: itemId, // ✅ using `id`, not `_id`
          quantity: quantity,
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <section className="container mx-auto border-t pt-14">
      <div className="text-2xl mb-3">
        <Tittle text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartData.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Your cart is empty.</p>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product.id.toString() === item.id.toString()
            );

            if (!productData) {
              console.warn("Product not found for ID:", item.id);
              return null;
            }

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={
                      Array.isArray(productData.images)
                        ? productData.images[0]
                        : productData.images
                    }
                    alt={productData.name}
                    className="w-16 sm:w-20 object-cover"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <p className="text-sm text-gray-500">
                      Price: {currency}
                      {productData.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default CartPage;
