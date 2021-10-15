'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        as: 'my_posts',
        foreignKey: 'userid'
      })
      User.hasMany(models.Comment, {
        as: 'my_comments',
        foreignKey: 'userid'
      })
      User.hasMany(models.Guild_config, {
        as: 'my_guild-settings',
        foreignKey: 'userid'
      })
    }
  }
  User.init(
    {
      user_id: DataTypes.STRING,
      username: DataTypes.STRING,
      avatar: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
