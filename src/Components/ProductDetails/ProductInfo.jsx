import React from "react";

const ProductInfo = ({
  product,
  currency,
  quantity,
  setQuantity,
  onAddToCart,
  onBuyNow,
}) => {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-4 text-2xl font-bold">
        {currency}
        {product.price}
      </p>

      {/* Quantity */}
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="border px-3 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Decrease quantity"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="border px-3 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={onAddToCart}
          className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700"
        >
          ADD TO CART
        </button>
        <button
          onClick={onBuyNow}
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
        >
          BUY NOW
        </button>
      </div>

      {/* Meta */}
      <div className="mt-8 text-sm text-gray-500 space-y-1">
        <p>✅ 100% Original Product</p>
        <p>✅ Cash On Delivery is available</p>
        <p>✅ Easy return and exchange policy within 7 days</p>
      </div>
    </div>
  );
};

export default ProductInfo;
