const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garmentSchema = new Schema({
  //Insert clothing object/arrays \\
});

const Garment = mongoose.model("Garment", garmentSchema);

module.exports = Garment;
