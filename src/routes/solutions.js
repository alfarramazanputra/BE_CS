const express = require('express');
const route = express.Router();
const  solutionController= require('../controller/solutions');
const upload = require('../config/multerConfig');

//READ
route.get('/', solutionController.getAlldatasolutions)

//CREATE
route.post('/', solutionController.createDatasolutions)

//UPDATE
route.patch('/:id', solutionController.updateDatasolutions)

//DELETE
route.delete('/:id', solutionController.deleteDatasolutions)

module.exports = route;