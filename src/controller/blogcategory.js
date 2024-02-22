const categoryBlogModels = require('../models/blogcategory');

const getAlldatablogcategory = async (req,res) => {
    try {
        const [data] = await categoryBlogModels.getAlldatablogcategory();

        res.json({
            message: "GET ALL DATA SUCCES",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "NOT FOUND GET ALL DATA",
            serverMessage: error,
        })
    }
}

const createDatablogcategory = async (req, res) => {
    const { body } = req;

    if (!body.category_name) {
        return res.status(400).json({
            message: "Nama kategori harus diisi."
        });
    }
    try {
        await categoryBlogModels.createDatablogcategory(body);
        res.status(201).json({
            message: "CREATE DATA SUCCES",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        })
    }
    
}

const updateDatablogcategory = async (req, res) => {

    const {id} = req.params;
    const {body} = req;
    try {
        await categoryBlogModels.updateDatablogcategory(body, id);
        res.json({
            message: "UPDATE DATA SUCCES",
            data: {
                id: id,
                body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        })
    }
    
}

const deleteDatablogcategory = async (req, res) => {

    const {id} = req.params;
    try {
        await categoryBlogModels.deleteDatablogcategory(id);
        res.json({
            message: "DELETE DATA SUCCES",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "DELETE DATA ERROR",
            serverMessage: error,
        })
    }
}

module.exports = {
    getAlldatablogcategory, createDatablogcategory, updateDatablogcategory, deleteDatablogcategory
}