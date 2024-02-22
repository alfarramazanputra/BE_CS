const express = require('express');
const route = express.Router();
const  teamController= require('../controller/blogcategory')

//READ
route.get('/', teamController.getAlldatablogcategory)

//CREATE
route.post('/', teamController.createDatablogcategory)

//UPDATE
route.patch('/:id', teamController.updateDatablogcategory)

//DELETE
route.delete('/:id', teamController.deleteDatablogcategory)

module.exports = route;