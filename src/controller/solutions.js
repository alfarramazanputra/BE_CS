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
    const { body } = req;
    //memeriksa apakah data sudah diisi semua
    if(!body.title || !body.description){
        return res.status(400).json({
            message: "Semua data harus diisi."
        });
    }

    try {
        await solutionModels.createDatasolutions(body);
        res.status(201).json({
            message: "CREATE DATA SUCCES",
            data: { body, create_by:req.user.id }
        })
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        })
    }
    
}

const updateDatasolutions = async (req, res) => {

    const {id} = req.params;
    const {body} = req;
    try {
        await solutionModels.updateDatasolutions(body, id);
        res.json({
            message: "UPDATE DATA SUCCES",
            data: {
                id: id,
                body,
                update_by:req.user.id
            },
        })
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        })
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