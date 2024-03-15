const express = require("express");
const app = express();

app.get("/", function (req, res) {
  return res.send("hello node!!!");
});

app.listen(3000);
// http://localhose:3000/
