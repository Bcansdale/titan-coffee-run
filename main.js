const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

const orderRoutes = require('./routes/orders');

app.use('/', orderRoutes);

// Listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// // Create the server
// const server = http.createServer((req, res) => {
//     // Check if the URL is "/index.html" and the method is GET
//     if (req.url === "/index.html" && req.method === "GET") {
//         // Respond with a welcome message and success status
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(`Welcome, to Titan Coffee Run: SUCCESS 200`);
//     }   // Handle the orders.html route
//     else if (req.url === "/orders.html" && req.method === "GET") {
//         const orders = getOrders();
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(orders));
//     }
//     else {
//         // Respond with a 404 error for any other route
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end(`Sorry, the page you are looking for is not here: ERROR 404`);
//     }
// });

// // Listen on port 3000
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000/");
//     console.log("Server is running on http://localhost:3000/get/products");
//     console.log("Server is running on http://localhost:3000/post/orders");
//     // console.log("Server is running on http://localhost:3000/index.html");
//     // console.log("Server is running on http://localhost:3000/orders.html");
// });

