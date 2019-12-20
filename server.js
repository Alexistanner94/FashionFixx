const axios = require("axios");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/fashion", (req, res) => {
  res.json({ msg: "Hello from the backend!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/FashionFixx";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
