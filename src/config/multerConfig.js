const multer = require('multer');

// Konfigurasi penyimpanan
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads') // Lokasi penyimpanan file yang diunggah
    },
    filename: function (req, file, cb) {
        // Penamaan file (gunakan timestamp untuk menghindari nama file yang sama)
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Inisialisasi multer dengan konfigurasi yang telah ditentukan
const upload = multer({ storage: storage });

module.exports = upload;
