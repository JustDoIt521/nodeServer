var  express = require('express');
const Router = express.Router();

let entryRoute = require('./pageEntry.js');
let recordRoute = require('./dateRecords.js');

Router.registerRoutes = function  (routes) {
    let entrys = Object.keys(routes);
    for (let i in entrys) {
        let key = entrys[i];
        routes[key](Router);
    }
}

Router.registerRoutes(entryRoute);
Router.registerRoutes(recordRoute);

module.exports = Router;