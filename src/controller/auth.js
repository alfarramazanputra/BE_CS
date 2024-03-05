const dbPool = require('../config/database');
const bcrypt = require('bcryptjs');

// const login = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Mengambil data pengguna dari database berdasarkan username
//         const [data] = await userModels.getUsersbyUsername(username);

//         // Memeriksa apakah pengguna ditemukan
//         if (!data) {
//             return res.status(404).json({
//                 message: "Pengguna tidak ditemukan."
//             });
//         }

//         // Memeriksa kecocokan password
//         const passwordMatch = await bcrypt.compare(password, data.password);

//         if (!passwordMatch) {
//             return res.status(401).json({
//                 message: "Password salah."
//             });
//         }

//         // Jika username dan password cocok, kirim respons berhasil
//         res.json({
//             message: "Login berhasil!",
//             data: data
//         });

//     } catch (error) {
//         res.status(500).json({
//             message: "Terjadi kesalahan dalam melakukan login.",
//             serverMessage: error
//         });
//     }
// }

// module.exports = { login };

const login = async (req, res) => {
    const { username, password } = req.body;
    // console.log( username, password );

    if (!username || !password) {
        return res.json({ status: "error", error: "Please enter your username d password" });
    } else {
        console.log("masuk");
        try {
            const sqlQuery = 'SELECT username FROM tb_user WHERE username=?';
            await dbPool.execute(sqlQuery, [username], async (err, result) => {
                console.log(result)
                if (err) {
                    throw err;
                }
                if (!result[0] || !await bcrypt.compare(password, result[0].password)) {
                    return res.json({ status: "error", error: "Incorrect username or password" });
                } else {
                    return res.json({ status: "success", message: "Login successful" });
                }
            });
        } catch (error) {
            return res.status(500).json({ status: "error", error: "Internal server error" });
        }
    }
}

module.exports = { login };