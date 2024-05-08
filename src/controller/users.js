const userModels = require('../models/users')
const bcrypt = require('bcryptjs');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModels.getAllUsers();

        res.json({
            message: "GET succes",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "server ERROR",
            serverMessage: error,
        })
    }
}

const getUsersbyUsername = async (req,res) => {
    try {
        const { username } = req.params;
        const [data] = await userModels.getUsersbyUsername(username);

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

// const createNewUsers = async (req, res) => {

//     const {body} = req;

//     // if (!body.name || !body.email || !body.gender) {
//     //     return res.status(400).json({
//     //         message: "ada data yg belum teriisi",
//     //         data: null
//     //     })
//     // }

//     try {
//         await userModels.createNewUsers(body);
//         res.status(201).json({
//             message: "create succes",
//             data: body
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "gagal simpan",
//             serverMessage: error,
//         })
//     }
    
// }

// const createNewUsers = async (req, res) => {
//     const {username, password, fullname, place_date_birth, position, addres} = req.body;
//     const imagePath = req.file.path;

//     try {
//         if (!username || !password || !fullname || !place_date_birth || !position || !addres || !imagePath) {
//             return res.status(400).json({
//                 message: "Please provide username, password, and image path"
//             });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
        
//         await userModels.createNewUsers(username, hashedPassword, fullname, place_date_birth, position, imagePath, addres);
//         res.status(201).json({
//             message: "CREATE DATA SUCCES",
//             data: {username, fullname, place_date_birth, position, image: imagePath, addres}
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "CREATE DATA ERROR",
//             serverMessage: error,
//         });
//     }
// }

// const updateUsers = async (req, res) => {

//     const {id} = req.params;
//     const {body} = req;
//     try {
//         await userModels.updateUsers(body, id);
//         res.json({
//             message: "UPDATE succes",
//             data: {
//                 id: id,
//                 body
//             },
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "gagal update",
//             serverMessage: error,
//         })
//     }
    
// }

const updateUsers = async (req, res) => {
    const {id} = req.params;
    const {fullname, place_date_birth, position, addres} = req.body;
    const imagePath = req.file.path;

    try {
        if (!fullname || !place_date_birth || !position || !addres) {
            return res.status(400).json({
                message: "Please provide all"
            });
        }

        await userModels.updateUsers(fullname, place_date_birth, position, imagePath, addres, id);
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: { id, place_date_birth, position, image: imagePath, addres }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        });
    }
}

const deleteUsers = async (req, res) => {

    const {id} = req.params;
    try {
        await userModels.deleteUsers(id);
        res.json({
            message: "DELETED succes",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "gagal deleted",
            serverMessage: error,
        })
    }

}

module.exports = { getAllUsers, getUsersbyUsername, updateUsers, deleteUsers }