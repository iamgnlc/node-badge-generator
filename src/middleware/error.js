module.exports = (_req, res, next) => {
  res.status(404);
  res.header({ "Content-Type": "application/json" });
  res.send({ error: "not found" });
  next();
};
