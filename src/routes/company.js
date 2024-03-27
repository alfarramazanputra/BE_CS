const express = require('express');
const route = express.Router();
const CompanysController = require('../controller/company')
const upload = require('../config/multerConfig')

//READ
route.get('/', CompanysController.getAlldataCompany)

//CREATE
route.post('/upload', upload.fields([{ name: 'image_company', maxCount: 4 }, { name: 'image_about', maxCount: 4 }, { name: 'image_client', maxCount: 4 }]), CompanysController.createCompany);

//UPDATE
route.patch('/:id', upload.fields([{ name: 'image_company', maxCount: 4 }, { name: 'image_about', maxCount: 4 }, { name: 'image_client', maxCount: 4 }]), CompanysController.updateDataCompany);

route.patch('/CP/:id', upload.fields([{ name: 'image_company', maxCount: 4 }]), CompanysController.updateCompany);

route.patch('/client/:id', upload.fields([{ name: 'image_client', maxCount: 4 }]), CompanysController.updateClient);

route.patch('/about/:id', upload.fields([{ name: 'image_about', maxCount: 4 }]), CompanysController.updateAbout);

route.patch('/personal/:id', CompanysController.updatepersonal);

//DELETE
route.delete('/:id', CompanysController.deleteDataCompany)

module.exports = route;