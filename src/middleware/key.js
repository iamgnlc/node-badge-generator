const yn = require("yn");

module.exports = (req, res, next) => {
  if (yn(process.env.PROTECTED) && process.env.API_KEY !== req.query.apiKey) {
    const message = "invalid key";
    res.status(403);
    res.header({ "Content-Type": "application/json" });
    res.send({ error: message });
    next(message);
  }
  next();
};
