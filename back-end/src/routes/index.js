const { Router } = require('express');
const usersRouter = require('./userRoutes');

const route = Router();

route.use('/user', usersRouter);

module.exports = route;