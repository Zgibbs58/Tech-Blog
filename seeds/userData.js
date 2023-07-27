const { User } = require("../models");

const userData = [
  {
    username: "testuser1",
    email: "user1@gmail.com",
    password: "password1234",
  },
  {
    username: "testuser2",
    email: "user2@gmail.com",
    password: "password1234",
  },
  {
    username: "testuser3",
    email: "user3@gmail.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
