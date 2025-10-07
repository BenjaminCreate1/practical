import React, {useState} from 'react';
import API from '../api';

export default function OrderForm({onAdd}){
  const [form, setForm] = useState({productName:'', quantity:'', price:''});

  const submit = async (e) => {
    e.preventDefault();
    await API.post('/orders', { productName: form.productName, quantity: Number(form.quantity), price: Number(form.price) });
    setForm({productName:'', quantity:'', price:''});
    onAdd();
  };

  return (
    <form onSubmit={submit}>
      <input placeholder='Product Name' value={form.productName} onChange={e=>setForm({...form, productName:e.target.value})} />
      <input placeholder='Quantity' value={form.quantity} onChange={e=>setForm({...form, quantity:e.target.value})} />
      <input placeholder='Price' value={form.price} onChange={e=>setForm({...form, price:e.target.value})} />
      <button>Add Order</button>
    </form>
  );
}
