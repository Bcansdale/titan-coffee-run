const express = require('express');
const router = express.Router();

const OrderManager = require('../OrderManager');

const ProductManager = require('../productManager');

router.get('/products', (req, res) => {
    const products = ProductManager.getProducts();
    res.status(200).json(products);
});

router.post('/orders', (req, res) => {
    const orderData = req.body;
    const newOrder = OrderManager.addOrder(orderData);
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
});

router.get('/orders', (req, res) => {
    const orders = OrderManager.getOrders();
    res.status(200).json(orders);
});

module.exports = router;