class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const products = [
    new Product('Espresso', 2.5),
    new Product('Cappuccino', 3.0),
    new Product('Latte', 4.0)
];

function getProducts() {
    return products;
}

module.exports = {getProducts};