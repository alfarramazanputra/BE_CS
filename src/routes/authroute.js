const express = require('express');
const route = express.Router();
const authentication = require('../controller/auth');
const verifyToken = require('../middleware/authMiddleware');

// Endpoint untuk login
route.post('/login', authentication.login);

// Middleware untuk memverifikasi token JWT pada endpoint tertentu
route.use(verifyToken);

route.get('/profile', (req, res) => {
    // Di sini Anda dapat mengakses data pengguna yang masuk
    // melalui req.user yang telah ditambahkan oleh middleware verifyToken
    res.json({ message: 'Endpoint ini membutuhkan otentikasi.' });
});

module.exports = route;
