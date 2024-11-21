const express = require('express');
const productService = require('./product-service');

const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

app.use('/products', productService);

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Exiting.`);
        process.exit(1);
    } else {
        throw err;
    }
});
