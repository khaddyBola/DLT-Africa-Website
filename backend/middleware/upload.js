const multer = require("multer");
const path = require("path");

const storage = multer
    .diskStorage({
        destination: function (req, file, callback) {
            callback(null, __dirname + "/uploads");
        },
        filename: function (req, file, callback) {
            callback(
                null,
                `${file.filename}_${Date.now()}_${path.extname(file.originalname)}`
            );
        },
    })
    .array("files");

const fileUploads = (destination) =>
    multer({
        storage: storage(destination),
        limits: {
            fileSize: 2 * 1024 * 1024, // 2mb.
        },
        fileFilter: (req, file, callback) => {
            if (
                file.mimetype === "image/png" ||
                file.mimetype === "image/jpeg" ||
                file.mimetype === "image/jpg"
            ) {
                return callback(null, true);
            } else {
                callback(null, false);
                return new Error("Only PNG, JPEG and JPG images format are supported");
            }
        },
        onError: function (err, next) {
            console.log(`Error: ${err}`)
            next(err);
        }
    }).single("image");

module.exports = fileUploads;
