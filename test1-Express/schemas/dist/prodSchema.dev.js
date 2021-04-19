"use strict";

var mongoose = require("mongoose");

var _require = require("./schema"),
    schema = _require.schema;

var productSchema = new mongoose.Schema({
  title: {
    type: String
  },
  price: {
    type: Number
  },
  merchant_id: {
    type: mongoose.Types.ObjectId
  },
  product_images: {
    type: String,
    isTrashed: Boolean,
    isfeature: Boolean
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }]
});
module.exports = mongoose.model("myproducts", productSchema);