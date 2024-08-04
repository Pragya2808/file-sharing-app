const multer = require("multer");
const path = require("path");
const { getData } = require("../util/HttpMethod");
const url = process.env.NODE_ENV !== "production" ? 'http://localhost:3000' : 'https://file-sharing-application-e24s.onrender.com';
var types = [];
var kindFile = [];
var kindFileName = [];

(async function () {
  types = await getData(`${url}/json/FileType.json`)
    .then((data) => data);
  types = Array.from(types);

  kindFile = types.map((type) => type[0]);
  kindFileName = types.map((type) => type[1]);
})();

// Middleware
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    let type = req.body.type;
    type = type.toLowerCase();
    let check = false;

    kindFile.forEach((value) => check = check || value === type);

    console.log(check);

    let Path = path.join(__dirname, "..", "..", "public", "Documents", "other");
    req.filePath = path.join("Documents", "other");
    if (check) {
      Path = path.join(__dirname, "..", "..", "public", "Documents", type);
      req.filePath = path.join("Documents", type);
    }
    // Callback to store the uploaded file
    callback(null, Path);
  },

  filename: (req, file, callback) => {
    let fileID = Date.now() + path.extname(file.originalname);
    req.id = fileID;
    callback(null, fileID);
  },
});

module.exports = {
  multer: multer({ storage }),
};
