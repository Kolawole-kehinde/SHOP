import React, { useContext, useState } from "react";
import { shopContext } from "../Context/ShopContext";
import ShippingForm from "../Components/CheckoutPage/ShippingForm";
import PaymentInputs from "../Components/CheckoutPage/PaymentInputs.jsx.jsx";
import OrderSummary from "../Components/CheckoutPage/OrderSummary.jsx";
import SuccessModal from "../Components/modal/SuccessModal.jsx";


const CheckoutPage = () => {
  const { cartItems, products, currency, delivery_fee } = useContext(shopContext);

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Initialize formData with all empty fields to avoid undefined errors
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    deliveryNotes: "",
  });

  const cartProductList = Object.entries(cartItems).map(([id, quantity]) => {
    const product = products.find((p) => p.id === parseInt(id));
    return { ...product, quantity };
  });

  const subtotal = cartProductList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + delivery_fee;

  // Calculate total quantity
  const totalQuantity = cartProductList.reduce((acc, item) => acc + item.quantity, 0);

  const handlePayment = () => {
    // Here you can validate form data before processing, e.g. check required fields

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
          <PaymentInputs
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>

        {/* Right side - order summary */}
        <OrderSummary
          subtotal={subtotal}
          total={total}
          currency={currency}
          quantity={totalQuantity}
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
