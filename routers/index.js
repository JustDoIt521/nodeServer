var  express = require('express');
const Router = express.Router();

let entry = require('./pageEntry.js');

entry(Router); 

module.exports = Router;