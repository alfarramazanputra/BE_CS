const jwt = require('jsonwebtoken');
const secretAccessToken = '6237i2ugrui2g73r82gr272tguw82327iufhiuwifg982ysbvi';

const verifyToken = (req, res, next) => {
    // Mendapatkan token dari header Authorization
    const authHeader = req.headers.authorization;

    // Memeriksa apakah header Authorization ada
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token tidak ditemukan.' });
    }

    // Mengambil token dari header Authorization
    const token = authHeader.split(' ')[1];

    try {
        // Verifikasi token JWT
        const decoded = jwt.verify(token, secretAccessToken);
        req.user = decoded;
        next();
    } catch (error) {
        // Tangani kesalahan jika token tidak valid
        return res.status(403).json({ message: 'Token tidak valid.' });
    }
};

module.exports = verifyToken;
