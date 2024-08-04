const File = require("../models/File");

class searchController {
  // [GET] /search
  show = async (req, res, next) => {
    console.log("SHOW");

    res.render("search", {
      css: ["../css/main.css", "../css/search.css"],
      title: "Search page",
      notify: req.query.notify,
    });
  };

  // [GET] /search?q=value
  search = async (req, res, next) => {
    var id = req.query.q.toLowerCase();

    await File.find({})
      .then((arr) => {
        arr = Array.from(arr)
          .map((obj) => (obj = obj.toObject()))
          .filter((obj) => {
            return obj.name.toLowerCase().startsWith(id);
          });

        res.render("search", {
          css: ["../css/main.css", "../css/search.css"],
          title: "Search page",
          keySearch: req.query.q,
          notify: req.query.notify,
          file: arr,
        });
      })
      .catch((err) => next(err));
  };
}

module.exports = new searchController();
