const router = require("express").Router();
const { Post, Comment, User } = require("../../models");

// router.post("/:id", async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       content: req.body.content,
//       post_id: req.params.id,
//       user_id: req.session.user_id,
//     });

//     const commentData = await Comment.findAll({
//       where: {
//         post_id: req.params.id,
//       },
//     });

//     const comments = commentData.map((comment) => comment.get({ plain: true }));

//     res.render("post", { comments, loggedIn: req.session.loggedIn });
//     // res.status(200).json(newComment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, { include: [{ model: User, attributes: ["username"] }] });

//     // Finds all comments for a single post id
//     const commentData = await Comment.findAll({
//       where: {
//         post_id: req.params.id,
//       },
//       include: [{ model: User, attributes: ["username"] }],
//     });

//     const post = postData.get({ plain: true });

//     const comments = commentData.map((comment) => comment.get({ plain: true }));

//     res.render("dashboardPost");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get("/", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }

  res.render("dashboardPost", { loggedIn: req.session.loggedIn, isDashboardPage: true });
});

module.exports = router;
