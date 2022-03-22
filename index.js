require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const log = console.log;
const countries = require('./api/countries');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

// endpoints
    //Countries 
    app.get('/api/countries', countries.countries);


    app.get('/', (req, res) => res.send('Welcome by Jasnel Juillet'));
    
const PORT = process.env.PORT || 3000;
app.listen( PORT, () => log(`${PORT} is ready`));