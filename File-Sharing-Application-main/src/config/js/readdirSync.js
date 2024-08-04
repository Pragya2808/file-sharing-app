const { count } = require("console");
const fs = require("fs");
const path = require("path");

var kindFile = ["code", "de-cuong", "slide", "study", "tieu-luan", "other"];

function typeFile(filename) {
  var i = 0;
  for (i = filename.length; i >= 0; i--) {
    if (filename[i] === ".") break;
  }
  return filename.substr(i + 1).toLowerCase();
}

function getDir(type, Folder, counter) {
  var arr = [];

  if (!counter) counter = Infinity;

  if (type === "all") {
    var pathDir = [];

    for (var i = 0; i < kindFile.length; i++) {
      var temp = kindFile[i];
      temp = path.join(Folder, temp);

      pathDir.push(temp);
    }
    for (var i = 0; i < pathDir.length; i++) {
      var FS = Array.from(fs.readdirSync(pathDir[i]));

      for (var j = 0; j < FS.length && counter > 0; j++, counter--) {
        file = FS[j];
        var temp = typeFile(file);

        if (temp === "jpg" || temp === "png") {
          arr.push({
            name: file,
            type: kindFile[i],
            image: "true",
          });
        } else {
          arr.push({ name: file, type: kindFile[i], image: "" });
        }
      }
    }
  } else {
    Folder = path.join(Folder, type);
    var check = false;
    kindFile.map((value) => {
      if (value === type) {
        check = true;
      }
    }).length;

    if (Folder && check) {
      var FS = fs.readdirSync(Folder);
      for (var j = 0; j < FS.length; j++) {
        file = FS[j];
        var temp = typeFile(file);

        if (temp === "jpg" || temp === "png") {
          arr.push({
            name: file,
            type: type,
            image: "true",
          });
        } else arr.push({ name: file, type: type, image: "" });
      }
    }
  }

  return arr;
}

module.exports = getDir;
