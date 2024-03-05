const userModels = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const secretAccessToken = 'cobacobaaja';

const login = async (req, res) => {
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
        const passwordMatch = await bcrypt.compare(password, dataUser[0][0].password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Password salah."
            });
        }

        // Buat token JWT
        const token = jwt.sign({ username: dataUser[0][0].username }, secretAccessToken);

        // Jika username dan password cocok, kirim respons berhasil bersama dengan token
        res.json({
            message: "Login berhasil!",
            token: token,
            data: {
                username: dataUser[0][0].username,
                fullname: dataUser[0][0].fullname,
                place_date_birth: dataUser[0][0].place_date_birth,
                position: dataUser[0][0].position,
                image: dataUser[0][0].image,
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan dalam melakukan login.",
            serverMessage: error
        });
    }
}

module.exports = { login };
