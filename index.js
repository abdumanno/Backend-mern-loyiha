const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.PORT_URL)
  .then(() => {
    console.log("Baza ulandi!!!");
  })
  .catch((err) => {
    if (err) throw err;
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", require("./router/user"));

app.get("/", (req, res) => {
  res.send(req);
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server run:${process.env.PORT}`);
});
