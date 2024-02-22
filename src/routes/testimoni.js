const express = require('express');
const route = express.Router();
const  teamController= require('../controller/testimoni')
const upload = require('../config/multerConfig')

//READ
route.get('/', teamController.getAlldatatestimoni)

//CREATE
route.post('/', upload.single('image'),teamController.createDatatestimoni)

//UPDATE
route.patch('/:id', upload.single('image'), teamController.updateDatatestimoni)

//DELETE
route.delete('/:id', teamController.deleteDatatestimoni)

module.exports = route;