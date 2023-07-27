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

module.exports = router;
