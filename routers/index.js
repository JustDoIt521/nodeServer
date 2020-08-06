var  express = require('express');
const Router = express.Router();

let entry = require('./pageEntry.js');

let test = require('./test.js');

console.log(entry);
// entry(Router); 
Router.registerRoutes = function  (routes) {
    let entrys = Object.keys(routes);
    for (let i in entrys) {
        let key = entrys[i];
        routes[key](Router);
    }
}

Router.registerRoutes(entry);
Router.registerRoutes(test);

module.exports = Router;