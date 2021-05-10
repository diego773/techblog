const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a class for Post
class Post extends Model {}

// This will let the user put their title and comment
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

// Module export Post
module.exports = Post;
