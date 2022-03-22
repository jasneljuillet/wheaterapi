const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const log = console.log;

app.use( port, () => log(`${port} is ready`));