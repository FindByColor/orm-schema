'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInvite = sequelize.define(
    'UserInvite', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'Unique User ID of Referring User'
      },
      new_user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'Unique User ID of New User'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'user_invite',
      plural: 'user_invites',
      tableName: 'user_invite',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'User Invite Model',
      indexes: [{
        name: 'idx_unique',
        fields: ['user_id', 'new_user_id']
      }]
    }
  );
  UserInvite.associate = function(models) {
    UserInvite.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    });
  }
  return UserInvite;
};
