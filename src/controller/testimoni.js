const testimoniModels = require('../models/testimoni');

const getAlldatatestimoni = async (req,res) => {
    try {
        const [data] = await testimoniModels.getAlldatatestimoni();

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

// const createDatatestimoni = async (req, res) => {
//     const { body } = req;

//     //memeriksa apakah data sudah diisi semua
//     if(!body.name || !body.position || !body.image || !body.description){
//         return res.status(400).json({
//             message: "Semua data harus diisi."
//         });
//     }
    
//     try {
//         await testimoniModels.createDatatestimoni(body);
//         res.status(201).json({
//             message: "CREATE DATA SUCCES",
//             data: body
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "CREATE DATA ERROR",
//             serverMessage: error,
//         })
//     }
    
// }

const createDatatestimoni = async (req, res) => {
    const { name, position, description } = req.body;
    const imagePath = req.file.path;

    try {
        await testimoniModels.createDatatestimoni(name, position, imagePath, description);
        res.status(201).json({
            message: "CREATE DATA SUCCESS",
            data: { name, position, image: imagePath, description, create_by:req.user.id }
        });
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        });
    }
}

// const updateDatatestimoni = async (req, res) => {

//     const {id} = req.params;
//     const {body} = req;
//     try {
//         await testimoniModels.updateDatatestimoni(body, id);
//         res.json({
//             message: "UPDATE DATA SUCCES",
//             data: {
//                 id: id,
//                 body
//             },
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "UPDATE DATA ERROR",
//             serverMessage: error,
//         })
//     }
    
// }

const updateDatatestimoni= async (req, res) => {
    const {id} = req.params;
    const { name, position, description } = req.body;
    const imagePath = req.file.path;

    try {
        await testimoniModels.updateDatatestimoni(name, position, imagePath, description, id);
        res.json({
            message: "UPDATE DATA SUCCES",
            data: {id, name, position, image: imagePath, description, update_by:req.user.id}
        })
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        });
    }
}

const deleteDatatestimoni = async (req, res) => {

    const {id} = req.params;
    try {
        await testimoniModels.deleteDatatestimoni(id);
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
    getAlldatatestimoni, createDatatestimoni, updateDatatestimoni, deleteDatatestimoni
}