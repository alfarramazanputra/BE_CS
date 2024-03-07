const express = require('express');
const route = express.Router();
const registerController = require('../controller/register');
const upload = require('../config/multerConfig')

route.post('/register', upload.single('image'), registerController.registerUser);

module.exports = route;
