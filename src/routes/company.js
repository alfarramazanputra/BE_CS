const express = require('express');
const route = express.Router();
const CompanysController = require('../controller/company')
const upload = require('../config/multerConfig')

//READ
route.get('/', CompanysController.getAlldataCompany)

//CREATE
route.post('/', upload.single('image'), CompanysController.createDataCompany);
// ROUTE BARU
route.post('/upload', upload.fields([{ name: 'image_company', maxCount: 1 }, { name: 'image_about', maxCount: 1 }, { name: 'image_culture', maxCount: 1 }, { name: 'image_client', maxCount: 1 }]), CompanysController.createCompany);

//UPDATE
route.patch('/:id', CompanysController.updateDataCompany)

//DELETE
route.delete('/:id', CompanysController.deleteDataCompany)

module.exports = route;