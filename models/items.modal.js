const {Schema, model} = require("mongoose");

const itemSchema = new Schema({
  title: String,
  info:String,
  services: {
    type: Map,
    of: String
  }
})

module.exports = model("items",itemSchema);