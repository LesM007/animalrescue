require("dotenv").config();
const express = require("express");
//import express from "express" <-- es 6 import
const cors = require("cors");
const animals = require("./routes/animals.routes");

//set up express app
const app = express();

//import db-connection
require("./database");

//serve docs
app.use("/", express.static("docs"));

//accept request from anywhere
app.use(cors());

//routes
app.use("/api/vi", animals);

app.listen(4000, () => {
  console.log("Listening for requests on port 4000");
});
