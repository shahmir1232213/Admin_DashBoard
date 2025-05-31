const route = require('express').Router();
const captinController = require('../controller/captinController');

route.get('/get', captinController.getAllCaptins);

module.exports = route;