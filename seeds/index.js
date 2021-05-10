const sequelize = require("../config/connection");
const seedComment = require("./commentData");
const seedPost = require("./postData");

// Const seed all using async, await sequelize
// Force and process
const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedComment();

  await seedPost();

  process.exit(0);
};

// this lets seed all the files from the seeds folder
seedAll();
