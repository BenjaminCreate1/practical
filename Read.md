## 1\. React Basics: Hello World, State, and Props

### Setup

1.  **Initialize React App:**
    ```bash
    npx create-react-app practical1
    cd practical1
    ```

### 1\. a. Create a simple "Hello World" React app.

**File:** `practical1/src/App.js`

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello World! 👋</h1>
      <p>This is my first basic React application.</p>
    </div>
  );
}

export default App;
```

### 1\. b. Render dynamic content using state and props.

**File:** `practical1/src/Greeting.js` (Create this file)

```jsx
import React, { useState } from 'react';

// Functional component receiving 'name' as a prop
const Greeting = (props) => {
  // State: To hold the count
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: '15px', border: '1px solid blue', margin: '10px' }}>
      <h2>Hello, {props.name}!</h2> {/* Using prop */}
      <p>You have clicked the button **{count}** times.</p> {/* Using state */}
      <button onClick={incrementCount}>Click Me</button>
    </div>
  );
};

export default Greeting;
```

**File:** `practical1/src/App.js` (Update to use `Greeting.js`)

```jsx
import React from 'react';
import Greeting from './Greeting'; // Import the new component

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 1: State & Props Demo</h1>
      {/* Pass "Alice" as a prop */}
      <Greeting name="Alice" /> 
      {/* Pass "Bob" as a prop */}
      <Greeting name="Bob" />
    </div>
  );
}

export default App;
```

**Run Instructions:**
In the `practical1` directory: `npm start`

-----

## 2\. React Controlled Forms

### Setup

1.  **Initialize React App:**
    ```bash
    npx create-react-app practical2
    cd practical2
    ```

### 2\. a. & 2. b. Create forms and Implement controlled components.

**File:** `practical2/src/App.js` (Contains both forms)

```jsx
import React, { useState } from 'react';

// === User Registration Form ===
const UserRegistrationForm = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Handler for all inputs, making them "Controlled Components"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', user);
    alert(`Registered: ${user.username}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid blue', padding: '20px', margin: '20px' }}>
      <h3>User Registration Form</h3>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={user.username} // Controlled by state
          onChange={handleChange}
          required
        />
      </label><br/><br/>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email} // Controlled by state
          onChange={handleChange}
          required
        />
      </label><br/><br/>
      <button type="submit">Register</button>
    </form>
  );
};

// === Order Details Form ===
const OrderDetailsForm = () => {
  const [order, setOrder] = useState({
    product: 'Laptop',
    quantity: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder(prevOrder => ({
      ...prevOrder,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Placed:', order);
    alert(`Ordered ${order.quantity} of ${order.product}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid green', padding: '20px', margin: '20px' }}>
      <h3>Order Details Form</h3>
      <label>
        Product:
        <select name="product" value={order.product} onChange={handleChange}>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="Monitor">Monitor</option>
        </select>
      </label><br/><br/>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={order.quantity}
          onChange={handleChange}
          min="1"
          required
        />
      </label><br/><br/>
      <button type="submit">Place Order</button>
    </form>
  );
};

// Main App component
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

**Run Instructions:**
In the `practical2` directory: `npm start`

-----

## 3\. Express Server and Routing

### Setup

1.  **Initialize Node/Express:**
    ```bash
    mkdir practical3_server
    cd practical3_server
    npm init -y
    npm install express cors dotenv
    ```
2.  **Create `.env` file:**
    ```
    PORT=5000
    ```
3.  **Add start script in `package.json`:**
    ```json
    "scripts": {
      "start": "node server.js"
    }
    ```

### 3\. a. Create a basic Express server that handles HTTP requests.

### 3\. b. Set up routes for ‘Hello World’ React app.

**File:** `practical3_server/server.js`

```javascript
// practical3_server/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows React to connect
app.use(express.json());

// 1. Basic HTTP request handler (GET)
app.get('/api/status', (req, res) => {
    res.json({ message: 'Server is running successfully!' });
});

// 2. Route for 'Hello World' (as a JSON response for a React client)
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World from Express! 🌍' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
```

**Run Instructions:**
In the `practical3_server` directory: `npm start`
Test the route in a browser: `http://localhost:5000/api/hello`

-----

## 4\. Basic RESTful API with Express (CRUD)

### Setup

1.  **Initialize Node/Express:**
    ```bash
    mkdir practical4_api
    cd practical4_api
    npm init -y
    npm install express cors
    ```
2.  **Add start script in `package.json`:**
    ```json
    "scripts": {
      "start": "node server.js"
    }
    ```

**File:** `practical4_api/server.js`

```javascript
// practical4_api/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To handle JSON body for POST/PUT requests

// In-memory data store for "Items"
let items = [
    { id: 1, name: 'Item A', value: 100 },
    { id: 2, name: 'Item B', value: 250 }
];
let nextId = 3;

// === CRUD Operations on /api/items ===

// 1. POST (Create)
app.post('/api/items', (req, res) => {
    const { name, value } = req.body;
    if (!name || value === undefined) {
        return res.status(400).json({ msg: 'Please provide name and value' });
    }
    const newItem = { id: nextId++, name, value };
    items.push(newItem);
    res.status(201).json(newItem); // 201 Created
});

// 2. GET (Read all)
app.get('/api/items', (req, res) => {
    res.json(items);
});

// 3. GET (Read one)
app.get('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) {
        return res.status(404).json({ msg: `Item with id ${id} not found` });
    }
    res.json(item);
});

// 4. PUT (Update)
app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ msg: `Item with id ${id} not found` });
    }

    const { name, value } = req.body;
    if (name) item.name = name;
    if (value !== undefined) item.value = value;

    res.json(item);
});

// 5. DELETE (Delete)
app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = items.length;
    items = items.filter(i => i.id !== id);

    if (items.length === initialLength) {
        return res.status(404).json({ msg: `Item with id ${id} not found` });
    }

    res.json({ msg: 'Item deleted' });
});

app.listen(PORT, () => console.log(`RESTful API server running on port ${PORT}`));
```

**Run Instructions:**
In the `practical4_api` directory: `npm start`
Use a tool like Postman or `curl` to test the endpoints.

-----

## 5\. React Fetching and POST Requests

### Setup

1.  **Initialize React App:**
    ```bash
    npx create-react-app practical5_client
    cd practical5_client
    npm install axios
    ```
2.  **Use the Express Server from Practical 4.** (Ensure it's running on port 5000).

### 5\. a. Implement a React component that fetches data.

### 5\. b. Set up a form in React that sends POST requests.

**File:** `practical5_client/src/App.js`

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/items';

// Component to display data (GET)
const ItemList = ({ refreshKey }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_URL);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchItems();
  }, [refreshKey]); // Re-fetch when refreshKey changes

  return (
    <div style={{ margin: '20px', padding: '15px', border: '1px solid gray' }}>
      <h3>Data from Express Server (GET)</h3>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              **{item.name}** | Value: ${item.value} (ID: {item.id})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Component to submit data (POST)
const ItemForm = ({ onNewItem }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request
      const response = await axios.post(API_URL, { name, value: parseFloat(value) });
      console.log('Item created:', response.data);
      alert(`Created item: ${response.data.name}`);
      
      // Clear form and notify parent to refresh list
      setName('');
      setValue('');
      onNewItem(); 
    } catch (error) {
      console.error('Error creating item:', error);
      alert('Failed to create item.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '15px', border: '1px solid red' }}>
      <h3>Create New Item (POST)</h3>
      <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} required />
      <button type="submit">Add Item</button>
    </form>
  );
};

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleNewItem = () => {
    setRefreshKey(prevKey => prevKey + 1); // Increment key to force ItemList re-fetch
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 5: React-Express Communication</h1>
      <ItemForm onNewItem={handleNewItem} />
      <ItemList refreshKey={refreshKey} />
    </div>
  );
}

export default App;
```

**Run Instructions:**

1.  Start the Express server from Practical 4 (if not running).
2.  In the `practical5_client` directory: `npm start`

-----

## 6\. MongoDB and Mongoose Integration

### Setup

1.  **Initialize Node/Express:**
    ```bash
    mkdir practical6_mongo_api
    cd practical6_mongo_api
    npm init -y
    npm install express mongoose cors dotenv
    ```
2.  **MongoDB:** Ensure MongoDB is running (e.g., local server or Atlas).
3.  **Create `.env` file:**
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/practical_mongo_db 
    ```
4.  **Add start script in `package.json`:**
    ```json
    "scripts": {
      "start": "node server.js"
    }
    ```

### 6\. a. Connect Express to MongoDB using Mongoose.

### 6\. b. Create a simple model and integrate it with earlier CRUD API.

**File:** `practical6_mongo_api/models/Note.js` (Create `models` directory)

```javascript
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Note', NoteSchema);
```

**File:** `practical6_mongo_api/server.js`

```javascript
// practical6_mongo_api/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Note = require('./models/Note'); // Import the model

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
connectDB(); // Execute connection

// Middleware
app.use(cors());
app.use(express.json());

// === CRUD Operations on /api/notes ===

// 1. POST (Create)
app.post('/api/notes', async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

// 2. GET (Read all)
app.get('/api/notes', async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
});

// 3. PUT (Update)
app.put('/api/notes/:id', async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!note) return res.status(404).json({ msg: 'Note not found' });
        res.json(note);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

// 4. DELETE (Delete)
app.delete('/api/notes/:id', async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) return res.status(404).json({ msg: 'Note not found' });
        res.json({ msg: 'Note removed' });
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

**Run Instructions:**
In the `practical6_mongo_api` directory: `npm start`

-----

## 7\. JWT Authentication

### Setup

1.  **Initialize Node/Express:**
    ```bash
    mkdir practical7_auth_api
    cd practical7_auth_api
    npm init -y
    npm install express mongoose jsonwebtoken bcryptjs cors dotenv
    ```
2.  **Create `.env` file:**
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/practical_auth_db
    JWT_SECRET=mysecuretokensecret
    JWT_EXPIRE=30d
    ```
3.  **Client Setup:**
    ```bash
    cd ..
    npx create-react-app practical7_client
    cd practical7_client
    npm install axios
    ```

### 7\. a. Implement a simple authentication system using JWT in Express.

**File:** `practical7_auth_api/models/User.js`

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
UserSchema.methods.matchPassword = function(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

// Generate JWT token
UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

module.exports = mongoose.model('User', UserSchema);
```

**File:** `practical7_auth_api/server.js` (Simplified setup for Auth routes)

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/User'); 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB (Simplified)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to send JWT response
const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ success: true, token, username: user.username });
};

// @route POST /api/auth/register
app.post('/api/auth/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password });
        sendTokenResponse(user, 201, res);
    } catch (err) {
        res.status(400).json({ success: false, msg: 'Registration failed', error: err.message });
    }
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

app.listen(PORT, () => console.log(`Auth server running on port ${PORT}`));
```

### 7\. b. Create a login and register form in React.

**File:** `practical7_client/src/App.js`

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const AuthForm = ({ type }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const isRegister = type === 'register';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const endpoint = `${API_URL}/${type}`;
    const dataToSend = isRegister ? formData : { email: formData.email, password: formData.password };
    
    try {
      const response = await axios.post(endpoint, dataToSend);
      localStorage.setItem('token', response.data.token); // Store token
      localStorage.setItem('username', response.data.username);
      setMessage(`${type.toUpperCase()} SUCCESS! Welcome, ${response.data.username}. Token stored.`);
      // Clear password field
      setFormData({...formData, password: ''}); 
    } catch (error) {
      console.error('Auth error:', error.response?.data?.msg || error.message);
      setMessage(`Error: ${error.response?.data?.msg || 'An error occurred.'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: `2px solid ${isRegister ? 'purple' : 'teal'}`, padding: '20px', margin: '20px' }}>
      <h3>{isRegister ? 'Register' : 'Login'} Form</h3>
      {isRegister && (
        <label>Username: <input type="text" name="username" value={formData.username} onChange={handleChange} required /><br/></label>
      )}
      <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br/></label>
      <label>Password: <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br/></label>
      <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
      {message && <p style={{ color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}
      <p>Current Token: **{localStorage.getItem('token') ? 'Yes' : 'No'}**</p>
    </form>
  );
};

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 7: JWT Authentication Forms</h1>
      <AuthForm type="register" />
      <AuthForm type="login" />
      <button onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          alert('Logged out (Token removed)');
          window.location.reload(); // Simple refresh to show state change
      }}>Logout</button>
    </div>
  );
}

export default App;
```

**Run Instructions:**

1.  Start the Express server in `practical7_auth_api`: `npm start`
2.  In the `practical7_client` directory: `npm start`

-----

## 8\. React Routing and Context API

### Setup

1.  **Initialize React App:**
    ```bash
    npx create-react-app practical8_context_router
    cd practical8_context_router
    npm install react-router-dom
    ```

### 8\. a. Set up routing in your React app.

### 8\. b. Use the Context API to manage global state.

**File:** `practical8_context_router/src/context/AuthContext.js` (Create `context` directory)

```jsx
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user_id') || null);

  const login = (userId) => {
    localStorage.setItem('user_id', userId);
    setUser(userId);
  };

  const logout = () => {
    localStorage.removeItem('user_id');
    setUser(null);
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

**File:** `practical8_context_router/src/components/ProtectedRoute.js` (Create `components` directory)

```jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
```

**File:** `practical8_context_router/src/App.js` (Main file with Router and Context)

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// === Placeholder Pages ===
const Home = () => <h1>Home Page 🏡</h1>;
const Login = () => {
  const { login } = useAuth();
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => login('user123')}>Log In (via Context)</button>
    </div>
  );
};
const Profile = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1>Profile Page 👤</h1>
      <p>Welcome, **{user}**!</p>
      <button onClick={logout}>Log Out (via Context)</button>
    </div>
  );
};

// === Header/Navigation ===
const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
        <nav style={{ padding: '10px', background: '#333' }}>
            <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
            {!isAuthenticated && <Link to="/login" style={{ color: 'white', margin: '0 10px' }}>Login</Link>}
            {isAuthenticated && <Link to="/profile" style={{ color: 'white', margin: '0 10px' }}>Profile</Link>}
            {isAuthenticated && <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>}
        </nav>
    );
};

// === Main App Component ===
function AppContent() {
    return (
        <div style={{ textAlign: 'center' }}>
            <Header />
            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    {/* Protected Route */}
                    <Route 
                      path="/profile" 
                      element={
                        <ProtectedRoute>
                          <Profile />
                        </ProtectedRoute>
                      } 
                    />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
        </div>
    );
}

// Wrap AppContent with Router and Context Provider
function App() {
    return (
        <Router>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </Router>
    );
}

export default App;
```

**Run Instructions:**
In the `practical8_context_router` directory: `npm start`

-----

## 9\. Full Stack Order Placement System

This practical requires combining the setup from **Practical 6 (MongoDB/Mongoose)**, **Practical 7 (JWT Auth)**, and **Practical 8 (React Router/Context)**. I will provide a high-level component structure and the missing API routes for Products and Orders.

### Server Setup (Combines 6 & 7)

  * **Use the Express server from Practical 7** (`practical7_auth_api`), ensuring DB connection and auth routes are working.
  * **Install `Mongoose`** (Done in P7).

**Missing Models:**

**File:** `practical7_auth_api/models/Product.js`

```javascript
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
});
module.exports = mongoose.model('Product', ProductSchema);
```

**File:** `practical7_auth_api/models/Order.js`

```javascript
const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  products: [{
    product: { type: mongoose.Schema.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Delivered'], default: 'Pending' },
  orderDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);
```

**Missing API Route:**

**File:** `practical7_auth_api/routes/orderRoutes.js` (Create `routes` directory)

```javascript
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');
const { protect } = require('../middleware/auth'); // Assume protect middleware exists

// @route POST /api/orders
// @desc Place a new order
router.post('/', protect, async (req, res) => {
    const { products, totalAmount } = req.body;
    try {
        // Simple check (in a real app, you'd calculate total server-side)
        if (products.length === 0) {
            return res.status(400).json({ msg: 'Cart is empty' });
        }
        
        const order = await Order.create({ 
            user: req.user._id, // User ID from JWT payload
            products,
            totalAmount
        });
        res.status(201).json({ success: true, data: order });
    } catch (err) {
        res.status(500).json({ msg: 'Order placement failed', error: err.message });
    }
});

// @route GET /api/products (Public route for selection)
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Seed data route (run once manually to add products)
// router.post('/seed', async (req, res) => {
//     await Product.deleteMany({});
//     await Product.create([{ name: 'Laptop', price: 1200 }, { name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 75 }]);
//     res.send('Products seeded');
// });

module.exports = router;
```

**Update `practical7_auth_api/server.js`** to include routes:

```javascript
// ... existing imports ...
// const authRoutes = require('./routes/auth'); // Assume auth is imported/defined
const orderRoutes = require('./routes/orderRoutes'); 

// ... existing setup ...
// Routes
app.use('/api/auth', require('./routes/auth')); // Assuming P7 auth routes
app.use('/api/orders', orderRoutes); 
app.use('/api', orderRoutes); // Using /api for products list (GET /api/products)
// ...
```

### Client Structure (Combines 7 & 8)

**Use the React project from Practical 8** (`practical8_context_router`) and assume the Auth Context and Routing are set up.

#### 9\. c. Product Selection & 9. d. Order Placement

**File:** `practical8_context_router/src/pages/OrderPage.js` (Create this file)

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const API_URL = 'http://localhost:5000/api';

const OrderPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({}); // { productId: quantity }
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();

  useEffect(() => {
    // Fetch available products
    axios.get(`${API_URL}/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error('Product fetch failed'));
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
      const product = products.find(p => p._id === id);
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };
  
  const handlePlaceOrder = async () => {
    const totalAmount = calculateTotal();
    if (Object.keys(cart).length === 0) return alert('Your cart is empty!');

    const orderProducts = Object.entries(cart).map(([productId, quantity]) => ({
      product: productId,
      quantity,
    }));
    
    try {
      setLoading(true);
      await axios.post(`${API_URL}/orders`, { products: orderProducts, totalAmount }, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      alert('✅ Order placed successfully!');
      setCart({}); // Clear cart
    } catch (error) {
      console.error('Order error:', error.response?.data?.msg || error.message);
      alert(`❌ Order failed: ${error.response?.data?.msg || 'Authentication required.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'left', padding: '20px' }}>
      <h2>Order Placement System</h2>
      
      {/* Product Selection */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
        <h3>1. Product Selection</h3>
        {products.map(p => (
          <div key={p._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 0' }}>
            <span>**{p.name}** - ${p.price.toFixed(2)}</span>
            <div>
              <button onClick={() => handleUpdateCart(p._id, -1)} disabled={!cart[p._id]}>-</button>
              <span style={{ margin: '0 10px' }}>{cart[p._id] || 0}</span>
              <button onClick={() => handleUpdateCart(p._id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Order Placement */}
      <div style={{ border: '1px solid green', padding: '15px' }}>
        <h3>2. Order Placement</h3>
        <h4>Cart Summary:</h4>
        <p>Total Items: **{Object.keys(cart).length}**</p>
        <p>Total Amount: **${calculateTotal().toFixed(2)}**</p>
        
        <button 
          onClick={handlePlaceOrder} 
          disabled={loading || calculateTotal() === 0}
          style={{ padding: '10px 20px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
```

**Update `practical8_context_router/src/App.js`** to add the `/order` route (requires a ProtectedRoute):

```jsx
// ... existing imports ...
import OrderPage from './pages/OrderPage'; // New import

// ... inside AppContent component's <Routes> ...
<Route path="/order" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
// ...
```

**Final Steps for Practical 9:**

1.  Ensure the **Express server (P7 version)** is running and connected to MongoDB.
2.  (Optional but Recommended) Manually run the product seed endpoint to populate the database.
3.  In the **React client (P8 version)**: `npm start`.
4.  Navigate to `/login`, register, and log in.
5.  Navigate to `/order` to select products and place an order.
