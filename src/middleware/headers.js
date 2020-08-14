const { author } = require("../../package.json");

module.exports = (_req, res, next) => {
  res.removeHeader("X-Powered-By");
  res.header({ "X-Author": author.name });
  next();
};
