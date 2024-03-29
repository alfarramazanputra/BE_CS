const blogModels = require('../models/blogs')

const getAlldataBlog = async (req,res) => {
    try {
        const [data] = await blogModels.getAlldataBlog();

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

// const createDataBlog = async (req, res) => {
//     const { body } = req;

//     if (!body.image || !body.tittle || !body.description || !body.id_category) {
//         return res.status(400).json({
//             message: "Semua data harus diisi."
//         });
//     }
//     try {
//         await blogModels.createDataBlog(body);
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

const createDataBlog = async (req, res) => {
    const { tittle, description, id_category } = req.body;
    const imagePath = req.file.path;

    try {
        if (!tittle || !description || !id_category || !imagePath) {
            return res.status(400).json({
                message: "Please provide title, description, and image path"
            });
        }

        await blogModels.createDataBlog(imagePath, tittle, description, id_category);
        res.status(201).json({
            message: "CREATE DATA SUCCES",
            data: { image: imagePath, tittle, description, id_category }
        })
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        });
    }
}

// const updateBlog = async (req, res) => {

//     const {id} = req.params;
//     const {body} = req;
//     try {
//         await blogModels.updateBlog(body, id);
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

const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { tittle, description, id_category } = req.body;
    const imagePath = req.file.path;

    try {
        if (!tittle || !description || !id_category || !imagePath) {
            return res.status(400).json({
                message: "Please provide title, description, and image path"
            });
        }
        
        await blogModels.updateBlog(imagePath, tittle, description, id_category, id);
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: { id, image: imagePath, tittle, description, id_category }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        }); 
    }
}

const deleteDataBlog = async (req, res) => {

    const {id} = req.params;
    try {
        await blogModels.deleteDataBlog(id);
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


const getRelationTB = async (req, res) => {
    try {
        const result = await blogModels.relationTB();
        res.json(result);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getAlldataBlog, createDataBlog, updateBlog, deleteDataBlog, getRelationTB }