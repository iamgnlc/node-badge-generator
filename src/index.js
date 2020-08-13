require("dotenv").config();

var express = require("express");
var app = express();
var swig = require("swig");
var path = require("path");

app.get("/generate/:left/:right/:color?", (req, res) => {
  var badge = swig.renderFile(path.join(__dirname, "badge.svg"), req.params);

  res.writeHead(200, { "Content-Type": "image/svg+xml" });
  res.write(badge);
  res.end();
});

var server = app.listen(process.env.PORT || 3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
  console.log("Environment:", process.env.NODE_ENV?.toUpperCase());
});
