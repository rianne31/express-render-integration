const express = require('express');
const productService = require('./product-service');

const app = express();


// Middleware
app.use(express.json());

// Routes
app.use('/products', productService);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running o http://localhost:${port}`);
});