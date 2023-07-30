const router = require("express").Router();
const { Post, Comment } = require("../../models");

router.post("/:id", async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      post_id: req.params.id,
      user_id: req.session.user_id,
    });

    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render("post", { comments, loggedIn: req.session.loggedIn });
    // res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
