const { Router } = require('express');
const usersControllers = require('../controllers/usersControllers');

const route = Router();

route.post('/login', usersControllers.loginControllers);

route.post('/register', usersControllers.registerControllers);

route.get('/getall', usersControllers.getAll);

route.get('/getone', usersControllers.getOne);

module.exports = route;