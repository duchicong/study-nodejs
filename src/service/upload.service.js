const multer = require('multer');
const path = require('path');


// setup storage for upload avatar file
const storage = multer.diskStorage({
    destination: path.join(__dirname, './../public/uploaded/avatar'),
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${Math.round(Math.random()) * 100}-${file.originalname}`);
    }
});

// create the multer instance
const uploadAvatar = multer({ storage });


module.exports = {
    uploadAvatar
}
