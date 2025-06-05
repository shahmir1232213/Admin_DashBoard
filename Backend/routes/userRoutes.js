const route = require('express').Router();
const userController = require('../controller/userController');

route.get('/get', userController.getAllUsers);
route.get('/leftJoin', userController.leftJoin);
route.get('/innerJoin', userController.innerJoin);
module.exports = route;