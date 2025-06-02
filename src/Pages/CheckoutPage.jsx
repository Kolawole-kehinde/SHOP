import React, { useContext, useMemo, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ShippingForm from "../Components/CheckoutPage/ShippingForm";
import OrderSummary from "../Components/CheckoutPage/OrderSummary";
import PaymentInputs from "../Components/CheckoutPage/PaymentInputs";
import SuccessModal from "../Components/ui/SuccessModal.jsx";

import { ShopContext } from "../Context/ShopContext.jsx";
import { CartContext } from "../Context/CartContext.jsx";
import { shippingSchema } from "../Schema/shippingSchema.js";

const CheckoutPage = () => {
  const { products, currency = "$", delivery_fee = 0 } = useContext(ShopContext);
  const { cartItems, buyNowItem } = useContext(CartContext);

  const form = useForm({
    resolver: zodResolver(shippingSchema),
    mode: "onChange",
  });

  const { handleSubmit, formState } = form;

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const checkoutItems = useMemo(() => {
    if (buyNowItem) {
      const product = products.find((p) => p.id === buyNowItem.id);
      if (!product) return [];
      return [{ ...product, quantity: buyNowItem.quantity || 1 }];
    }
    return Object.entries(cartItems)
      .map(([id, quantity]) => {
        const product = products.find((p) => p.id === parseInt(id));
        return product ? { ...product, quantity } : null;
      })
      .filter(Boolean);
  }, [buyNowItem, cartItems, products]);

  const subtotal = checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = checkoutItems.reduce((acc, item) => acc + item.quantity, 0);
  const total = subtotal + delivery_fee;

  const handlePayment = (data) => {
    console.log("Shipping Data:", data);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
        Secure Checkout
      </h2>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left - shipping & payment */}
        <div className="lg:col-span-2 space-y-10">
          <ShippingForm
            form={form}
            billingSameAsShipping={billingSameAsShipping}
            setBillingSameAsShipping={setBillingSameAsShipping}
          />
          <PaymentInputs
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>

        {/* Right - summary */}
        <OrderSummary
          subtotal={subtotal}
          total={total}
          currency={currency}
          quantity={totalQuantity}
          delivery_fee={delivery_fee}
          onPlaceOrder={handleSubmit(handlePayment)}
          isProcessing={isProcessing}
          isFormValid={formState.isValid}
        />
      </div>

      {orderSuccess && (
        <SuccessModal
          title="Order Placed Successfully!"
          message="Your order has been confirmed. Check your email for the receipt."
          onClose={() => setOrderSuccess(false)}
        />
      )}
    </div>
  );
};

export default CheckoutPage;
