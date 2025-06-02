import React, { useContext, useState, useMemo, useEffect } from "react";
import ShippingForm from "../Components/CheckoutPage/ShippingForm";
import SuccessModal from "../Components/ui/SuccessModal.jsx";
import { ShopContext } from "../Context/ShopContext.jsx";
import { CartContext } from "../Context/CartContext.jsx";
import PaymentInputs from "../Components/CheckoutPage/PaymentInputs.jsx";
import OrderSummary from "../Components/CheckoutPage/OrderSummary.jsx";

const CheckoutPage = () => {
  const { products, currency = "$", delivery_fee = 0 } = useContext(ShopContext);
  const { cartItems, buyNowItem } = useContext(CartContext);

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    deliveryNotes: "",
  });

  // Calculate checkout items from context cartItems or buyNowItem
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

  // Calculate subtotal and quantity
  const subtotal = checkoutItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = checkoutItems.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate total with delivery fee
  const total = subtotal + delivery_fee;

  // Debug logs to verify values update on checkout page
  useEffect(() => {
    console.log("Checkout Items:", checkoutItems);
    console.log("Subtotal:", subtotal);
    console.log("Total Quantity:", totalQuantity);
  }, [checkoutItems, subtotal, totalQuantity]);

  const handlePayment = () => {
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
        {/* Left side - shipping & payment */}
        <div className="lg:col-span-2 space-y-10">
          <ShippingForm
            billingSameAsShipping={billingSameAsShipping}
            setBillingSameAsShipping={setBillingSameAsShipping}
            formData={formData}
            setFormData={setFormData}
          />
          <PaymentInputs paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
        </div>

        {/* Right side - order summary */}
        <OrderSummary
          subtotal={subtotal}
          total={total}
          currency={currency}
          quantity={totalQuantity}
          delivery_fee={delivery_fee}
          onPlaceOrder={handlePayment}
          isProcessing={isProcessing}
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
