const express = require('express');
const route = express.Router();
const CompanysController = require('../controller/company')
const upload = require('../config/multerConfig')

//READ
route.get('/', CompanysController.getAlldataCompany)

//CREATE
route.post('/', upload.fields([
    { name: 'image_company', maxCount: 10 },
    { name: 'images_about', maxCount: 5 },
    { name: 'images_history', maxCount: 5 },
    { name: 'images_profile', maxCount: 5 },
    { name: 'images_culture', maxCount: 5 },
    { name: 'images_sponsors', maxCount: 5 }
]), CompanysController.createDataCompany);

//UPDATE
route.patch('/:id', CompanysController.updateDataCompany)

//DELETE
route.delete('/:id', CompanysController.deleteDataCompany)

module.exports = route;