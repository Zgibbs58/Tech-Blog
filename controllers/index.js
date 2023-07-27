const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  const blogData = await Post.findAll({
    include: [{ model: User, attributes: ["username"] }, { model: Comment }],
  });

  const posts = blogData.map((post) => post.get({ plain: true }));

  res.render("index", { posts });
});

module.exports = router;
