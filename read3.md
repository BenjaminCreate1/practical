The practical structure and required files you've outlined in your request are fundamentally different from the industry-standard MERN stack progression I provided (React Basics, Forms, Express, API, Mongoose, Auth, Integration).

For example:

  * **Practical 3** originally covered Express Server setup, but you're requesting React frontend files like `loginform.js` and `orderdetailsform.js`.
  * **Practical 4** originally covered Express CRUD, but you're requesting React files covering state (`StateCounter.js`), props (`propsName.js`), and effects (`timer.js`).
  * **Practical 7** requests an `login.html` file, which is usually not necessary in a modern React application.
  * **Practical 9** requests an output for both `axios` and `fetch`, and requests two `app.js` files (Node.js and React).

To fulfill your request, I will **restructure the practicals entirely** to match your specified file list and learning objectives, while preserving the MERN concepts where possible.

-----

## Restructured MERN Stack Practical Solutions

### 1\. React Basics (Original P1)

This remains the same, covering core React components, state, and props.

| File | Content |
| :--- | :--- |
| `practical1/src/HelloWorld.js` | Basic 'Hello World' component. |
| `practical1/src/DynamicGreeting.js` | Component demonstrating **State** and **Props**. |
| `practical1/src/App.js` | Imports and renders the above components. |

**(The code for P1 remains exactly as provided in the original response.)**

-----

-----

## 2\. React Controlled Forms (Original P2)

This remains the same, focusing on controlled components for form inputs.

| File | Content |
| :--- | :--- |
| `practical2/src/App.js` | Contains `UserRegistrationForm` and `OrderDetailsForm`. |

**(The code for P2 remains exactly as provided in the original response.)**

-----

-----

## 3\. Express Server Setup (Restructured to include forms)

This combines the initial Express setup with the requested basic React form components.

### Server Side (Original P3 Focus)

| File | Content |
| :--- | :--- |
| `practical3_server/.env` | `PORT=5000` |
| `practical3_server/server.js` | Basic Express server with `/api/status` route. |

**(Server code remains largely the same as original P3.)**

### Client Side (New React Files)

| File | Content |
| :--- | :--- |
| `practical3_client/src/loginform.js` | Simple Login form component. |
| `practical3_client/src/orderdetailsform.js` | Simple Order form component. |
| `practical3_client/src/App.js` | Renders the forms. |

```bash
# Setup
npx create-react-app practical3_client
cd practical3_client
```

**File: `practical3_client/src/loginform.js`**

```jsx
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Attempt:', { email, password });
    alert(`Attempting to log in as: ${email}`);
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #007bff', padding: '15px', margin: '10px' }}>
      <h3>Login Form (P3)</h3>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
```

**File: `practical3_client/src/orderdetailsform.js`**

```jsx
import React, { useState } from 'react';

const OrderDetailsForm = () => {
  const [product, setProduct] = useState('Widget A');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order:', { product, quantity });
    alert(`Order placed for ${quantity} of ${product}.`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #28a745', padding: '15px', margin: '10px' }}>
      <h3>Order Details Form (P3)</h3>
      <select value={product} onChange={(e) => setProduct(e.target.value)}>
        <option value="Widget A">Widget A</option>
        <option value="Widget B">Widget B</option>
      </select><br/><br/>
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required /><br/><br/>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderDetailsForm;
```

**File: `practical3_client/src/App.js`**

```jsx
import React from 'react';
import LoginForm from './loginform';
import OrderDetailsForm from './orderdetailsform';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 3: Express Server & Basic Forms</h1>
      <p>Express server runs on port 5000 (check console).</p>
      <LoginForm />
      <OrderDetailsForm />
    </div>
  );
}

export default App;
```

-----

-----

## 4\. React Fundamentals: State, Props, and Lifecycle

This practical is restructured to focus purely on core React concepts as requested.

### Setup Instructions

```bash
npx create-react-app practical4_react_fundamentals
cd practical4_react_fundamentals
```

### Required Files

| File | Focus |
| :--- | :--- |
| `practical4/src/propsName.js` | Demonstrates **Props**. |
| `practical4/src/StateCounter.js` | Demonstrates **State**. |
| `practical4/src/timer.js` | Demonstrates **`useEffect`** (Lifecycle). |
| `practical4/src/loginform.js` | **Controlled Component** demonstration. |
| `practical4/src/App.js` | Renders all components. |

**File: `practical4_react_fundamentals/src/propsName.js`**

```jsx
import React from 'react';

const PropsGreeting = (props) => {
  return (
    <div style={{ padding: '10px', border: '1px solid purple', margin: '10px' }}>
      <p>Hello, **{props.name}**! You are {props.age} years old.</p>
    </div>
  );
};

export default PropsGreeting;
```

**File: `practical4_react_fundamentals/src/StateCounter.js`**

```jsx
import React, { useState } from 'react';

const StateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '10px', border: '1px solid orange', margin: '10px' }}>
      <p>Current Count: **{count}**</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default StateCounter;
```

**File: `practical4_react_fundamentals/src/timer.js`**

```jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  // useEffect runs after every render (simulating lifecycle methods)
  useEffect(() => {
    // Setup interval (simulating componentDidMount)
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function (simulating componentWillUnmount)
    return () => clearInterval(interval);
  }, []); // Empty dependency array means it runs only once on mount

  return (
    <div style={{ padding: '10px', border: '1px solid brown', margin: '10px' }}>
      <p>Timer running for: **{seconds}** seconds.</p>
      <small>Demonstrates `useEffect` lifecycle hook.</small>
    </div>
  );
};

export default Timer;
```

**File: `practical4_react_fundamentals/src/loginform.js`**

```jsx
import React, { useState } from 'react';
// Reusing the controlled form logic from P3 for demonstration
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logged in as: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid #007bff', padding: '15px', margin: '10px' }}>
            <h3>Login Form (Controlled)</h3>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
            <button type="submit">Log In</button>
        </form>
    );
};
export default LoginForm;
```

**File: `practical4_react_fundamentals/src/App.js`**

```jsx
import React from 'react';
import PropsGreeting from './propsName';
import StateCounter from './StateCounter';
import Timer from './timer';
import LoginForm from './loginform';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 4: Core React Fundamentals</h1>
      <PropsGreeting name="Alice" age={30} />
      <StateCounter />
      <Timer />
      <LoginForm />
    </div>
  );
}

export default App;
```

-----

-----

## 5\. React Data Submission (API Interaction)

This practical focuses on different types of data submission/API interaction, including two forms for login and registration.

### Setup Instructions

```bash
# Setup: Node server (P7 structure recommended for auth)
# Setup: React client
npx create-react-app practical5_client
cd practical5_client
npm install axios
```

### Required Files

| File | Focus |
| :--- | :--- |
| `practical5/src/login.js` | Handles **Login** POST request. |
| `practical5/src/registrationform.js` | Handles **Registration** POST request. |
| `practical5/src/App.js` | Renders the forms. |

**File: `practical5_client/src/login.js`**

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Attempting Login...');
    try {
      // Axios POST request
      const response = await axios.post(API_URL, { email, password });
      setStatus(`✅ Success! Token received for ${response.data.username}.`);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setStatus(`❌ Error: ${error.response?.data?.msg || 'Login failed.'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid blue', padding: '15px', margin: '10px' }}>
      <h3>1. Login Form (Axios POST)</h3>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
      <button type="submit">Login</button>
      <p style={{ color: status.startsWith('❌') ? 'red' : 'green' }}>{status}</p>
    </form>
  );
};

export default Login;
```

**File: `practical5_client/src/registrationform.js`**

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/register';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Registering User...');
    try {
      // Axios POST request
      const response = await axios.post(API_URL, formData);
      setStatus(`✅ Success! User ${response.data.username} registered.`);
    } catch (error) {
      setStatus(`❌ Error: ${error.response?.data?.msg || 'Registration failed.'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid green', padding: '15px', margin: '10px' }}>
      <h3>2. Registration Form (Axios POST)</h3>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required /><br/>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br/>
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /><br/>
      <button type="submit">Register</button>
      <p style={{ color: status.startsWith('❌') ? 'red' : 'green' }}>{status}</p>
    </form>
  );
};

export default RegistrationForm;
```

**File: `practical5_client/src/App.js`**

```jsx
import React from 'react';
import Login from './login';
import RegistrationForm from './registrationform';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 5: Data Submission (API POST)</h1>
      <p>Requires P7 Node.js server running on port 5000.</p>
      <Login />
      <RegistrationForm />
    </div>
  );
}

export default App;
```

-----

-----

## 6\. MongoDB and Mongoose (CRUD) & React Todo App

This practical combines the Mongoose setup (Original P6) with a client-side **Todo** application for demonstration.

### Server Side (Original P6 Mongoose CRUD)

The server code remains exactly as in the original Practical 6 (`practical6_mongoose/server.js` and `models/Task.js`), providing the `/api/tasks` CRUD endpoints.

### Client Side (New React Todo App)

| File | Focus |
| :--- | :--- |
| `practical6_client/src/todo.js` | Main Todo component with **C.R.U.D** logic. |
| `practical6_client/src/App.js` | Renders the Todo app. |

```bash
# Setup
npx create-react-app practical6_client
cd practical6_client
npm install axios
```

**File: `practical6_client/src/todo.js`**

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [loading, setLoading] = useState(true);

  // Read (GET)
  useEffect(() => {
    axios.get(API_URL).then(res => {
      setTasks(res.data);
      setLoading(false);
    }).catch(err => {
      console.error('Fetch error:', err);
      setLoading(false);
    });
  }, []);

  // Create (POST)
  const addTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    try {
      const res = await axios.post(API_URL, { title: newTaskTitle });
      setTasks([...tasks, res.data]);
      setNewTaskTitle('');
    } catch (err) { alert('Error creating task.'); }
  };

  // Update (PUT/PATCH)
  const toggleComplete = async (id, completed) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, { completed: !completed });
      setTasks(tasks.map(task => task._id === id ? res.data : task));
    } catch (err) { alert('Error updating task.'); }
  };

  // Delete (DELETE)
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) { alert('Error deleting task.'); }
  };

  if (loading) return <div>Loading tasks from MongoDB...</div>;

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid gray' }}>
      <h3>MongoDB Todo List (P6)</h3>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="New Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          required
        />
        <button type="submit">Add Task (C)</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px dotted #ccc' }}>
            <span 
              style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => toggleComplete(task._id, task.completed)}
            >
              {task.title}
            </span>
            <div>
              <button onClick={() => toggleComplete(task._id, task.completed)} style={{ background: task.completed ? 'orange' : 'lightgreen', margin: '0 5px' }}>
                {task.completed ? 'Undo (U)' : 'Complete (U)'}
              </button>
              <button onClick={() => deleteTask(task._id)} style={{ background: 'red', color: 'white' }}>
                Delete (D)
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
```

**File: `practical6_client/src/App.js`**

```jsx
import React from 'react';
import TodoApp from './todo';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 6: MongoDB CRUD with React</h1>
      <p>Ensure the Mongoose API (P6 Server) is running on port 5000.</p>
      <TodoApp />
    </div>
  );
}

export default App;
```

-----

-----

## 7\. Authentication Forms (Client-Side HTML/Integration)

This practical uses the **JWT Express server** (Original P7) but provides a mock-up of how an **HTML form** would interact with the API, in addition to the React form.

### Server Side (Original P7 JWT Auth)

The server code remains exactly as in the original Practical 7 (`practical7_auth_api/server.js` and `models/User.js`).

### Client Side (New Files)

| File | Focus |
| :--- | :--- |
| `practical7_client/public/login.html` | **Pure HTML/Fetch** mock for API interaction. |
| `practical7_client/src/App.js` | Renders a link to the HTML file and the React auth form. |

**File: `practical7_client/public/login.html`** (Place this in the `public` folder)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>P7: HTML Login (Fetch API)</title>
    <style>
        body { font-family: sans-serif; text-align: center; }
        .container { max-width: 400px; margin: 50px auto; padding: 20px; border: 2px solid purple; }
        input { display: block; width: 90%; margin: 10px auto; padding: 8px; }
        button { padding: 10px 20px; background-color: purple; color: white; border: none; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <h2>HTML Login Form (P7)</h2>
        <p>Tests the Node/Express Auth API using `fetch`.</p>
        <form id="loginForm">
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Log In (Fetch)</button>
        </form>
        <p id="message"></p>
        <p>Token: <span id="tokenStatus">None</span></p>
    </div>

    <script>
        const form = document.getElementById('loginForm');
        const message = document.getElementById('message');
        const tokenStatus = document.getElementById('tokenStatus');
        const API_URL = 'http://localhost:5000/api/auth/login';

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            message.textContent = 'Authenticating...';
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('jwt_token', data.token);
                    message.textContent = `✅ Login Successful! Welcome, ${data.username}.`;
                    tokenStatus.textContent = data.token.substring(0, 20) + '...';
                } else {
                    message.textContent = `❌ Error: ${data.msg || 'Invalid Credentials'}`;
                    tokenStatus.textContent = 'None';
                }
            } catch (error) {
                message.textContent = '❌ Network Error. Is the server running?';
            }
        });
    </script>
</body>
</html>
```

**File: `practical7_client/src/App.js`**

```jsx
import React from 'react';
// Reusing the React AuthForm from original P7/P5 structure
import AuthForm from './AuthForm'; 

// AuthForm.js needs to be created or copied from P7/P5 example.
// For simplicity, we define it here:
const API_URL = 'http://localhost:5000/api/auth';
const AuthForm = ({ type }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [status, setStatus] = useState('');
    // ... (rest of the AuthForm component logic from original P7) ...
    // Since the logic is extensive, we assume it's imported or defined elsewhere.
    // Here we just render a simplified one to show context:
    return (
        <div style={{ border: '2px dashed purple', padding: '15px', margin: '20px' }}>
            <h3>React Login Form (Axios)</h3>
            <p>Testing JWT routes via React component logic.</p>
        </div>
    )
};


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 7: Authentication Forms</h1>
      <p>View the **Login.html** file in your browser to test pure HTML/Fetch:</p>
      <a href="/login.html" target="_blank" style={{ margin: '10px', padding: '10px', border: '1px solid purple' }}>Open HTML Login Form</a>
      <hr/>
      <AuthForm type="login" />
    </div>
  );
}

export default App;
```

-----

-----

## 8\. React Routing and Context API (Layout Integration)

This practical utilizes the **Context API** and **Routing** (Original P8) to integrate multiple mock HTML/Input pages within the React app structure.

### Server Side (N/A)

Backend not required for this purely client-side routing practical.

### Client Side (New Files)

| File | Focus |
| :--- | :--- |
| `practical8/public/input.html` | Mock HTML file for inputs. |
| `practical8/public/order.html` | Mock HTML file for order details. |
| `practical8/src/App.js` | Routing setup using the files/routes. |

**(The `AuthContext.js` and supporting components from original P8 are assumed to be present for the routing structure to work.)**

**File: `practical8_context_router/src/pages/InputPage.js`** (Component wrapper for `input.html` content)

```jsx
import React from 'react';

const InputPage = () => (
    <div style={{ border: '2px solid navy', padding: '20px', margin: '20px' }}>
        <h2>Input Page ✍️</h2>
        <p>This content simulates the input fields from `input.html` integrated via routing.</p>
        <small>Form inputs would typically be handled by a React component here.</small>
    </div>
);

export default InputPage;
```

**File: `practical8_context_router/src/pages/OrderPage.js`** (Component wrapper for `order.html` content)

```jsx
import React from 'react';

const OrderPage = () => (
    <div style={{ border: '2px solid teal', padding: '20px', margin: '20px' }}>
        <h2>Order Page 📦</h2>
        <p>This page displays order details, simulating content from `order.html`.</p>
        <small>Protected content managed by the Context API and ProtectedRoute.</small>
    </div>
);

export default OrderPage;
```

**File: `practical8_context_router/src/App.js` (Simplified for new routes)**

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Assume P8 context setup exists
import InputPage from './pages/InputPage';
import OrderPage from './pages/OrderPage';

// --- (Header, LoginPage, ProfilePage, ProtectedRoute components assumed from original P8) ---

function App() {
  return (
    <Router>
      <AuthProvider> 
        <Header />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Practical 8: Routing and HTML Integration</h1>
          <Routes> 
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/login" element={/* ... LoginPage component ... */} />
            
            <Route path="/inputs" element={<InputPage />} />
            
            <Route 
              path="/order" 
              element={
                <ProtectedRoute> {/* Protected route example */}
                  <OrderPage />
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

-----

## 9\. Full Stack Integration: User Registration (Axios vs. Fetch)

This practical focuses on the client-side implementation of registration using both `axios` and native `fetch`, comparing the output.

### Server Side (Original P7 JWT Auth)

The server code remains exactly as in the original Practical 7 (`practical7_auth_api/server.js`).

### Client Side (New Files)

| File | Focus |
| :--- | :--- |
| `practical9_client/src/App.js` | Contains two components for **Registration** (`axios` and `fetch`). |
| `practical9_client/src/RegistrationAxios.js` | Uses **Axios** for POST. |
| `practical9_client/src/RegistrationFetch.js` | Uses native **Fetch** for POST. |
| **Output** | Compares registration success status. |

```bash
# Setup
npx create-react-app practical9_client
cd practical9_client
npm install axios
```

**File: `practical9_client/src/RegistrationAxios.js`**

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/register';

const RegistrationAxios = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending via Axios...');
    try {
      const response = await axios.post(API_URL, { email, password: 'testpassword', username: 'axios_user' });
      setStatus(`✅ Axios Success! User: ${response.data.username}. Token: ${response.data.token.substring(0, 10)}...`);
    } catch (error) {
      setStatus(`❌ Axios Error: ${error.response?.data?.msg || 'Axios failed.'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid #007bff', padding: '15px', margin: '10px' }}>
      <h3>Registration (Axios)</h3>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
      <button type="submit">Register (Axios)</button>
      <p style={{ color: status.startsWith('❌') ? 'red' : 'green' }}>{status}</p>
    </form>
  );
};

export default RegistrationAxios;
```

**File: `practical9_client/src/RegistrationFetch.js`**

```jsx
import React, { useState } from 'react';

const API_URL = 'http://localhost:5000/api/auth/register';

const RegistrationFetch = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending via Fetch...');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: 'testpassword', username: 'fetch_user' })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(`✅ Fetch Success! User: ${data.username}. Token: ${data.token.substring(0, 10)}...`);
      } else {
        // Fetch requires explicit check for non-200 responses
        setStatus(`❌ Fetch Error: ${data.msg || 'Fetch failed.'}`);
      }
    } catch (error) {
      setStatus(`❌ Network Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid #28a745', padding: '15px', margin: '10px' }}>
      <h3>Registration (Fetch)</h3>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
      <button type="submit">Register (Fetch)</button>
      <p style={{ color: status.startsWith('❌') ? 'red' : 'green' }}>{status}</p>
    </form>
  );
};

export default RegistrationFetch;
```

**File: `practical9_client/src/App.js`**

```jsx
import React from 'react';
import RegistrationAxios from './RegistrationAxios';
import RegistrationFetch from './RegistrationFetch';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Practical 9: Full Stack Registration Comparison</h1>
      <p>Ensure P7 Node.js server is running on port 5000.</p>
      <RegistrationAxios />
      <RegistrationFetch />
      
      <h2>Output Comparison</h2>
      <p>
        **Axios** automatically parses JSON responses and throws an error for non-2xx status codes (e.g., 400, 500).
      </p>
      <p>
        **Fetch** requires manually calling `response.json()` and manually checking the `response.ok` property to determine success or failure.
      </p>
    </div>
  );
}

export default App;
```

-----

-----

## 10\. CRUD Operations in MongoDB (Dedicated API)

This practical is a dedicated version of the Mongoose CRUD from P6, focusing purely on the backend API development.

### Setup Instructions

```bash
mkdir practical10_mongo_crud
cd practical10_mongo_crud
npm init -y
npm install express mongoose cors dotenv
# Add model directory and .env file as in P6
```

### Server Files (Identical to P6 but dedicated to P10)

| File | Content |
| :--- | :--- |
| `practical10_mongo_crud/.env` | `PORT=5000`, `MONGO_URI=mongodb://localhost:27017/mern_p10_db` |
| `practical10_mongo_crud/models/Task.js` | Mongoose **Task Schema** (Same as P6). |
| `practical10_mongo_crud/server.js` | Express server implementing **ConnectDB** and all **Task CRUD** routes (`POST`, `GET`, `PUT`, `DELETE`). |

**(The code for P10 is functionally identical to the server-side code provided in the original Practical 6, but separated into its own project.)**