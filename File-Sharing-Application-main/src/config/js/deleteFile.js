const fs = require("fs");
const path = require("path");

function DeleteFile(directoryPath, filename) {
  var pathToFile = path.join(directoryPath, filename);

  if (fs.existsSync(pathToFile)) {
    fs.unlinkSync(pathToFile);
  }
}
module.exports = DeleteFile;
