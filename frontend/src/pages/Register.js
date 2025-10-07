import React, {useState} from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [form, setForm] = useState({username:'', password:''});
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      alert('Registered. Please login.');
      navigate('/');
    } catch (err) { alert(err.response?.data?.msg || 'Error'); }
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder='Username' value={form.username} onChange={e=>setForm({...form, username:e.target.value})} />
      <input type='password' placeholder='Password' value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
      <button>Register</button>
    </form>
  );
}
