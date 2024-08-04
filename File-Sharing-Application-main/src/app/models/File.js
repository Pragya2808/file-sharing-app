const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// name, id, url, img, delete
const FileSchema = new Schema({
  name: { type: "String", default: "" },
  description: { type: "String", default: "" },
  type: { type: "String", default: "other" },
  id: { type: "String", default: "" },
  url: { type: "String", default: "" },
  img: { type: "String", default: "" },
  delete: { type: "Boolean", default: false },
});

module.exports = new mongoose.model("File", FileSchema);
