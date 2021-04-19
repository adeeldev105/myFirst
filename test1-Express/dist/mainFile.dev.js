"use strict";

var express = require("express");

var mongoose = require("mongoose");

bodyParser = require('body-parser');

var User = require("./schemas/schema.js");

var Product = require("./schemas/prodSchema.js");

var path = require('path');

var _require = require("bson"),
    ObjectID = _require.ObjectID,
    ObjectId = _require.ObjectId;

var _require2 = require("process"),
    pid = _require2.pid;

var _require3 = require("os"),
    type = _require3.type;

var port = 8000;
var app = express();
mongoose.connect("mongodb://localhost:27017/seebiz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(function (res) {
  console.log("Connected to Database.");
})["catch"](function (error) {
  console.log(error);
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get("/user", function _callee(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.find({}));

        case 2:
          user = _context.sent;
          // console.log(user);
          res.send(user);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get("/user/:user_id/products", function _callee2(req, res) {
  var uId, userProducts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          uId = mongoose.Types.ObjectId(req.params.user_id); // const myProduct = await Product.populate((uId));

          _context2.next = 3;
          return regeneratorRuntime.awrap(Product.find({
            merchant_id: uId
          }).limit(10));

        case 3:
          userProducts = _context2.sent;
          res.send(userProducts);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app["delete"]("/delete/products/:pslug", function _callee3(req, res) {
  var p_slug, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          p_slug = req.params.pslug;
          console.log(p_slug);
          _context3.next = 4;
          return regeneratorRuntime.awrap(Product.deleteOne({
            slug: p_slug
          }));

        case 4:
          result = _context3.sent;
          console.log("Resut :", result);

          if (result.deletedCount > 0) {
            res.send({
              value: "Deleted Successfully"
            });
          } else {
            res.send({
              value: "Deletion value not found........."
            });
          }

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // `http://localhost:8000/update/${p_slug}/Name/${p_name}/price/${p_price}`

app.put("/update/:pslug/Name/:pname/price/:pprice", function _callee4(req, res) {
  var p_slug, p_name, p_price, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          p_slug = req.params.pslug;
          p_name = req.params.pname;
          p_price = req.params.pprice;
          console.log(p_slug);
          console.log(p_name);
          p_price = Number(p_price);
          console.log(p_price);
          _context4.next = 9;
          return regeneratorRuntime.awrap(Product.updateOne({
            slug: p_slug
          }, {
            title: p_name,
            price: p_price
          }));

        case 9:
          result = _context4.sent;

          if (result.nModified > 0) {
            res.send({
              value: "Successfully updated..........!!!"
            });
          } else {
            res.send({
              value: "Nothing to update..........!!!"
            });
          }

          console.log("Result : ", result);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.listen(port, function () {
  console.log("Listening to ", port);
});