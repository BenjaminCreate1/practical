import React, {useEffect, useState} from 'react';
import API from '../api';
import OrderForm from '../components/OrderForm';

export default function Orders(){
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await API.get('/orders');
      setOrders(res.data);
    } catch (err) { alert('Failed to fetch orders'); }
  };

  useEffect(() => { fetchOrders(); }, []);

  const remove = async (id) => {
    await API.delete(`/orders/${id}`);
    fetchOrders();
  };

  return (
    <div>
      <h2>Your Orders</h2>
      <OrderForm onAdd={fetchOrders} />
      <ul>
        {orders.map(o => (
          <li key={o._id}>
            {o.productName} — {o.quantity} pcs — ₹{o.price}
            <button onClick={()=>remove(o._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
