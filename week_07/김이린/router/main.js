module.exports = function (app) {
  app.get("/posts/:id", function (req, res) {
    res.render("index.html");
  });
};
