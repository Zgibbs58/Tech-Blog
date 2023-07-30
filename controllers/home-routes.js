const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const blogData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }, { model: Comment }],
    });

    const posts = blogData.map((post) => post.get({ plain: true }));

    res.render("index", { posts, loggedIn: req.session.loggedIn });
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

// withAuth is using helper auth.js to check if user is logged in
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const blogData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }, { model: Comment }],
    });

    const posts = blogData.map((post) => post.get({ plain: true }));

    res.render("dashboard", { isDashboardPage: true, posts });
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({ plain: true });

    res.render("post", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
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

// path to see users being added in insomnia
router.get("/user", async (req, res) => {
  //   if (req.session.loggedIn) {
  //     res.redirect("/");
  //     return;
  //   }
  const blogData = await User.findAll({});

  const posts = blogData.map((post) => post.get({ plain: true }));

  res.json(posts);
});

router.get("/post", async (req, res) => {
  //   if (req.session.loggedIn) {
  //     res.redirect("/");
  //     return;
  //   }
  const blogData = await Comment.findAll({});

  const posts = blogData.map((post) => post.get({ plain: true }));

  res.json(posts);
});

module.exports = router;
