const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server berjalan di https://localhost:${port}`);
});
