'use strict'
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    'Group', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: 'Unique ID'
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'name',
        comment: 'Group Name'
      },
      slug: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'slug',
        comment: 'Generated Slug'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'group',
      plural: 'groups',
      tableName: 'groups',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Group Model'
    }
  )
  return Group
}
