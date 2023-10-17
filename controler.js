"use strict";

const response = require("./response");
const conn = require("./konesksi");

exports.index = function (req, res) {
  response.ok("apklikasi api aman", res);
};
