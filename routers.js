"use strict";

module.exports = function (app) {
  const myjson = require("./controler");

  app.route("/").get(myjson.index);
};
