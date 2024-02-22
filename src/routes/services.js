const express = require('express');
const route = express.Router();
const serviceController= require('../controller/services')
const upload = require('../config/multerConfig')

//READ
route.get('/', serviceController.getAlldataservices)
route.get('/:id', serviceController.getDataServicesbyId)

//CREATE
route.post('/', upload.single('image'), serviceController.createDataservices)

//UPDATE
route.patch('/:id', upload.single('image'), serviceController.updateDataservices)

//DELETE
route.delete('/:id', serviceController.deleteDataservices)

module.exports = route;