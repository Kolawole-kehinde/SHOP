import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const SuccessModal = ({ onClose }) => {
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
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
        {/* Check Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-orange-200 rounded-full p-3">
            <AiOutlineCheck className="text-primary w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-black mb-2">
          Order Successfully Placed
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-8">Thank You For Choosing Eshop!</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={goHome}
            className="text-primary font-medium hover:underline"
          >
            Continue shopping
          </button>
          <button
            onClick={goOrderPage}
            className="bg-primary text-white font-medium px-6 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            Check Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
