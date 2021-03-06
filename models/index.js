const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

// Using foreign key for each
User.hasMany(Comment, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

// Module export the objects
module.exports = { User, Comment, Post };
