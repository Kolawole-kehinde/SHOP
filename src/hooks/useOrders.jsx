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
            product_id,
            product_name,
            quantity,
            price,
            total_price
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message || 'Error fetching orders');
        console.error('Supabase fetch error:', error);
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
    } else {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, order_status: 'cancelled' } : order
        )
      );
      toast.success('✅ Order cancelled.');
      return true;
    }
  };

  return { 
    orders,
    loading,
    error,
    cancelOrder,
    setOrders
  };
};
