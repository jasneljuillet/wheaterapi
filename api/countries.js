const express = require("express");
const router = express.Router();
const create = require('apisauce').create;

const api = create({
    baseURL: 'https://restcountries.com/v3.1/',
    headers: { Accept: 'application/json' },
});

module.exports.countries = (req, res) => {

    api.get(`/all`)
    .then( response => response.data)
    .then( data => res.send(data))

}