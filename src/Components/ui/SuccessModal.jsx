import React from "react";

const SuccessModal = ({ title = "Order Successful!", message = "Thank you for your purchase. A confirmation email has been sent.", onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
