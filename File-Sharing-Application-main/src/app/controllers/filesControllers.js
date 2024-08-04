const path = require("path");
const File = require("../models/File");
const { getData } = require("../../util/HttpMethod");
const url = process.env.NODE_ENV !== "production" ? 'http://localhost:3000' : 'https://file-sharing-application-e24s.onrender.com';

var types;
var kindFile;
var kindFileName;

(async function () {
  types = await getData(`${url}/json/FileType.json`)
    .then((data) => data);
  types = Array.from(types);

  kindFile = types.map((type) => type[0]);
  kindFileName = types.map((type) => type[1]);
})();

class filesController {
  // [GET] /files
  show = async (req, res, next) => {
    const files = await getData(`${url}/files/api/all`)
      .then(data => data)
      .catch(error => error);

    res.render("files", {
      css: [
        path.join("/", "css", "main.css"),
        path.join("/", "css", "files.css")
      ],
      title: "File page",
      page: "All",
      notify: req.query.notify,
      file: files,
    });
  };

  // [GET] /files/api/all
  showAll = async (req, res, next) => {
    var array = await File.find({ delete: "false" })
      .then((arr) => {
        arr = Array
          .from(arr)
          .map((obj) => (obj = obj.toObject()));
        arr = arr.reverse();
        return arr;
      })
      .catch((err) => next(err));
    res.send(array);
  }

  // [GET] files/:slug
  showDetail = (req, res, next) => {
    try {
      var type = req.params.slug; // Kind of Documents
      File.find({ type: type, delete: "false" })
        .then((arr) => {
          arr = Array.from(arr);
          arr = arr.map((obj) => (obj = obj.toObject()));
          var heading;
          for (var i = 0; i < kindFile.length; i++) {
            if (type == kindFile[i]) {
              heading = kindFileName[i];
              break;
            }
          }

          res.render("files", {
            css: [
              path.join("/", "css", "main.css"),
              path.join("/", "css", "files.css")
            ],
            title: "File page",
            page: heading,
            notify: req.query.notify,
            file: arr,
          });
        })
        .catch((err) => next(err));
    } catch (err) {
      next(err);
    }
  };
  // [POST] /files/delete/
  delete = async (req, res, next) => {
    var file = req.body;
    var notify;

    await File.findOneAndUpdate({ id: file.name }, { delete: true })
      .then((obj) => {
        notify = `Deleted successfully file ${obj.name}`;
        res.redirect(`/files?notify=${notify}`);
      })
      .catch((err) => next(err));
  };
}

module.exports = new filesController();
