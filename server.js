const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// panggil routers

const routers = require("./routers");
routers(app);

app.listen(port, () => {
  console.log(`server berjalan di https://localhost:${port}`);
});
