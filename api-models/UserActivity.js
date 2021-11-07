'use strict'
module.exports = (sequelize, DataTypes) => {
  const UserActivity = sequelize.define(
    'UserActivity', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: 'Unique ID'
      },
      user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'Unique User ID'
      },
      type: {
        type: DataTypes.ENUM,
        values: ['changed_email', 'changed_password', 'changed_username', 'closed_account', 'comment_liked', 'created_account', 'downgraded_account', 'followed_user', 'left_comment', 'liked_comment', 'login', 'logout', 'received_comment', 'reset_password', 'upgraded_account', 'user_followed'],
        allowNull: false,
        defaultValue: 'login',
        comment: 'Type of Activity'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'user_activity',
      plural: 'user_activities',
      tableName: 'user_activity',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'User Activity Model',
      indexes: [{
        name: 'idx_type',
        fields: ['type']
      }]
    }
  )
  UserActivity.associate = function(models) {
    UserActivity.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    })
  }
  return UserActivity
}
