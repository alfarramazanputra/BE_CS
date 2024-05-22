const cultureModels = require('../models/culture');

const getAlldataculture = async (req,res) => {
    try {
        const [data] = await cultureModels.getAlldataculture();

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
};

const createDataculture = async (req, res) => {
    const { tittle_culture, description_culture } = req.body;
    const imagePath = req.file.path; // Assuming Multer has already uploaded the file
    try {
        
        if (!imagePath || !tittle_culture || !description_culture) {
            return res.status(400).json({
                message: "Please provide title, description, and image path"
            });
        }

        // Call the model function to create the culture data
        await cultureModels.createDataculture(imagePath, tittle_culture, description_culture);
        res.status(201).json({
            message: "CREATE DATA SUCCESS",
            data: { image: imagePath, tittle_culture, description_culture, create_by:req.user.id }
        });
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        });
    }
};

const updateDataculture = async (req, res) => {
    const { id } = req.params;
    const { tittle_culture, description_culture } = req.body;
    const imagePath = req.file.path; // Assuming Multer has already uploaded the file
    try {
        
        if (!tittle_culture || !description_culture) {
            return res.status(400).json({
                message: "Please provide title, description"
            });
        }

        // Call the model function to update the culture data
        await cultureModels.updateDataculture(imagePath, tittle_culture, description_culture, id);
        res.status(201).json({
            message: "UPDATE DATA SUCCESS",
            data: { id, image: imagePath, tittle_culture, description_culture, update_by:req.user.id }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        });
    }
};

const deleteDataculture = async (req, res) => {

    const {id} = req.params;

    try {
        await cultureModels.deleteDataculture(id);
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
};

module.exports = {
    getAlldataculture, createDataculture, updateDataculture, deleteDataculture
}