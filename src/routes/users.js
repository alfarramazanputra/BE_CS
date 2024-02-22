const express = require('express');
const route = express.Router();
const UserController = require('../controller/users')
const upload = require('../config/multerConfig')

//READ
route.get('/', UserController.getAllUsers)
route.get('/:username', UserController.getUsersbyUsername)

//CREATE
route.post('/', upload.single('image'), UserController.createNewUsers)

//UPDATE
route.patch('/:id', upload.single('image'), UserController.updateUsers)

//DELETED
route.delete('/:id', UserController.deleteUsers) 
    

module.exports = route;