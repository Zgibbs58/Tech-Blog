const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }, { model: Comment }],
    });

    const posts = blogData.map((post) => post.get({ plain: true }));

    res.render("index", { posts });
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    res.render("dashboard", { isDashboardPage: true });
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signUp", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signUp");
});

module.exports = router;
