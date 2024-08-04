// Connect to the server.
const mongoose = require("mongoose");
// mongodb://localhost:27017
const currentUser = {
  username: process.env.USERNAME_MONGO,
  password: process.env.PASSWORD_MONGO,
};
const uri = process.env.MONGODB_DEVELOPMENT
  || `mongodb+srv://${currentUser.username}:${currentUser.password}@cluster01.chrqhpv.mongodb.net/`;


async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connection Successfully");
  } catch (err) {
    console.log("Connection Error" + err.message);
  }
}

module.exports = { connect };
