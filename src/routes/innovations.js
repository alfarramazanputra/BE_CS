const express = require('express');
const route = express.Router();
const innovationsController = require('../controller/innovations')
const upload = require('../config/multerConfig')

//READ
route.get('/', innovationsController.getAlldataInnovations)

//CREATE
route.post('/', upload.single('image'),innovationsController.createDataInnovations)

//UPDATE
route.patch('/:id', upload.single('image'), innovationsController.updateDataInnovations)

//DELETE
route.delete('/:id', innovationsController.deleteDataInnovatios)

module.exports = route;