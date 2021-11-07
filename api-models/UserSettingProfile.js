'use strict'
module.exports = (sequelize, DataTypes) => {
  const UserSettingProfile = sequelize.define(
    'UserSettingProfile', {
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
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'user_settings_profile',
      plural: 'user_settings_profiles',
      tableName: 'user_settings_profile',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'User Setting Profile Model'
    }
  )
  UserSettingProfile.associate = function(models) {
    UserSettingProfile.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    })
  }
  return UserSettingProfile
}
