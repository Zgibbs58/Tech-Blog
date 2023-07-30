const router = require("express").Router();
const { Post, Comment, User } = require("../../models");

router.get("/", (req, res) => {
  res.render("dashboardPost", { loggedIn: req.session.loggedIn, isDashboardPage: true });
});

router.get("/:id", (req, res) => {
  res.render("dashboardUpdate", { loggedIn: req.session.loggedIn, isDashboardPage: true });
});
module.exports = router;
