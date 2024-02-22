const express = require('express');
const route = express.Router();
const  portfolioController= require('../controller/portfolio')
const upload = require('../config/multerConfig')

//READ
route.get('/', portfolioController.getAlldataPortfolio)

//CREATE
route.post('/', upload.single('image'),portfolioController.createDataPortfolio)

//UPDATE
route.patch('/:id', upload.single('image'),portfolioController.updateDataPortfolio)

//DELETE
route.delete('/:id', portfolioController.deleteDataPortfolio)

module.exports = route;