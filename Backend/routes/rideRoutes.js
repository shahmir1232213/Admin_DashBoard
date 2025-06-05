const route = require('express').Router();
const ridesController = require('../controller/ridesController');

route.get('/get', ridesController.getAllRides);

module.exports = route;