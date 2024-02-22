const express = require('express');
const route = express.Router();
const BlogController = require('../controller/blogs')
const upload = require('../config/multerConfig')

//READ
route.get('/', BlogController.getAlldataBlog)

//CREATE
route.post('/', upload.single('image'),BlogController.createDataBlog)

//UPDATE
route.patch('/:id', upload.single('image'), BlogController.updateBlog)

//DELETE
route.delete('/:id', BlogController.deleteDataBlog)

module.exports = route;