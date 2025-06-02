import React, { useContext, useState, useMemo, useEffect } from "react";
import ShippingForm from "../Components/CheckoutPage/ShippingForm";
import SuccessModal from "../Components/ui/SuccessModal.jsx";
import { ShopContext } from "../Context/ShopContext.jsx";
import { CartContext } from "../Context/CartContext.jsx";
import PaymentInputs from "../Components/CheckoutPage/PaymentInputs.jsx";
import OrderSummary from "../Components/CheckoutPage/OrderSummary.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shippingSchema } from "../Schema/shippingSchema.js";

const CheckoutPage = () => {
  const { products, currency = "$", delivery_fee = 0 } = useContext(ShopContext);
  const { cartItems, buyNowItem, clearCart, clearBuyNowItem } = useContext(CartContext);

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    resolver: zodResolver(shippingSchema),
    mode: "onChange",
  });

  const checkoutItems = useMemo(() => {
    if (buyNowItem) {
      const product = products.find((p) => p.id === buyNowItem.id);
      return product ? [{ ...product, quantity: buyNowItem.quantity || 1 }] : [];
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

  const handlePayment = handleSubmit((data) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);
    }, 3000);
  });

  useEffect(() => {
    if (orderSuccess) {
      clearCart();
      if (buyNowItem) clearBuyNowItem?.();
      reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [orderSuccess]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
        Secure Checkout
      </h2>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <ShippingForm
            register={register}
            billingSameAsShipping={billingSameAsShipping}
            setBillingSameAsShipping={setBillingSameAsShipping}
          />
          <PaymentInputs paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
        </div>

        <OrderSummary
          subtotal={subtotal}
          total={total}
          currency={currency}
          quantity={totalQuantity}
          delivery_fee={delivery_fee}
          onPlaceOrder={handlePayment}
          isProcessing={isProcessing}
          isFormValid={isValid}
        />
      </div>

      {orderSuccess && (
        <SuccessModal
          title="Order Placed Successfully!"
          message="Your order has been confirmed. Check your email for the receipt."
          onClose={() => setOrderSuccess(false)}
          showContinueButton
        />
      )}
    </div>
  );
};

export default CheckoutPage;
