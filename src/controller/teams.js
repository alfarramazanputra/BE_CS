const teamModels = require('../models/teams');

const getAlldatateams = async (req,res) => {
    try {
        const [data] = await teamModels.getAlldatateams();

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

// const createDatateams = async (req, res) => {
//     const { body } = req;

//     // Memeriksa apakah semua data telah diisi
//     if (!body.name || !body.position || !body.image) {
//         return res.status(400).json({
//             message: "Semua data harus diisi."
//         });
//     }

//     try {
//         await teamModels.createDatateams(body);
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

const createDatateams = async (req, res) => {
    const { name, position } = req.body;
    const imagePath = req.file.path;
    try {
        if (!name || !position || !imagePath) {
            return res.status(400).json({
                message: "Please provide name, position, and image path"
            });
        }
        
        await teamModels.createDatateams(name, position, imagePath);
        res.status(201).json({
            message: "CREATE DATA SUCCES",
            data: { name, position, image: imagePath }
        });
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        });
    }
}

// const updateDatateams = async (req, res) => {

//     const {id} = req.params;
//     const {body} = req;
//     try {
//         await teamModels.updateDatateams(body, id);
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

const updateDatateams = async (req, res) => {
    const {id} = req.params;
    const { name, position } = req.body;
    const imagePath = req.file.path;

    try {
        if (!name || !position || !imagePath) {
            return res.status(400).json({
                message: "Please provide name, position, and image path"
            });
        }

        await teamModels.updateDatateams(name, position, imagePath, id);
        res.json({
            message: "UPDATE DATA SUCCES",
            data: { name, position, image: imagePath }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        });
    }
}

const deleteDatateams = async (req, res) => {

    const {id} = req.params;
    try {
        await teamModels.deleteDatateams(id);
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
    getAlldatateams, createDatateams, updateDatateams, deleteDatateams
}