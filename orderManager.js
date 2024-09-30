class Order {
    constructor(id, product, size, quantity, date) {
        this.id = id;
        this.product = product;
        this.size = size;
        this.quantity = quantity;
        this.date = date || new Date();
    }
}

const orders = [];
let orderId = 1;

function getOrders() {
    return orders;
}

function addOrder(orderData) {
    const { product, size, quantity } = orderData;
    const newOrder = new Order(orderId++, product, size, quantity);
    orders.push(newOrder);
    return newOrder;
}

module.exports = { getOrders, addOrder };

// commit