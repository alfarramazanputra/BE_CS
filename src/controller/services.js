const serviceModels = require('../models/services');

const getAlldataservices = async (req,res) => {
    try {
        const [data] = await serviceModels.getAlldataservices();

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

const getDataServicesbyId = async (req,res) => {
    try {
        const { id } = req.params;
        const [data] = await serviceModels.getDataServicesbyId(id);

        if (!data.length) {
            return res.status(404).json({
                message: "Data not found",
            });
        }

        res.json({
            message: "GET DATA SUCCES",
            data: data[0]
        })
    } catch (error) {
        res.status(500).json({
            message: "NOT FOUND GET DATA",
            serverMessage: error,
        })
    }
}

// const createDataservices = async (req, res) => {
//     const { body } = req;
    
//     // Memeriksa apakah semua data telah diisi
//     if (!body.tittle || !body.description || !body.image) {
//         return res.status(400).json({
//             message: "maaf ada data belum diisi."
//         });
//     }

//     try {
//         await serviceModels.createDataservices(body);
//         res.status(201).json({
//             message: "CREATE DATA SUCCES",
//             data: body
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "CREATE DATA ERROR",
//             serverMessage: error
//         });
//     }
// };

const createDataservices = async (req, res) => {
    const { tittle, description } = req.body;
    const imagePath = req.file.path; // Assuming Multer has already uploaded the file
    try {
        
        if (!tittle || !description || !imagePath) {
            return res.status(400).json({
                message: "Please provide title, description, and image path"
            });
        }

        // Call the model function to create the service data
        await serviceModels.createDataservices(tittle, description, imagePath);
        res.status(201).json({
            message: "CREATE DATA SUCCESS",
            data: { tittle, description, image: imagePath, create_by:req.user.id }
        });
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        });
    }
};

// const updateDataservices = async (req, res) => {

//     const {id} = req.params;
//     const {body} = req;
//     try {
//         await serviceModels.updateDataservices(body, id);
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

const updateDataservices = async (req, res) => {
    const { id } = req.params;
    const { tittle, description } = req.body;
    const imagePath = req.file.path;

    try {
        if (!tittle || !description) {
            return res.status(400).json({
                message: "Please provide title, description"
            });
        }

        await serviceModels.updateDataservices(tittle, description, imagePath, id);
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: { id, tittle, description, image: imagePath, update_by:req.user.id }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        });
    }
}

const deleteDataservices = async (req, res) => {

    const {id} = req.params;
    try {
        await serviceModels.deleteDataservices(id);
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
    getAlldataservices, getDataServicesbyId, createDataservices, updateDataservices, deleteDataservices
}