const express = require('express');
const route = express.Router();
const Authcontroller = require('../controller/auth')

route.post('/login', Authcontroller.login);

module.exports = route;