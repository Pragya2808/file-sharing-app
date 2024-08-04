const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.js");
const uploadController = require("../app/controllers/uploadController");

// [POST] /upload/:kindFile
// Single file

router.post("/", upload.multer.single("file_upload"), uploadController.store);

// [POST] /upload/multiple
// Multiple file

// Update Later...



// [GET] /upload
router.get("/", uploadController.show);

module.exports = router;
