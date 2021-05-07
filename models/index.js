const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

// Using foreign key for each
User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(User, {
  foreignKey: "user_id",
});

// Module export the objects
module.exports = { User, Comment, Post };
