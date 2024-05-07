const innovationModels = require('../models/innovations')

const getAlldataInnovations = async (req,res) => {
    try {
        const [data] = await innovationModels.getAlldataInnovations();

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

// const createDataInnovations = async (req, res) => {
//     const { body } = req;

//     if (!body.tittle || !body.description || !body.image) {
//         return res.status(400).json({
//             message: "Semua data harus diisi."
//         });
//     }
//     try {
//         await innovationModels.createDataInnovations(body);
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

const createDataInnovations = async (req, res) => {
    const { tittle, description } = req.body;
    const imagePath = req.file.path; // Assuming Multer has already uploaded the file
    try {
        // Call the model function to create the service data
        await innovationModels.createDataInnovations(tittle, description, imagePath);
        res.status(201).json({
            message: "CREATE DATA SUCCESS",
            data: { tittle, description, image: imagePath }
        });
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        });
    }
};

// const updateDataInnovations = async (req, res) => {

//     const {id} = req.params;
//     const {body} = req;
//     try {
//         await innovationModels.updateDataInnovations(body, id);
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

const updateDataInnovations = async (req, res) => {
    const { id } = req.params;
    const { tittle, description } = req.body;
    const imagePath = req.file.path;

    try {
        if (!tittle || !description) {
            return res.status(400).json({
                message: "Please provide title, description"
            });
        }
        
        await innovationModels.updateDataInnovations(tittle, description, imagePath, id);
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: { id, tittle, description, image: imagePath }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        });
    }
}

const deleteDataInnovatios = async (req, res) => {

    const {id} = req.params;
    try {
        await innovationModels.deleteDataInnovatios(id);
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
    getAlldataInnovations, createDataInnovations, updateDataInnovations, deleteDataInnovatios
}