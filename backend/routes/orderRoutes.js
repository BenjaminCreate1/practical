const express = require('express');
const jwt = require('jsonwebtoken');
const Order = require('../models/Order');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

function auth(req, res, next) {
  const header = req.headers.authorization;
  const token = header && header.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload.id;
    next();
  } catch (e) {
    return res.status(401).json({ msg: 'Invalid token' });
  }
}

// Create order
router.post('/', auth, async (req, res) => {
  try {
    const { productName, quantity, price } = req.body;
    const order = await Order.create({ user: req.user, productName, quantity, price });
    res.status(201).json(order);
  } catch (e) { console.error(e); res.status(500).json({ msg: 'Server error' }); }
});

// Read orders for user
router.get('/', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user }).sort('-createdAt');
  res.json(orders);
});

// Update order
router.put('/:id', auth, async (req, res) => {
  const updated = await Order.findOneAndUpdate({ _id: req.params.id, user: req.user }, req.body, { new: true });
  if (!updated) return res.status(404).json({ msg: 'Not found' });
  res.json(updated);
});

// Delete order
router.delete('/:id', auth, async (req, res) => {
  const deleted = await Order.findOneAndDelete({ _id: req.params.id, user: req.user });
  if (!deleted) return res.status(404).json({ msg: 'Not found' });
  res.json({ msg: 'Deleted' });
});

module.exports = router;
