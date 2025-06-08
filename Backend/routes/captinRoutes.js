const route = require('express').Router();
const { Router } = require('express');
const captinController = require('../controller/captinController');

route.get('/get', captinController.getAllCaptins);
route.get('/rightJoin', captinController.rightJoin);
route.get('/available', captinController.availableCaptin); 
route.post('/delete', captinController.deleteCaptin);
route.get('/getDeletedCaptins', captinController.getDeletedCaptins);
module.exports = route;