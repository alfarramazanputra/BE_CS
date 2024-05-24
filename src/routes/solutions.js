const express = require('express');
const route = express.Router();
const solutionController = require('../controller/solutions');
const upload = require('../config/multerConfig');

//READ
route.get('/', solutionController.getAlldatasolutions)

//CREATE
route.post('/', upload.single('image'), solutionController.createDatasolutions)

//UPDATE
route.patch('/:id', upload.single('image'),solutionController.updateDatasolutions)

//DELETE
route.delete('/:id', solutionController.deleteDatasolutions)

module.exports = route;