const { Post } = require("../models");

const postData = [
  {
    title: "Test Post 1",
    content: "This is the first test post.",
    user_id: 1,
  },
  {
    title: "Test Post 2",
    content: "This is the second test post.",
    user_id: 2,
  },
  {
    title: "Test Post 3",
    content: "This is the third test post.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
