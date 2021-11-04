'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define(
    'UserGroup', {
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
      group_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'Unique Group ID'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'user_group',
      plural: 'user_groups',
      tableName: 'user_group',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'User Group Model',
      indexes: [{
        name: 'idx_unique',
        fields: ['user_id', 'group_id']
      }]
    }
  );
  UserGroup.associate = function(models) {
    UserGroup.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    });
    UserGroup.belongsTo(models.Group, {
      foreignKey: 'group_id',
      target: 'id'
    });
  }
  return UserGroup;
};
