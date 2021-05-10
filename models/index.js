const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

// Using foreign key for each
User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(User, {
  foreignKey: "user_id",
});

// Module export the objects
module.exports = { User, Post, Comment };
