const { Schema, model } = require("mongoose");

module.exports = model(
  "users",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  })
);
