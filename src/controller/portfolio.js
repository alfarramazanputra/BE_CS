const portofolioModels = require('../models/portfolio');

const getAlldataPortfolio = async (req,res) => {
    try {
        const [data] = await portofolioModels.getAlldataPortfolio();

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

// const createDataPortfolio = async (req, res) => {
//     const { body } = req;
//     //memeriksa apakah data sudah diisi semua
//     if (!body.image || !body.tittle || !body.software_name || !body.description || !body.amount){
//         return res.status(400).json({
//             message: "Semua data harus diisi."
//         });
//     }
//     try {
//         await portofolioModels.createDataPortfolio(body);
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

const createDataPortfolio = async (req, res) => {
    const { title, software_name, description, amount } = req.body;
    const imagePath = req.file.path;

    try {
        if (!title || !software_name || !description || !amount || !imagePath) {
            return res.status(400).json({
                message: "Please provide title, description, and image path"
            });
        }

        await portofolioModels.createDataPortfolio(imagePath, title, software_name, description, amount);
        res.status(201).json({
            message: "CREATE DATA SUCCES",
            data: { image: imagePath, title, software_name, description, amount, create_by:req.user.id }
        });
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        });
    }
}

// const updateDataPortfolio = async (req, res) => {

//     const {id} = req.params;
//     const {body} = req;
//     try {
//         await portofolioModels.updateDataPortfolio(body, id);
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

const updateDataPortfolio = async (req, res) => {
    const { id } = req.params;
    const { title, software_name, description, amount } = req.body;
    const imagePath = req.file.path;

    try {
        if (!title || !software_name || !description || !amount) {
            return res.status(400).json({
                message: "Please provide title, description, software_name, amount"
            });
        }
        
        await portofolioModels.updateDataPortfolio( imagePath, title, software_name, description, amount, id );
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: { id, image: imagePath, title, software_name, description, amount, update_by:req.user.id }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        });
    }
}

const deleteDataPortfolio = async (req, res) => {

    const {id} = req.params;
    try {
        await portofolioModels.deleteDataPortfolio(id);
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
    getAlldataPortfolio, createDataPortfolio, updateDataPortfolio, deleteDataPortfolio
}