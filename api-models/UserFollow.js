'use strict'
module.exports = (sequelize, DataTypes) => {
  const UserFollow = sequelize.define(
    'UserFollow', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'Unique User ID'
      },
      follow_user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'Unique User ID of User that is being Followed'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'user_follow',
      plural: 'user_follows',
      tableName: 'user_follows',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'User Follow Model',
      indexes: [{
        name: 'idx_unique',
        fields: ['user_id', 'follow_user_id']
      }]
    }
  )
  UserFollow.associate = function(models) {
    UserFollow.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    })
  }
  return UserFollow
}
