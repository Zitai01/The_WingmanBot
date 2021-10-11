'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Post, {
        as: 'post_comments',
        foreignKey: 'postid'
      })
      Comment.belongsTo(models.User, {
        as: 'user_comments',
        foreignKey: 'userid'
      })
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      userid: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      postid: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'posts',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
