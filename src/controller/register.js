const userModels = require('../models/users')
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    const { username, password, fullname, place_date_birth, position, addres } = req.body;
    const imagePath = req.file.path;

    try {
        if (!username || !password || !fullname || !place_date_birth || !position || !addres || !imagePath) {
            return res.status(400).json({
                message: "Please provide username, password, and image path"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await userModels.registerUser(username, hashedPassword, fullname, place_date_birth, position, imagePath, addres);
        res.status(201).json({
            message: "User registered successfully",
            data: { username, fullname, place_date_birth, position, image: imagePath, addres }
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to register user",
            serverMessage: error.message,
        });
    }
};

module.exports = {
    registerUser
};