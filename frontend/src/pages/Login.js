import React, {useState} from 'react';
import API from '../api';
import { useNavigate, Link } from 'react-router-dom';

export default function Login(){
  const [form, setForm] = useState({username:'', password:''});
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/orders');
    } catch (err) { alert(err.response?.data?.msg || 'Login failed'); }
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder='Username' value={form.username} onChange={e=>setForm({...form, username:e.target.value})} />
      <input type='password' placeholder='Password' value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
      <button>Login</button>
      <div><Link to='/register'>Register</Link></div>
    </form>
  );
}
