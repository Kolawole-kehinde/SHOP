import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabaseClient';

export const useOrders = (userId) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchOrders = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from('orders')
        .select(`
          id,
          created_at,
          order_status,
          order_items (
            id,
            quantity,
            price,
            product_name
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        setError('Error fetching orders');
        console.error(error);
      } else {
        setOrders(data || []);
      }

      setLoading(false);
    };

    fetchOrders();
  }, [userId]);

  const cancelOrder = async (orderId) => {
    const { error } = await supabase
      .from('orders')
      .update({ order_status: 'cancelled' })
      .eq('id', orderId);

    if (error) {
      toast.error('❌ Failed to cancel order');
      console.error(error);
      return false;
    }

    // Re-fetch from server to ensure sync with DB
    const { data: updatedOrder, error: refetchError } = await supabase
      .from('orders')
      .select(`
        id,
        created_at,
        order_status,
        order_items (
          id,
          quantity,
          price,
          product_name
        )
      `)
      .eq('id', orderId)
      .single();

    if (refetchError) {
      console.error('Refetch error after cancellation', refetchError);
    }

    // Update local state
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, order_status: 'cancelled' } : order
      )
    );

    toast.success('✅ Order cancelled.');
    return true;
  };

  return {
    orders,
    loading,
    error,
    setOrders,
    cancelOrder
  };
};
