//DB

Absolutely, Gaurav! Let’s go **step by step** with **MongoDB CRUD commands** for a local MongoDB database (Compass or shell). I’ll give **detailed commands, syntax, and examples**.

---

# 🗄️ MongoDB CRUD Operations (Localhost / Compass / Shell)

Assuming MongoDB is running locally on:

```
mongodb://127.0.0.1:27017
```

---

## 1️⃣ Connect to MongoDB

### Using Mongo Shell:

```bash
mongo
```

or if using a specific database:

```bash
mongo --host 127.0.0.1 --port 27017
```

### Switch to database (create if doesn’t exist):

```javascript
use orderApp
```

> MongoDB creates the database automatically when you insert data.

---

## 2️⃣ CREATE — Insert Documents

### Syntax

```javascript
db.collectionName.insertOne({field1: value1, field2: value2, ...})
db.collectionName.insertMany([{...}, {...}, ...])
```

### Example

```javascript
// Insert a single user
db.users.insertOne({
  name: "Gaurav",
  email: "gaurav@example.com",
  password: "hashed_password"
})

// Insert multiple orders
db.orders.insertMany([
  { product: "Laptop", quantity: 1, price: 50000 },
  { product: "Mouse", quantity: 2, price: 500 }
])
```

---

## 3️⃣ READ — Query Documents

### Syntax

```javascript
db.collectionName.find(query, projection)
db.collectionName.findOne(query)
```

### Examples

```javascript
// Get all users
db.users.find()

// Get a specific user by email
db.users.findOne({ email: "gaurav@example.com" })

// Get orders with quantity > 1
db.orders.find({ quantity: { $gt: 1 } })

// Only show product and price fields
db.orders.find({}, { product: 1, price: 1, _id: 0 })
```

---

## 4️⃣ UPDATE — Modify Documents

### Syntax

```javascript
db.collectionName.updateOne(filter, update, options)
db.collectionName.updateMany(filter, update, options)
```

* `$set` → update fields
* `$inc` → increment numeric fields
* `$unset` → remove a field

### Examples

```javascript
// Update a single user's name
db.users.updateOne(
  { email: "gaurav@example.com" },
  { $set: { name: "Gaurav K" } }
)

// Increment order quantity by 1
db.orders.updateOne(
  { product: "Mouse" },
  { $inc: { quantity: 1 } }
)

// Update multiple orders to add a field
db.orders.updateMany(
  {},
  { $set: { status: "pending" } }
)
```

---

## 5️⃣ DELETE — Remove Documents

### Syntax

```javascript
db.collectionName.deleteOne(filter)
db.collectionName.deleteMany(filter)
```

### Examples

```javascript
// Delete a single order
db.orders.deleteOne({ product: "Mouse" })

// Delete all users with a certain condition
db.users.deleteMany({ email: /@example.com$/ })
```

---

## 6️⃣ ADVANCED — Other Useful Commands

```javascript
// Count documents
db.orders.countDocuments({ quantity: { $gt: 1 } })

// Sort results
db.orders.find().sort({ price: -1 }) // descending

// Limit results
db.orders.find().limit(3)

// Drop a collection
db.orders.drop()

// Drop the database
db.dropDatabase()
```

---

### ✅ Tips

1. Always check your database:

```javascript
show dbs
```

2. Check collections in current DB:

```javascript
show collections
```

3. Switch between databases:

```javascript
use orderApp
```

4. Use MongoDB Compass for **GUI-based CRUD** — same operations but click-and-edit instead of comman