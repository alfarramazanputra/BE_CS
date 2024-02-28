const express = require('express');
const route = express.Router();
const CompanysController = require('../controller/company')
const upload = require('../config/multerConfig')

//READ
route.get('/', CompanysController.getAlldataCompany)

//CREATE
route.post('/', upload.single('image'), CompanysController.createDataCompany);

//UPDATE
route.patch('/:id', CompanysController.updateDataCompany)

//DELETE
route.delete('/:id', CompanysController.deleteDataCompany)

module.exports = route;