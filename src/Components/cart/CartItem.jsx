import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({
  product,
  quantity,
  currency,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div
      className="py-4 border-b grid grid-cols-3 items-center text-gray-700 gap-4"
      style={{ gridTemplateColumns: "2fr 1fr auto" }}
    >
      {/* Image + Title */}
      <div className="flex items-center gap-4 min-w-0 overflow-hidden">
        <img
          src={Array.isArray(product.images) ? product.images[0] : product.images}
          alt={product.name}
          className="w-16 sm:w-20 object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="text-sm sm:text-base font-medium truncate">{product.name}</p>
          <p className="text-sm text-gray-500">
            {currency}
            {product.price}
          </p>
          <p className="text-sm text-gray-500">Size: {product.size || "S"}</p>
        </div>
      </div>

      {/* Quantity - centered */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={onDecrement}
          className="w-8 h-8 text-lg border rounded hover:bg-gray-100"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={onIncrement}
          className="w-8 h-8 text-lg border rounded hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Delete button - right aligned */}
      <div className="flex justify-end">
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700"
          aria-label="Remove item"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
