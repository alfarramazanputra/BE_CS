const userModels = require('../models/users');
const bcrypt = require('bcryptjs');


const login = async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    // Menampilkan username yang diterima dalam console
    console.log("Username yang diterima:", username);

    // Memeriksa apakah username dan password telah diterima
    if (!username || !password) {
        return res.status(400).json({
            message: "Username atau password tidak boleh kosong."
        });
    }

    try {
        // Mengambil data pengguna dari database berdasarkan username
        const dataUser = await userModels.getUsersbyUsername(username);

        // Memeriksa apakah pengguna ditemukan
        if (!dataUser) {
            return res.status(404).json({
                message: "Pengguna tidak ditemukan."
            });
        }

        // Memeriksa kecocokan password
        const passwordMatch = await bcrypt.compare(password, dataUser.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Password salah."
            });
        }

        // Jika username dan password cocok, kirim respons berhasil
        res.json({
            message: "Login berhasil!",
            data: dataUser
        });

    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan dalam melakukan login.",
            serverMessage: error
        });
    }
}

module.exports = { login };