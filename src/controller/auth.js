const userModels = require('../models/users');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Mengambil data pengguna dari database berdasarkan username
        const [data] = await userModels.getUsersbyUsername(username);

        // Memeriksa apakah pengguna ditemukan
        if (!data) {
            return res.status(404).json({
                message: "Pengguna tidak ditemukan."
            });
        }

        // Memeriksa kecocokan password
        const passwordMatch = await bcrypt.compare(password, data.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Password salah."
            });
        }

        // Jika username dan password cocok, kirim respons berhasil
        res.json({
            message: "Login berhasil!",
            data: data
        });

    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan dalam melakukan login.",
            serverMessage: error
        });
    }
}

module.exports = { login };
