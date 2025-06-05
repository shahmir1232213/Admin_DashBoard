const route = require('express').Router();
const captinController = require('../controller/captinController');

route.get('/get', captinController.getAllCaptins);
route.get('/rightJoin', captinController.rightJoin);

module.exports = route;