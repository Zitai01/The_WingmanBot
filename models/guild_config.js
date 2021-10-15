'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Guild_config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Guild_config.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userid'
      })
    }
  }
  Guild_config.init(
    {
      msg: DataTypes.STRING,
      triggermsg: DataTypes.STRING,
      guildid: DataTypes.STRING,
      userid: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Guild_config',
      tableName: 'guild_configs'
    }
  )
  return Guild_config
}
