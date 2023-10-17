"use strict";

exports.ok = function (values, res) {
  const data = {
    status: 200,
    value,
  };

  res.json(data);
  res.end();
};
