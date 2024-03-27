const express = require('express');
const route = express.Router();
const cultureController= require('../controller/culture')
const upload = require('../config/multerConfig')

//READ
route.get('/', cultureController.getAlldataculture)

//CREATE
route.post('/', upload.single('image'), cultureController.createDataculture)

//UPDATE
route.patch('/:id', upload.single('image'), cultureController.updateDataculture)

//DELETE
route.delete('/:id', cultureController.deleteDataculture)

module.exports = route;