const { User } = require("../models");

const userData = [
  {
    username: "tomfrommyspace",
    password: "myspace",
    email: "tom@mail.com",
  },
  {
    username: "michaelscott",
    password: "theoffice",
    email: "michael@mail.com",
  },
  {
    username: "jimhalpert",
    password: "facebook",
    email: "jim@mail.com",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
