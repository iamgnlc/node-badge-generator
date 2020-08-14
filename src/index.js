require("dotenv").config();

const express = require("express");
const app = express();
const swig = require("swig");
const path = require("path");

const error = require("./middleware/error");
const headers = require("./middleware/headers");
const key = require("./middleware/key");

app.use(headers);
app.use(key);

app.get("/generate/:left/:right/:color?", (req, res) => {
  const badge = swig.renderFile(path.join(__dirname, "badge.svg"), req.params);

  res.writeHead(200, { "Content-Type": "image/svg+xml" });
  res.write(badge);
  res.end();
});

app.use(error);

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
  console.log("Environment:", process.env.NODE_ENV?.toUpperCase());
});
