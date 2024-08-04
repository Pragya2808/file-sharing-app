const { model } = require("mongoose");
const File = require("../models/File");
const fs = require("fs");
const path = require("path");

class deleteController {
  // [GET] /delete
  show = (req, res, next) => {
    File.find({ delete: true })
      .then((arr) => {
        console.log(arr);
        arr = Array.from(arr);
        arr = arr.map((obj) => (obj = obj.toObject()));
        res.render("delete", {
          css: ["../css/main.css", "../css/files.css"],
          title: "Trash Bin page",
          notify: req.query.notify,
          file: arr,
        });
      })
      .catch((err) => {
        next(err);
      });
  };

  // [POST] /delete

  /*
    The request object (req.body) contains a Json object like this:
    {
        id: abcdefgh
    }
    */

  delete = (req, res, next) => {
    // POST request
    let id = req.body.id;
    let notify;
    console.log(req.body);

    if (id) {
      File.findOneAndDelete({ id: id })
        .then((obj) => {
          // res.json(obj);

          let pathToFile = path.join(
            __dirname,
            "..",
            "..",
            "..",
            "public",
            obj.url,
            obj.id
          );
          if (pathToFile && fs.existsSync(pathToFile)) {
            fs.unlinkSync(pathToFile);
            notify = "Successfully Deleted";
          } else notify = "Failed to Deleted";

          res.redirect(`/delete?notify=${notify}`);
        })
        .catch((err) => next(err));
    } else {
      notify = "Failed to Delete";
      res.redirect(`/delete?notify=${notify}`);
    }
  };
}

module.exports = new deleteController();
