const path = require("path");
const getDir = require("../../config/js/readdirSync");
const File = require("../models/File");

function sortFileArray(file) {
  for (var i = 0; i < file.length; i++) {
    for (var j = i + 1; j < file.length; j++) {
      if (parseInt(file[i].name) < parseInt(file[j].name)) {
        var temp = file[i];
        file[i] = file[j];
        file[j] = temp;
      }
    }
  }
  return file;
}
class sharingController {
  // [GET] /
  show = (req, res, next) => {
    File.find({ delete: "false" })
      .sort({ id: "desc" })
      .then((arr) => {
        arr = Array.from(arr);
        arr = arr.map((obj) => (obj = obj.toObject()));
        var fileNew = [];

        for (var i = 0; i < arr.length && fileNew.length <= 2; i++) {
          fileNew.push(arr[i]);
        }

        res.render("home", {
          css: [
            path.join('/', 'css', 'main.css'),
            path.join('/', 'css', 'files.css'),
            path.join('/', 'css', 'home.css'),
          ],
          title: "File page",
          page: "All",
          notify: req.query.notify,
          file: fileNew,
          fileNew: arr,
        });
      })
      .catch((err) => next(err));
  };

  showJson = (req, res, next) => {

    File.find({}).then((arr) => {
      arr = Array.from(arr);
      arr = arr.map((obj) => (obj = obj.toObject()));

      res.json(arr);
    });
  };

  about = (req, res, next) => {
    res.render("about", {
      css: [
        path.join('/', 'css', 'main.css'),
        path.join('/', 'css', 'about.css')
      ],
      // css: ["/css/main.css", "/css/about.css"],
      title: "File page",
    });
  };
}

module.exports = new sharingController();
