import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({
  title = "Order Successful!",
  message = "Thank you for your purchase. A confirmation email has been sent.",
  onClose,
}) => {
  const navigate = useNavigate();

  const goHome = () => {
    onClose();
    navigate("/");
  };

  const goOrderPage = () => {
    onClose();
    navigate("/orders");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={goHome}
            className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
          >
            Home
          </button>
          <button
            onClick={goOrderPage}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Order Page
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-6 py-3 bg-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-400 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
