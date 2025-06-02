// src/Pages/OrderDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { orderId } = useParams();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Order Details</h1>
      <p>Details for order ID: <strong>{orderId}</strong> will be shown here.</p>
      {/* You can fetch and display order details by orderId here */}
    </div>
  );
};

export default OrderDetails;
