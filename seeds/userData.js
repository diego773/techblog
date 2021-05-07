const { User } = require("../models");

const userData = [
  {
    username: "tomfrommyspace",
    password: "myspace",
  },
  {
    username: "michaelscott",
    password: "theoffice",
  },
  {
    username: "jimhalpert",
    password: "facebook",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
