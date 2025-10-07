
## 1\. React Basics

### 1\. a. Create a simple "Hello World" React app.

This is the core entry component for a React application.

**Setup:**

```bash
npx create-react-app practical1a
cd practical1a
```

**File:** `practical1a/src/App.js`

```jsx
import React from 'react';

// Functional component defining the "Hello World" display
function HelloWorld() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Hello World! 👋</h1>
      <p>This is a basic React rendering.</p>
    </div>
  );
}

export default HelloWorld; 
```

-----

### 1\. b. Render dynamic content using state and props.

This builds on React fundamentals by demonstrating `useState` (for internal state) and component `props`.

**Setup:** Use the same `practical1a` project.

**File:** `practical1a/src/DynamicGreeting.js` (Create this file)

```jsx
import React, { useState } from 'react';

// Component receives 'userName' as a prop
const DynamicGreeting = (props) => {
  // 1. State: Manages the internal click counter
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div style={{ border: '1px solid #007bff', padding: '15px', margin: '10px' }}>
      <h2>Welcome, {props.userName}!</h2> {/* Using prop */}
      <p>You have interacted with this component **{clickCount}** times.</p> {/* Using state */}
      <button onClick={handleClick}>Update Count</button>
    </div>
  );
};

export default DynamicGreeting;
```

**File:** `practical1a/src/App.js` (Update to use the dynamic component)

```jsx
import React from 'react';
import DynamicGreeting from './DynamicGreeting';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 1.b: State & Props Demonstration</h1>
      {/* Pass different data via props */}
      <DynamicGreeting userName="Alice" /> 
      <DynamicGreeting userName="Bob" />
    </div>
  );
}

export default App;
```

-----

## 2\. React Controlled Forms

### 2\. a. Create a simple user registration form and an order details form in React.

### 2\. b. Implement controlled components and manage their state in above forms.

This is a combined practical demonstrating state management for form inputs.

**Setup:**

```bash
npx create-react-app practical2
cd practical2
```

**File:** `practical2/src/App.js` (Contains both forms and logic)

```jsx
import React, { useState } from 'react';

// === User Registration Form (Controlled Component) ===
const UserRegistrationForm = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  // Single handler for all inputs using the 'name' attribute
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', user);
    alert(`Registered: ${user.name} (${user.email})`);
    // Reset form after submission
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid blue', padding: '20px', margin: '20px' }}>
      <h3>User Registration</h3>
      <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required /><br/><br/>
      <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required /><br/><br/>
      <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required /><br/><br/>
      <button type="submit">Register</button>
    </form>
  );
};

// === Order Details Form (Controlled Component) ===
const OrderDetailsForm = () => {
  const [order, setOrder] = useState({ product: 'Laptop', quantity: 1, address: '' });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Details:', order);
    alert(`Order placed for ${order.quantity} of ${order.product} to ${order.address.substring(0, 10)}...`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid green', padding: '20px', margin: '20px' }}>
      <h3>Order Details</h3>
      <select name="product" value={order.product} onChange={handleChange}>
        <option value="Laptop">Laptop</option>
        <option value="Phone">Phone</option>
      </select><br/><br/>
      <input type="number" name="quantity" placeholder="Quantity" value={order.quantity} onChange={handleChange} min="1" required /><br/><br/>
      <textarea name="address" placeholder="Shipping Address" value={order.address} onChange={handleChange} required /><br/><br/>
      <button type="submit">Place Order</button>
    </form>
  );
};

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 2: Controlled Forms</h1>
      <UserRegistrationForm />
      <OrderDetailsForm />
    </div>
  );
}

export default App;
```

-----

## 3\. Express Server and Routing

### 3\. a. Create a basic Express server that handles HTTP requests.

### 3\. b. Set up routes for ‘Hello World’ React app.

This is a combined practical to set up the backend structure and define a couple of simple routes.

**Setup:**

```bash
mkdir practical3_server
cd practical3_server
npm init -y
npm install express cors dotenv
```

**File:** `practical3_server/package.json` (Add start script)

```json
"scripts": { "start": "node server.js" }
```

**File:** `practical3_server/.env`

```
PORT=5000
```

**File:** `practical3_server/server.js`

```javascript
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for client communication
app.use(express.json());

// === 3.b: Route setup for 'Hello World' (the client would fetch this) ===
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World from Express! 🌍' });
});

// === 3.a: Basic server check/status route ===
app.get('/', (req, res) => {
    res.send('Server is active. Go to /api/hello.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
```

**Run Instructions:**
In the `practical3_server` directory: `npm start`

-----

## 4\. Build a basic RESTful API with Express to perform CRUD operations.

This focuses on building a simple API with in-memory data storage (simulating a database).

**Setup:** Use the same setup as Practical 3 (but rename directory to `practical4_api`).

**File:** `practical4_api/server.js`

```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); 

// In-memory data store for "Products"
let products = [
    { id: 101, name: 'T-shirt', price: 25.00 },
    { id: 102, name: 'Jeans', price: 75.00 }
];
let nextId = 103;

// Base route: /api/products

// 1. POST (Create)
app.post('/api/products', (req, res) => {
    const { name, price } = req.body;
    if (!name || price === undefined) {
        return res.status(400).json({ msg: 'Missing name or price' });
    }
    const newProduct = { id: nextId++, name, price: parseFloat(price) };
    products.push(newProduct);
    res.status(201).json(newProduct); // 201 Created
});

// 2. GET (Read All)
app.get('/api/products', (req, res) => {
    res.json(products);
});

// 3. PUT (Update)
app.put('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ msg: `Product ${id} not found` });
    }

    const { name, price } = req.body;
    if (name) product.name = name;
    if (price !== undefined) product.price = parseFloat(price);

    res.json(product);
});

// 4. DELETE (Delete)
app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);

    if (products.length === initialLength) {
        return res.status(404).json({ msg: `Product ${id} not found` });
    }

    res.json({ msg: 'Product deleted' });
});

app.listen(PORT, () => console.log(`RESTful API running on port ${PORT}`));
```

-----

## 5\. React Data Fetching

### 5\. a. Implement a React component that fetches data from the Express server and displays it.

### 5\. b. Set up a form in React that sends POST requests to create data on the backend.

This combines the client-side data fetching and submission logic.

**Setup:**

1.  Ensure the **Express API from Practical 4** is running on port 5000.
2.  **Initialize React App:**
    ```bash
    npx create-react-app practical5_client
    cd practical5_client
    npm install axios
    ```

**File:** `practical5_client/src/App.js`

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

// === Component 5.a: Fetching and Displaying Data (GET) ===
const ProductList = ({ refreshKey }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(API_URL)
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, [refreshKey]); // Re-fetches data when refreshKey changes

  if (loading) return <p>Loading products...</p>;

  return (
    <div style={{ margin: '20px', padding: '15px', border: '1px solid gray' }}>
      <h3>Available Products (Fetched via GET)</h3>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            **{p.name}** | Price: ${p.price.toFixed(2)} (ID: {p.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

// === Component 5.b: Sending Data (POST) ===
const ProductForm = ({ onProductCreated }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request
      const response = await axios.post(API_URL, { name, price: parseFloat(price) });
      console.log('Product created:', response.data);
      alert(`Created product: ${response.data.name}`);
      
      // Clear form and notify parent
      setName('');
      setPrice('');
      onProductCreated(); 
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '15px', border: '1px solid red' }}>
      <h3>Create New Product (POST)</h3>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} min="0.01" step="0.01" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCreated = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 5: Data Fetching and Submission</h1>
      <ProductForm onProductCreated={handleCreated} />
      <ProductList refreshKey={refreshKey} />
    </div>
  );
}

export default App;
```

-----

## 6\. MongoDB and Mongoose

### 6\. a. Connect Express to MongoDB using Mongoose.

### 6\. b. Create a simple model (e.g., a note or task) to integrate it with earlier CRUD API.

This replaces the in-memory store with a persistent database connection and Mongoose model logic.

**Setup:**

1.  **Initialize Node/Express/Mongoose:**
    ```bash
    mkdir practical6_mongoose
    cd practical6_mongoose
    npm init -y
    npm install express mongoose cors dotenv
    ```
2.  **MongoDB:** Ensure MongoDB is running.
3.  **File:** `practical6_mongoose/.env`
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/mern_practical_db 
    ```

**File:** `practical6_mongoose/models/Task.js` (Create `models` directory)

```javascript
const mongoose = require('mongoose');

// Define the schema for a Task (6.b)
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Task', TaskSchema);
```

**File:** `practical6_mongoose/server.js` (Integrates 6.a and updates CRUD)

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Task = require('./models/Task'); 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// === 6.a: Connect to Database ===
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
connectDB(); 

// Middleware
app.use(cors());
app.use(express.json());

// === CRUD Operations using Mongoose (6.b) ===
// POST (Create)
app.post('/api/tasks', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) { res.status(400).json({ msg: err.message }); }
});

// GET (Read All)
app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) { res.status(500).json({ msg: 'Server Error' }); }
});

// PUT (Update)
app.put('/api/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) return res.status(404).json({ msg: 'Task not found' });
        res.json(task);
    } catch (err) { res.status(400).json({ msg: err.message }); }
});

// DELETE (Delete)
app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ msg: 'Task not found' });
        res.json({ msg: 'Task removed' });
    } catch (err) { res.status(500).json({ msg: 'Server Error' }); }
});

app.listen(PORT, () => console.log(`Mongoose API running on port ${PORT}`));
```

-----

## 7\. Authentication with JWT

### 7\. a. Implement a simple authentication system using JWT in the earlier Express API.

### 7\. b. Create a login and register form in React that interacts with the Express backend.

This requires extending the Mongoose API with user models, hashing, and JWT logic, and creating the corresponding client forms.

**Setup:**

1.  **Server Install:** (Use P6 setup + JWT/Bcrypt)
    ```bash
    mkdir practical7_auth_api
    cd practical7_auth_api
    npm init -y
    npm install express mongoose jsonwebtoken bcryptjs cors dotenv
    ```
2.  **Client Install:**
    ```bash
    cd ..
    npx create-react-app practical7_client
    cd practical7_client
    npm install axios
    ```
3.  **File:** `practical7_auth_api/.env` (Add secrets)
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/mern_auth_db
    JWT_SECRET=supersecurejwtkeyforpractical
    JWT_EXPIRE=1h
    ```

**File:** `practical7_auth_api/models/User.js`

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false }, // Hides password by default
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

// Instance method to compare password
UserSchema.methods.matchPassword = function(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

// Instance method to get JWT
UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

module.exports = mongoose.model('User', UserSchema);
```

**File:** `practical7_auth_api/server.js` (Auth Routes - 7.a)

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/User'); 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected'));
app.use(cors());
app.use(express.json());

const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ success: true, token, username: user.username });
};

// @route POST /api/auth/register
app.post('/api/auth/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        sendTokenResponse(user, 201, res);
    } catch (err) { res.status(400).json({ success: false, msg: 'Registration failed', error: err.message }); }
});

// @route POST /api/auth/login
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ msg: 'Provide email and password' });

    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(401).json({ msg: 'Invalid credentials' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ msg: 'Invalid credentials' });

    sendTokenResponse(user, 200, res);
});

app.listen(PORT, () => console.log(`Auth API running on port ${PORT}`));
```

**File:** `practical7_client/src/App.js` (Client Forms - 7.b)

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const AuthForm = ({ type }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [status, setStatus] = useState('');
  const isRegister = type === 'register';

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Loading...');
    try {
      const endpoint = `${API_URL}/${type}`;
      const dataToSend = isRegister ? formData : { email: formData.email, password: formData.password };
      
      const response = await axios.post(endpoint, dataToSend);
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      setStatus(`${type.toUpperCase()} SUCCESS! Welcome, ${response.data.username}`);
    } catch (error) {
      console.error('Auth error:', error.response?.data?.msg || error.message);
      setStatus(`Error: ${error.response?.data?.msg || 'An error occurred.'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid purple', padding: '20px', margin: '20px' }}>
      <h3>{isRegister ? 'Register' : 'Login'} Form</h3>
      {isRegister && <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />}<br/>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br/>
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /><br/>
      <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
      <p style={{ color: status.startsWith('Error') ? 'red' : 'green' }}>{status}</p>
      <p>Token Status: **{localStorage.getItem('token') ? 'Active' : 'Not Active'}**</p>
    </form>
  );
};

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 7: JWT Auth Forms</h1>
      <AuthForm type="register" />
      <AuthForm type="login" />
    </div>
  );
}

export default App;
```

-----

## 8\. React Routing and Context API

### 8\. a. Set up routing in your React app for different pages.

### 8\. b. Use the Context API to manage global state across the app.

This focuses on client-side routing and global state management using Context.

**Setup:**

1.  **Initialize React App:**
    ```bash
    npx create-react-app practical8_context_router
    cd practical8_context_router
    npm install react-router-dom
    ```

**File:** `practical8_context_router/src/context/AuthContext.js`

```jsx
import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('mockUser') || null);
  const navigate = useNavigate();

  const login = (mockUserId) => {
    localStorage.setItem('mockUser', mockUserId);
    setUser(mockUserId);
    navigate('/profile'); 
  };

  const logout = () => {
    localStorage.removeItem('mockUser');
    setUser(null);
    navigate('/login');
  };

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
```

**File:** `practical8_context_router/src/App.js` (Routing and Page Components)

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// --- Page Components ---
const Home = () => <h1>Home Page 🏡</h1>;
const LoginPage = () => {
  const { login, isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/profile" replace />;
  
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => login('User_Demo')}>Mock Log In (Context)</button>
    </div>
  );
};
const ProfilePage = () => {
  const { user, logout } = useAuth();
  return (
    <div style={{ border: '2px solid green', padding: '20px' }}>
      <h1>Profile Page 👤</h1>
      <p>Logged in as: **{user}** (Managed by Context)</p>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

// --- Protected Route Helper ---
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// --- Header ---
const Header = () => {
    const { isAuthenticated } = useAuth();
    return (
        <nav style={{ padding: '10px', background: '#333' }}>
            <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
            {!isAuthenticated && <Link to="/login" style={{ color: 'white', margin: '0 10px' }}>Login</Link>}
            {isAuthenticated && <Link to="/profile" style={{ color: 'white', margin: '0 10px' }}>Profile</Link>}
        </nav>
    );
};

function App() {
  return (
    <Router>
      {/* 8.b: Wrap application with AuthProvider */}
      <AuthProvider> 
        <Header />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          {/* 8.a: Set up Routes */}
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
```

-----

## 9\. Full Stack Order Placement System

This is the integration task. We will provide the final component that handles all four operations, assuming the Express server is configured with the necessary **User, Product, and Order** models and **JWT protection** (based on P6/P7 server logic).

**Setup:** Use the **React client from Practical 7/8** setup. Ensure the API server has:

1.  `/api/auth/register` and `/api/auth/login` working.
2.  `/api/products` (GET: list).
3.  `/api/orders` (POST: protected, for placement).

**File:** `practical8_context_router/src/pages/OrderSystem.js` (Create this file)

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Assume useAuth and other context/routing is available from P8
import { useAuth } from '../context/AuthContext'; 

const API_URL = 'http://localhost:5000/api';

const OrderSystem = () => {
  const { isAuthenticated, getToken, user } = useAuth();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({}); // { productId: quantity }
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  // c. Product Selection: Fetch Products
  useEffect(() => {
    axios.get(`${API_URL}/products`)
      .then(res => setProducts(res.data))
      .catch(err => setStatus('Failed to load products. Check server.'));
  }, []);

  const handleUpdateCart = (productId, change) => {
    setCart(prevCart => {
      const newQuantity = (prevCart[productId] || 0) + change;
      if (newQuantity <= 0) {
        const { [productId]: removed, ...rest } = prevCart;
        return rest;
      }
      return { ...prevCart, [productId]: newQuantity };
    });
  };

  const calculateTotal = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const product = products.find(p => p._id === id); // Assuming Mongoose _id
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };
  
  // d. Order Placement: Send POST request
  const handlePlaceOrder = async () => {
    if (!isAuthenticated) return setStatus('Please log in to place an order.');
    const totalAmount = calculateTotal();
    if (totalAmount === 0) return setStatus('Cart is empty.');

    const orderProducts = Object.entries(cart).map(([productId, quantity]) => ({
      product: productId,
      quantity,
    }));
    
    try {
      setLoading(true);
      await axios.post(`${API_URL}/orders`, { products: orderProducts, totalAmount }, {
        headers: { Authorization: `Bearer ${getToken()}` }, // Send JWT
      });
      setStatus('✅ Order placed successfully! Thank you.');
      setCart({}); // Clear cart
    } catch (error) {
      console.error('Order error:', error.response?.data?.msg || error.message);
      setStatus(`❌ Order failed: ${error.response?.data?.msg || 'An error occurred.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'left', padding: '20px' }}>
      <h2>Order Placement System</h2>
      <p style={{ color: 'blue' }}>User Status: **{isAuthenticated ? `Logged in as ${user}` : 'Guest (Login required for order)'}**</p>
      
      {/* 9.c: Product Selection */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
        <h3>1. Product Selection</h3>
        {products.map(p => (
          <div key={p._id} style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
            <span>**{p.name}** (${p.price.toFixed(2)})</span>
            <div>
              <button onClick={() => handleUpdateCart(p._id, -1)} disabled={!cart[p._id]}>-</button>
              <span style={{ margin: '0 10px' }}>{cart[p._id] || 0}</span>
              <button onClick={() => handleUpdateCart(p._id, 1)}>+</button>
            </div>
          </div>
        ))}
        <hr/>
        <h4>Cart Total: **${calculateTotal().toFixed(2)}**</h4>
      </div>
      
      {/* 9.d: Order Placement */}
      <div style={{ border: '1px solid green', padding: '15px' }}>
        <h3>2. Order Placement</h3>
        <button 
          onClick={handlePlaceOrder} 
          disabled={loading || calculateTotal() === 0 || !isAuthenticated}
          style={{ padding: '10px 20px', background: 'green', color: 'white', border: 'none' }}
        >
          {loading ? 'Processing...' : `Place Order for $${calculateTotal().toFixed(2)}`}
        </button>
        {status && <p style={{ color: status.startsWith('❌') ? 'red' : 'green' }}>{status}</p>}
      </div>
    </div>
  );
};

export default OrderSystem;
```

**Final Client Integration:**
Update `practical8_context_router/src/App.js` to import and use `OrderSystem.js`. You'll need separate pages for Registration (9.a) and Login (9.b) as defined in Practical 7/8.

```jsx
// practical8_context_router/src/App.js (Add the route)
// ...
<Route 
    path="/order" 
    element={<ProtectedRoute><OrderSystem /></ProtectedRoute>} // Requires Authentication (9.a & 9.b)
/>
// ...
```