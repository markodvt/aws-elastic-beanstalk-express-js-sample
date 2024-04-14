const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("<h1>Let's Go!</h1><p>A terrible website</p>"));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
