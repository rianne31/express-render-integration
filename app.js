const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send('Render Deployment Project');
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
