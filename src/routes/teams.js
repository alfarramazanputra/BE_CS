const express = require('express');
const route = express.Router();
const  teamController= require('../controller/teams')
const upload = require('../config/multerConfig')

//READ
route.get('/', teamController.getAlldatateams)

//CREATE
route.post('/', upload.single('image'), teamController.createDatateams)

//UPDATE
route.patch('/:id', upload.single('image'), teamController.updateDatateams)

//DELETE
route.delete('/:id', teamController.deleteDatateams)

module.exports = route;