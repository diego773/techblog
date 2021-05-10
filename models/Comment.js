const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Creating class for Comments
class Comment extends Model {}

// This will initialize comment field
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

// Comment export
module.exports = Comment;
