const express = require('express');
const route = express.Router();
const authentication = require('../middleware/auth')

route.post('/login', authentication.login);

module.exports = route;