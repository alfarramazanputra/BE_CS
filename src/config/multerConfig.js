const multer = require('multer');

// Konfigurasi penyimpanan
const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        cb(null, 'public/compro-api/uploads/') // Lokasi penyimpanan file yang diunggah
    },
    filename:  (req, file, cb) => {
        // Penamaan file (gunakan timestamp untuk menghindari nama file yang sama)
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Inisialisasi multer dengan konfigurasi yang telah ditentukan
const upload = multer({ storage: storage });

module.exports = upload;
