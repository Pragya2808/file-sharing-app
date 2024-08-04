const File = require("../models/File");
const path = require("path");

function cleanQuery(path) {
  var i;
  for (i = path.length - 1; i >= 0; i--) {
    if (path[i] === "?") {
      break;
    }
  }

  return path.substring(0, i - 1);
}

class uploadController {
  // [GET] /upload
  show = (req, res, next) => {
    var notify = req.query.notify;
    res.redirect("/" + `?notify=${notify}`);
  };

  // [POST] /upload/
  store = async (req, res, next) => {
    try {
      // name, id. url, img, delete

      var file = req.body;
      file.id = req.id;
      file.url = req.filePath;

      console.log("ID : ", file);

      File.create(file)
        .then(obj => {
          if (!obj) {
            next({ error: "Error creating Object" });
          } else {
            var backURL = "/files";
            backURL = cleanQuery(backURL);
            backURL += "?notify=Upload file successfully!";
            res.redirect(backURL); // After redirect, Send a notification for user.
          }
        })
        .catch(err => next(err));
    } catch (err) {
      next(err);
    }
  };
}
module.exports = new uploadController();
