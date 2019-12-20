const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // authenicaton here //
});

const User = mongoose.model("User", userSchema);

module.exports = User;
