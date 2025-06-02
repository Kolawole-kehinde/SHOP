
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";
import toast from "react-hot-toast";



const createOrder = async ({ shippingData, items, paymentMethod, totals, userId = null }) => {
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      user_id: userId,
      shipping_info: shippingData,
      payment_method: paymentMethod,
      delivery_fee: totals.delivery_fee,
      subtotal: totals.subtotal,
      total_price: totals.total,
      order_status: "pending",
    })
    .select()
    .single();

  if (orderError) throw new Error(orderError.message);

  const orderItems = items.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.quantity,
    price: item.price,
    total_price: item.price * item.quantity,
    product_name: item.name,
  }));

  const { error: itemsError } = await supabase
    .from("order_items")
    .insert(orderItems);

  if (itemsError) throw new Error(itemsError.message);

  return order;
};

export const useCreateOrder = (onSuccessCallback) => {
  return useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      console.error("Order error:", error);
      toast("Failed to place order: " + error.message);
    },
  });
};
