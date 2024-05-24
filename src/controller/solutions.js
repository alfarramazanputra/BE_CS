const solutionModels = require('../models/solutions');

const getAlldatasolutions = async (req,res) => {
    try {
        const [data] = await solutionModels.getAlldatasolutions();

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

const createDatasolutions = async (req, res) => {
    const { title, description } = req.body;
    const imagePath = req.file.path;
    //memeriksa apakah data sudah diisi semua
    try {
        if(!title || !description || !imagePath){
            return res.status(400).json({
                message: "Please provide title, description, and image."
            });
        }
    
        await solutionModels.createDatasolutions(title, description, imagePath);
        res.status(201).json({
            message: "CREATE DATA SUCCES",
            data: { title, description, image: imagePath, create_by:req.user.id }
        });
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        });
    }
    
}

const updateDatasolutions = async (req, res) => {
    const {id} = req.params;
    const { title, description } = req.body;
    const imagePath = req.file.path;
    try {
        if(!title || !description){
            return res.status(400).json({
                message: "Please provide title and description."
            });
        }

        await solutionModels.updateDatasolutions(title, description, imagePath, id);
        res.json({
            message: "UPDATE DATA SUCCES",
            data: { title, description, image: imagePath, update_by:req.user.id }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        });
    }
}

const deleteDatasolutions = async (req, res) => {

    const {id} = req.params;
    try {
        await solutionModels.deleteDatasolutions(id);
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
    getAlldatasolutions, createDatasolutions, updateDatasolutions, deleteDatasolutions
}