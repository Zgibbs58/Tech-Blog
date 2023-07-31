const router = require("express").Router();
const { Post, Comment, User } = require("../../models");

// post a new blog post from dashboard
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.render("dashboard", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get a blog post from dashboard
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, { include: [{ model: User, attributes: ["username"] }] });
    const post = postData.get({ plain: true });
    res.render("dashboardUpdate", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Update a blog post from dashboard
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    console.log("updatedPost", updatedPost);
    res.json(updatedPost);

    // res.render("dashboard", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add a comment to a post route
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
