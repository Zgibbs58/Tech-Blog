const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./postRoutes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/users", userRoutes);
router.use("/post", postRoutes);
router.use("/userPosts", dashboardRoutes);

module.exports = router;
